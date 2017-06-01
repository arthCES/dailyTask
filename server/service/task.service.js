task = require('../models/task');

//Get all Tasks
var getAllTasks = function(date, callback, limit) {
     var today = new Date();
     task.find(
         {
          $or: [
             {"status": "false"}, {"create_date": date}
          ]
         },
         callback
     )
         .limit(limit);
     console.log("inside task service fetching all task");
};
//Get Task by id
var getTaskById = function(_id, callback) {
     var findById = {_id:_id._id};
     task.findOne(findById,callback);
     console.log("inside task service fetching task by id" + "{_id:"+_id._id+"}");
};

//Add Task
var addTask = function(doc, callback) {
     task.create(doc, callback);
     console.log("inside task service adding task");
};

//Updating Task Status by task _id
var updateTaskStatus = function(taskID,newStatus, callback) {
     task.update({'_id':taskID},{$set:{'status':newStatus}},callback);
     console.log("inside task service updating task status");
 };

module.exports = {
    getAllTasks : getAllTasks,
    getTaskById : getTaskById,
    addTask : addTask,
    updateTaskStatus : updateTaskStatus
}
/*module.exports.getAllTasks = getAllTasks;
module.exports.getTaskById = getTaskById;
module.exports.addTask = addTask;*/