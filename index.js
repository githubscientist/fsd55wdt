// import monoose dependency
const mongoose = require('mongoose');

// import app from app.js
const app = require('./app');

console.log('Connecting to MongoDB...');

// Connect to MongoDB
mongoose.connect('mongodb+srv://sathishdatascientist:Guvi2023@cluster0.2r9mjwk.mongodb.net/FSD55WDTDB')
    .then(() => {
        console.log('Connected to MongoDB...');

        // after connecting to MongoDB, start the server
        app.listen(3001, () => {
            console.log('Server is running on port 3001...');
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB...', error.message);
    });