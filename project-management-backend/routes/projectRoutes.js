const express = require('express');
const router = express.Router();
const { createProject, getProjects, addMember } = require('../controllers/projectController');
const authMiddleware = require('../middlewares/authMiddleware');

// @route   POST api/projects
// @desc    Create a project
router.post('/', authMiddleware, createProject);

// @route   GET api/projects
// @desc    Get all projects for a user
router.get('/', authMiddleware, getProjects);

// @route   PUT api/projects/add-member
// @desc    Add member to a project
router.put('/add-member', authMiddleware, addMember);

module.exports = router;
