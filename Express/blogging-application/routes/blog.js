const express = require('express');
const router = express.Router();

// Import Controller
const { createComment, getAllComments } = require('../controllers/commentController');
const { createPost, getAllPosts } = require('../controllers/postController');
const { likePost, unlikePost } = require('../controllers/likeController');

// Define API Routes
router.post('/comments/create', createComment);
router.get('/comments', getAllComments);
router.post('/posts/create', createPost);
router.get('/posts', getAllPosts);
router.post('/likes/like', likePost);
router.post('/likes/unlike', unlikePost);

module.exports = router;