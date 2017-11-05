const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    department : {
        type : String,
        required : true
    },
    rollnumber : {
        type : String,
        required : true
    },
    semester : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('student', studentSchema, 'studentCollection');