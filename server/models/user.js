var mongoose = require('mongoose');

//creating schema
var user = mongoose.Schema({
		u_id: {
			type: String
		},
		u_name: {
			type: String
		}
	});

module.exports = mongoose.model('user', user);