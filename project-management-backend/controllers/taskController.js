const Task = require('../models/Task');
const Project = require('../models/Project');

exports.createTask = async (req, res) => {
    const { name, description, projectId, assignedTo, dueDate } = req.body;
    try {
        const project = await Project.findById(projectId);
        if (!project) return res.status(404).json({ msg: 'Project not found' });

        const newTask = new Task({
            name,
            description,
            project: projectId,
            assignedTo,
            dueDate
        });
        const task = await newTask.save();
        project.tasks.push(task.id);
        await project.save();

        res.json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ project: req.params.projectId }).populate('assignedTo');
        res.json(tasks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
