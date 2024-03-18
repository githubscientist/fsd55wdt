// import monoose dependency
const mongoose = require('mongoose');

// import config from utils/config.js
const config = require('./utils/config');

// import app from app.js
const app = require('./app');

console.log('Connecting to MongoDB...');

// Connect to MongoDB
mongoose.connect(config.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB...');

        // after connecting to MongoDB, start the server
        app.listen(config.PORT, () => {
            console.log('Server is running on port 3001...');
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB...', error.message);
    });