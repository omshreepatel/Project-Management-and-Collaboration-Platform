const Project = require('../models/Project');
const User = require('../models/User');

exports.createProject = async (req, res) => {
    const { name, description } = req.body;
    try {
        const newProject = new Project({
            name,
            description,
            owner: req.user.id,
            members: [req.user.id]
        });
        const project = await newProject.save();
        res.json(project);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find({ members: req.user.id }).populate('owner members tasks');
        res.json(projects);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.addMember = async (req, res) => {
    const { projectId, userId } = req.body;
    try {
        const project = await Project.findById(projectId);
        const user = await User.findById(userId);
        if (!project || !user) return res.status(404).json({ msg: 'Project or user not found' });

        if (!project.members.includes(userId)) {
            project.members.push(userId);
            await project.save();
        }
        res.json(project);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
