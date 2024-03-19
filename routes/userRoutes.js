const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// define the endpoints
userRouter.post('/signup', userController.signup);
userRouter.post('/signin', userController.signin);
userRouter.get('/getUser', auth.verifyToken, userController.getUser);

// export the router
module.exports = userRouter;