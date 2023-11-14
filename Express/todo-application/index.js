const express = require('express');
const app = express();

// Load Config from env file
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 4000;

// Middleware to Parse JSON Request Body
app.use(express.json());

// Import Routes for Todo API
const todoRoutes = require('./routes/Todos');

// Mount the Todo API Routes
app.use('/api/v1', todoRoutes);

// Start the Server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

// Connect to the Database
const dbConnect = require('./configs/database');
dbConnect();

// Default Route
app.get("/", (request, response) => {
    response.send(`<h1>Welcome to Home Page</h1>`)
})