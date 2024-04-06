const express = require('express')
const { createTask, getAllTasksByUser } = require('../controllers/taskController');
const router = express.Router();
const auth = require('../middleware/auth')


// Post request
router.post('/task',auth, createTask);

// Get requiest ---- for getting user task
router.get("/task/:userID", auth,getAllTasksByUser);



module.exports = router;