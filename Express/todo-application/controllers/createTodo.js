// Import the Model
const Todo = require('../models/Todo');

// Define Route Handler
exports.createTodo = async (req, res) => {
    try {
        // Extract Title and Description from Request Body
        const { title, description } = req.body;

        // Create a new Todo object and Insert in database
        const response = await Todo.create({ title, description });

        // Send a JSON response with a success flag
        res.status(200).json(
            {
                success: true,
                data: response,
                message: 'Entry Created Successfully'
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