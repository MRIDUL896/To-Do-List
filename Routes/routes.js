const express = require('express');
const { createTask } = require('../Controllers/task_controller');
const router = express.Router();

router.post('/createTask',createTask);   //localhost:3000/api/v1/myTasks/createTask

module.exports = router;