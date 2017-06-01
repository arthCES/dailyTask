var task = require('./task.service');
var project = require('./project.service');
var responseHandler = require('./responseHandler');

//tasks
//fetching all task
var getTasks = function (req, res) {
    console.log("inside ReqHandler of all task");
    task.getAllTasks(req, function(err, tasks){
                        if(err) {
                            throw err;
                        }
                        console.log("inside ReqHandler");
                        responseHandler.responseJson(req, res, tasks);
                 });
}

//adding task 
var addTask = function (req, res) {
    console.log("inside ReqHandler of add task");
    task.addTask(req, function(err, tasks){
                            if(err) {
                                throw err;
                            }
                            console.log("inside ReqHandler" );
                            responseHandler.responseJson(req, res, tasks);
                     });
}

//Get task by Object ID
var getTaskById = function (req, res) {
    console.log("inside ReqHandler of get task by id" + req);
    task.getTaskById(req, function(err, tasks){
                            if(err) {
                                throw err;
                            }
                            console.log("inside ReqHandler");
                            responseHandler.responseJson(req, res, tasks);
                     });
}

//Update task status by id
var updateTaskStatus = function (req, res) {
    console.log("inside ReqHandler of update task status by id");
    task.updateTaskStatus(req._id, req.status, function(err, tasks){
                            if(err) {
                                throw err;
                            }
                            console.log("inside ReqHandler" );
                            responseHandler.responseJson(req, res, tasks);
                     });
}

//Projects
//Adding project
var addProject = function (req, res) {
    console.log("inside ReqHandler of add project");
    project.addProject(req, function(err, tasks){
                            if(err) {
                                throw err;
                            }
                            console.log("inside ReqHandler" );
                            responseHandler.responseJson(req, res, tasks);
                     });
}

//fetching all project
var getProjects = function (req, res) {
    console.log("inside ReqHandler of all task");
    project.getProjects(function(err, projects){
                        if(err) {
                            throw err;
                        }
                        console.log("inside ReqHandler");
                        responseHandler.responseJson(req, res, projects);
                 });
}

//Get project by Object ID
var getProjectById = function (req, res) {
    console.log("inside ReqHandler of get task by id" + req);
    project.getProjectById(req, function(err, project){
                            if(err) {
                                throw err;
                            }
                            console.log("inside ReqHandler");
                            responseHandler.responseJson(req, res, project);
                     });
}

module.exports.getTasks = getTasks;
module.exports.getTaskById = getTaskById;
module.exports.addTask = addTask;
module.exports.addProject = addProject;
module.exports.updateTaskStatus = updateTaskStatus;
module.exports.getProjects = getProjects;
module.exports.getProjectById = getProjectById;