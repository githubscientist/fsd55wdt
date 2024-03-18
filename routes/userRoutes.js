const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

// define the endpoints
userRouter.post('/signup', userController.signup);
userRouter.post('/signin', userController.signin);

// export the router
module.exports = userRouter;