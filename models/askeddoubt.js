const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const askedDoubtSchema = new Schema({
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
    },
    answers : [String]
});

module.exports = mongoose.model('askedDoubt', askedDoubtSchema, 'discussion');