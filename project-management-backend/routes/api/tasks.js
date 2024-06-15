const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Task = require('../../models/Task');
const Project = require('../../models/Project');

const router = express.Router();

// @route    POST api/tasks
// @desc     Create a task
// @access   Private
router.post(
    '/',
    [auth, [check('description', 'Description is required').not().isEmpty()]],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { description, projectId } = req.body;

        try {
            const project = await Project.findById(projectId);

            if (!project) {
                return res.status(404).json({ msg: 'Project not found' });
            }

            if (project.user.toString() !== req.user.id) {
                return res.status(401).json({ msg: 'User not authorized' });
            }

            const newTask = new Task({
                description,
                project: projectId,
            });

            const task = await newTask.save();

            res.json(task);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

module.exports = router;
