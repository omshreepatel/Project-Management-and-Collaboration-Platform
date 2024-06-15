const express = require('express');
const router = express.Router();
const { createTask, getTasks } = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');

// @route   POST api/tasks
// @desc    Create a task
router.post('/', authMiddleware, createTask);

// @route   GET api/tasks/:projectId
// @desc    Get all tasks for a project
router.get('/:projectId', authMiddleware, getTasks);

module.exports = router;
