const taskModel = require("../Modules/task_model");

//localhost:3000/api/v1/myTasks/createTask
const createTask = (req,res)=>{
    const newTask = req.body;
    taskModel.create(newTask).then(()=>{
        console.log(`task created successfully`,newTask);
        res.json({"message" : "task created successfully"});
    }).catch((err)=>{
        console.log(`task was not created`);
        res.json({"message" : "task was not created", "error" : err});
    })
}

module.exports = {createTask};