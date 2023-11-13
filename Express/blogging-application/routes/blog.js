const express = require('express');
const router = express.Router();

// Import Controller
const { createComment } = require('../controllers/commentController');
const { createPost, getAllPosts } = require('../controllers/postController');

// Define API Routes
router.post('/comments/create', createComment);
router.post('/posts/create', createPost);
router.get('/posts', getAllPosts);

module.exports = router;