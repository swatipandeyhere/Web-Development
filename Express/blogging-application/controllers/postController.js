// Import the Model
const Post = require('../models/postModel');

// Define Route Handler
exports.createPost = async (req, res) => {
    try {
        // Fetch data from Request Body
        const { title, body } = req.body;

        // Create a Post Object
        const post = new Post({
            title, body
        });

        // Save the new Post into the database
        const savedPost = await post.save();

        res.status(200).json(
            {
                success: true,
                data: savedPost,
                message: 'Post Created Successfully'
            }
        )
    }
    catch (error) {
        console.error(error);
        return res.status(500).json(
            {
                success: false,
                data: 'Internal Server Error',
                message: error.message
            }
        )
    }
}