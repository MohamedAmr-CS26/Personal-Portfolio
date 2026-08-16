const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project-controllers');

// GET: /api/projects - Retrieve all projects
router.get('/', projectController.getAllProjects);

// GET: /api/projects/:id - Retrieve single project details
router.get('/:id', projectController.getProjectById);

// POST: /api/projects - Add a new project
router.post('/', projectController.createProject);

module.exports = router;