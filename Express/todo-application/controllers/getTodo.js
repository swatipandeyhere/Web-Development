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

exports.getTodoById = async (req, res) => {
    try {
        // Extract Todo items from Database on the basis of ID
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id });

        // Data for given ID not found
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: `No data found with ID ${id}`
            })
        }

        // Data for given ID found
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo with ID ${id} fetched successfully`
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            data: 'Internal Server Error',
            message: error.message
        })
    }
}