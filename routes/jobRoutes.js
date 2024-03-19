const express = require('express');
const jobRouter = express.Router();
const jobController = require('../controllers/jobController');
const auth = require('../middleware/auth');

// define the endpoints
jobRouter.post('/createJob', auth.verifyToken, jobController.createJob);
jobRouter.get('/getAllJobs', auth.verifyToken, jobController.getAllJobs);
jobRouter.get('/getJob/:id', auth.verifyToken, jobController.getJob);

// export the router
module.exports = jobRouter;