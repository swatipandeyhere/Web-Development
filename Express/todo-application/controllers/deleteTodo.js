// Import the Model
const Todo = require('../models/Todo');

// Define Route Handler
exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete({ _id: id });

        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo with ID ${id} deleted successfully`
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