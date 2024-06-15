const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Project = require('../../models/Project');
const Task = require('../../models/Task');

const router = express.Router();

// @route    GET api/projects
// @desc     Get all projects
// @access   Private
router.get('/', auth, async (req, res) => {
    try {
        const projects = await Project.find({ user: req.user.id });
        res.json(projects);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    POST api/projects
// @desc     Create a project
// @access   Private
router.post(
    '/',
    [auth, [check('name', 'Name is required').not().isEmpty()]],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name } = req.body;

        try {
            const newProject = new Project({
                name,
                user: req.user.id,
            });

            const project = await newProject.save();

            res.json(project);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route    GET api/projects/:id/tasks
// @desc     Get all tasks for a project
// @access   Private
router.get('/:id/tasks', auth, async (req, res) => {
    try {
        const tasks = await Task.find({ project: req.params.id });
        res.json(tasks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
