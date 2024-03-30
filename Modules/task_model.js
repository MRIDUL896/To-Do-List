const mongoose = require('mongoose');

const task_schema = new mongoose.Schema({
    task_name : String,
    description : String,
    deadline : String,
    isCompleted : Boolean
},{timestamps : true})

const taskModel = mongoose.model('tasks',task_schema);
module.exports = taskModel;