// require express dependency
const express = require('express');

// import cors
const cors = require('cors');

const userRouter = require('./routes/userRoutes');

// create an express application
const app = express();

// use the cors middleware
app.use(cors());

// parse the request body as JSON
app.use(express.json());

// define the endpoints
app.use('/api/users', userRouter);

// export the app
module.exports = app;