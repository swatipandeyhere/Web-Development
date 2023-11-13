// Import the Model
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

// Define Route Handler
exports.createComment = async (req, res) => {
    try {
        // Fetch data from Request Body
        const { post, user, body } = req.body;

        // Create a Comment Object
        const comment = new Comment({
            post, user, body
        });

        // Save the new Comment into the database
        const savedComment = await comment.save();

        // Find the Post by ID, Add the new Comment to its Comments Array
        // new: true returns the Modified Document rather than the Original one
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true })

            // Populate the Comments Array with the Comment Documents
            .populate("comments")
            .exec();

        res.status(200).json(
            {
                success: true,
                data: updatedPost,
                message: 'Comment Created Successfully'
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

exports.getAllComments = async (req, res) => {
    try {
        const { post } = req.body;

        const comments = await Comment.find({ post: post });

        res.status(200).json(
            {
                success: true,
                data: comments,
                message: 'Comments Fetched Successfully'
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