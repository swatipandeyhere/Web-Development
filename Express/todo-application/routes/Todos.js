const express = require('express');
const router = express.Router();

// Import Controller
const { createTodo } = require('../controllers/createTodo');
const { getTodo } = require('../controllers/getTodo');

// Define API Routes
router.post('/createTodo', createTodo);
router.get('/getTodos', getTodo);

module.exports = router;