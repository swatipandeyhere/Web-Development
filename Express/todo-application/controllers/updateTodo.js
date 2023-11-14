// Import the Model
const Todo = require('../models/Todo');

// Define Route Handler
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description, updatedAt: Date.now() }
        )

        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo with ID ${id} updated successfully`
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