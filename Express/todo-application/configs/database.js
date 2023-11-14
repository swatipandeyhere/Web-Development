const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const database = process.env.DATABASE_URL;

const dbConnect = () => {
    mongoose.connect(database)
        .then(() => console.log("Database Connection is Successful!"))
        .catch((error) => {
            console.log("Error in Database Connection");
            console.error(error.message);
            process.exit(1);
        })
}

module.exports = dbConnect;