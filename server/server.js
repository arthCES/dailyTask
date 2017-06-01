var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dbHelper = require('./dbHelper/dbHelper');
var requestHandler = require('./service/requestHandler');
var responseHandler = require('./service/responseHandler');

//connect to Mongo
dbHelper.openCon();

//middleware
app.use(bodyParser.json()); // support json encoded bodies

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
   res.send('Demon sage') ;
});

//Task-Routing
//Adding task
app.post('/addtask', function(req, res) {
    console.log(req.body);
    requestHandler.addTask(req.body, res);
});

//getting all task
app.get('/gettasks', function(req, res) {
    console.log(req.query.date);
    requestHandler.getTasks(req.query.date, res);
});

//getting task by id
app.post('/gettask', function(req, res) {
    console.log(req.body);
    requestHandler.getTaskById(req.body, res);
});
//Update Status by id
app.post('/updatestatus', function(req, res) {
    console.log(req.body);
    requestHandler.updateTaskStatus(req.body, res);
});

//Project-Routing
//Adding project
app.post('/addproject', function(req, res) {
    console.log(req.body);
    requestHandler.addProject(req.body, res);
   /* res.send("test");*/
});
//Get all projects
app.get('/getprojects', function(req, res) {
    console.log(req);
    requestHandler.getProjects(req, res);
   /* res.send("test");*/
});
//getting project by id
app.post('/getproject', function(req, res) {
    console.log(req.body);
    requestHandler.getProjectById(req.body, res);
});

//Time
//commit time
app.post('/commitTime', function(req, res) {
    console.log(req.body);
    res.send("Log");
});

var port = 3030;
app.listen(port);
console.log("Server Listening at " + port );