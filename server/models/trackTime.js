var mongoose = require('mongoose');

//creating schema
var trackTimeSchema = mongoose.Schema({
		t_id: {
			type: String
		},
		t_date: {
			type: Date
		},
		start_time: {
            type:Time
        },
		end_time: {
            type:Time
        },
		comment: {
			type: String
		}
	});

module.exports = mongoose.model('trackTime', trackTimeSchema);