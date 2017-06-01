var mongoose = require('mongoose');

//creating schema
var projectSchema = mongoose.Schema({
		u_id: {
			type: String
		},
		project_name: {
			type: String
		},
		create_date: {
			type: Date,
			default: Date.now 
		}
	});

module.exports = mongoose.model('Projects', projectSchema);