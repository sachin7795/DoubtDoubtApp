const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportedPostSchema = new Schema({
    username : {
        type : String,
        required : true
    },
    department : {
        type : String,
        required : true
    },
    subject : {
        type : String,
        required : true
    },
    topic : {
        type : String,
        required : true
    },
    query : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('reportedPost', reportedPostSchema, 'reportedpost');