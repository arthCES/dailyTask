var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dailystatus');

var openCon = function(){
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("we're connected!");
    });
}

module.exports.openCon = openCon;