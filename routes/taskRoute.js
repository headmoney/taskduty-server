const express = require('express')
const { createTask, getAllTasksByUser, singleTask, deleteTask, updateTask } = require('../controllers/taskController');
const router = express.Router();
const auth = require('../middleware/auth')


// Post request
router.post('/task',auth, createTask);

// Get requiest ---- for getting user task
router.get("/task/:userID", auth,getAllTasksByUser);

// params for single task
router.get("/singletask/:taskId",auth,singleTask);

// delete request, D -- for delete in CRUD
router.delete('/deletetask/:taskId', auth, deleteTask);

// update request, U -- for update in CRUD operations
router.patch('/updatetask/:taskId',auth,updateTask)



module.exports = router;