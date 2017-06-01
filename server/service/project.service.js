project = require('../models/project');

//Get all Project
 var getProjects = function(callback, limit) {
     project.find(callback)
         .limit(limit);
     console.log("inside task service fetching all Project");
};

//Get Task by id
 var getProjectById = function(_id, callback) {
     var findById = {_id:_id._id};
     project.findOne(findById,callback);
     console.log("inside task service fetching Project by id" + "{_id:"+_id._id+"}");
 };

//Add Task
 var addProject = function(doc, callback) {
     console.log("service");
     console.log(doc);
     project.create(doc, callback);
     console.log("inside task service adding project");
 };

module.exports = {
    getProjects : getProjects,
    getProjectById : getProjectById,
    addProject : addProject
}