// Import the Model
const Post = require('../models/postModel');
const Like = require('../models/likeModel');

// Define Route Handler
exports.likePost = async (req, res) => {
    try {
        // Fetch data from Request Body
        const { post, user } = req.body;

        // Create a Like Object
        const like = new Like({
            post, user
        });

        // Save the new Like into the database
        const savedLike = await like.save();

        // Find the Post by ID, Add the new Like to its Likes Array
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { likes: savedLike._id } }, { new: true })

            // Populate the Likes Array with the Like Documents
            .populate("likes")
            .exec();

        res.status(200).json(
            {
                success: true,
                data: updatedPost,
                message: 'Like Added Successfully'
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

exports.unlikePost = async (req, res) => {
    try {
        // Fetch data from Request Body
        const { post, like } = req.body;

        // Find and Delete the first matching like
        const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

        // Update the Post Collection
        const updatedPost = await Post.findByIdAndUpdate(post, { $pull: { likes: deletedLike._id } }, { new: true });

        res.status(200).json(
            {
                success: true,
                data: updatedPost,
                message: 'Like Removed Successfully'
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