const express = require('express');
const router = express.Router();

// Import Controller
const { createComment } = require('../controllers/commentController');

// Define API Routes
router.post('/comments/create', createComment);

module.exports = router;