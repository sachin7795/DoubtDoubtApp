const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    department : {
        type : String,
        required: true
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

module.exports = mongoose.model('teacher', teacherSchema, 'teachercollection');