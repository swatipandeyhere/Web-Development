// Import the Model
const Todo = require('../models/Todo');

// Define Route Handler
exports.getTodo = async (req, res) => {
    try {
        // Fetch all Todo items from Database
        const todos = await Todo.find({});

        // Send a JSON response with a success flag
        res.status(200).json(
            {
                success: true,
                data: todos,
                message: 'Todos Fetched Successfully'
            }
        )
    }
    catch (error) {
        console.error(error);
        res.status(500).json(
            {
                success: false,
                data: 'Internal Server Error',
                message: error.message
            }
        )
    }
}