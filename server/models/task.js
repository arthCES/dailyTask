var mongoose = require('mongoose');

//creating schema
var taskSchema = mongoose.Schema({
    u_id: {
        type: String,
        required: true
    },
    p_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    dead_line: {
        type: Date
    },
    end_date: {
        type: Date
    },
    estimate: {
        type: Number
    },
    status: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Tasks', taskSchema);