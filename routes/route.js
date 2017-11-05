const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const Teacher = require('../models/teacher');
const Student = require('../models/student');
const Askeddoubt = require('../models/askeddoubt');
const Reportedpost = require('../models/reportedpost');

//get all the teachers
router.get('/teachers', (req, res, next)=>{
    console.log('getting all the teachers');
    Teacher.find({}).exec((err, teachers)=>{
        if(err){
            console.log('there is an error in retrieving the teachers');
        }
        else{
            res.json(teachers);
        }
    });
});

//get teacher using id
router.get('/teacher/:id', (req, res, next)=>{
    console.log('getting a teacher profile');
    Teacher.findById(req.params.id).exec((err, Teacher)=>{
        if(err){
            console.log('there is an error in getting the teacher profile');
        }
        else{
            res.json(Teacher);
        }
    });
});

//teacher sign up
router.post('/teacher', (req, res, next)=>{
    console.log('signing up an teacher');
    var newTeacher = Teacher();
    newTeacher.name = req.body.name;
    newTeacher.department = req.body.department;
    newTeacher.username = req.body.username;
    newTeacher.password = req.body.password;
    newTeacher.email = req.body.email;
    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(req.body.password, salt, (err, hash)=>{
            if(err) throw err;
            newTeacher.password = hash;
            newTeacher.save((err, insertedTeacher)=>{
                if(err){
                    console.log('there is an error in saving the teacher');
                }
                else{
                    res.json(insertedTeacher);
                }
            });
        });
    });
});

//getting students
router.get('/students', (req, res, next)=>{
    console.log('getting all the students');
    Student.find({}).exec((err, students)=>{
        if(err){
            console.log('there is an error in getting the students');
        }
        else{
            res.json(students);
        }
    });
});

//getting student by id
router.get('/student/:id', (req, res, next)=>{
    console.log('getting a student profile');
    Student.find({_id : req.params.id}).exec((err, student)=>{
        if(err){
            console.log('there is an error in getting the student profile');
        }
        else{
            res.json(student);
        }
    });
});

//signing up a student
router.post('/student', (req, res, next)=>{
    console.log('saving a student');
    var newStudent = Student();
    newStudent.name = req.body.name;
    newStudent.department = req.body.department;
    newStudent.rollnumber = req.body.rollnumber;
    newStudent.semester = req.body.semester;
    newStudent.username = req.body.username;
    newStudent.email = req.body.email;
    bcrypt.genSalt(10,(err, salt)=>{
        bcrypt.hash(req.body.password, salt, (err, hash)=>{
            if(err) throw err;
            newStudent.password = hash;
            newStudent.save((err, insertedStudent)=>{
                if(err){
                    console.log('there is an error in saving the student');
                }
                else{
                    res.json(insertedStudent);
                }
            });
        });
    });
});

//authenticating student
router.post('/studentauthenticate', (req, res, next)=>{
    console.log('finding the student');
    var user = Student();
    user.username = req.body.username;
    user.password = req.body.password;
    Student.findOne({username : user.username}).exec((err, foundStudent)=>{
     if(err){
         console.log('error in getting the user');
     }
     else{
        if(foundStudent===null){
            res.json({status : false});
        }else{
        bcrypt.compare(user.password, foundStudent.password, (err, ress)=>{
            if(ress===true){
                console.log('student found');
                res.json({status : true, userData : foundStudent});   
            }else{
                console.log('user not found');
                res.json({status : false});
            }
        });
     }
    }
    });
});

//authenticate teacher
router.post('/teacherauthenticate', (req, res, next)=>{
    console.log('finding the teacher');
    var user = Teacher();
    user.username = req.body.username;
    user.password = req.body.password;
    Teacher.findOne({username : user.username}).exec((err, foundTeacher)=>{
     if(err){
         console.log('error in getting the user');
     }
     else{
         if(foundTeacher === null){
             res.json({status : false});
         }else{
             bcrypt.compare(user.password, foundTeacher.password, (err, ress)=>{
                 if(ress===true){
                    res.json({status : true, userData : foundTeacher});
                 }else{
                    res.json({status : false});
                 }
             });
         }
     }
    });
});

//checking teacher username
router.post('/checkteacherusername', (req, res, next)=>{
    console.log('checking the username');
    username = req.body.username;
    Teacher.find({username : username}).exec((err, foundTeacher)=>{
        if(err){
            console.log('error in checking the username');
        }else{
            res.json(foundTeacher);
        }
    });
});

//checking student username
router.post('/checkstudentusername', (req, res, next)=>{
    console.log('checking the username');
    username = req.body.username;
    Student.find({username : username}).exec((err, foundStudent)=>{
        if(err){
            console.log('error in checking the username');
        }else{
            res.json(foundStudent);
        }
    });
});

//Adding a doubt
router.post('/addDoubt', (req, res, next)=>{
    console.log('adding a doubt to database');
    var newAskeddoubt = Askeddoubt();
    newAskeddoubt.username = req.body.username;
    newAskeddoubt.department = req.body.department;
    newAskeddoubt.subject = req.body.subject;
    newAskeddoubt.topic = req.body.topic;
    newAskeddoubt.query = req.body.doubt;
    newAskeddoubt.save((err, insertedDoubt)=>{
        if(err){
            console.log('there is an error in saving the doubt');
        }else{
            res.json(insertedDoubt);
        }
    });
});

//getting doubts
router.get('/doubts', (req, res, next)=>{
    console.log('getting all the doubts');
    Askeddoubt.find({}).exec((err, doubts)=>{
        if(err){
            console.log('there is an error in retrieving the doubts');
        }
        else{
            res.json(doubts);
        }
    });
});

//store answers for doubt
router.post('/storeAnswer', (req, res, next)=>{
    console.log('saving an answer');
    answer = req.body.submittedAnswerfs;
    query = req.body.queryfs;
    department = req.body.departmentfs;
    subject = req.body.subjectfs;
    topic = req.body.topicfs;
    Askeddoubt.findOneAndUpdate({query : query, topic : topic, subject : subject, department : department},
                                {$push : {answers : answer}},{new:true},(err, doc)=>{
                                    if(err){
                                        console.log('there is an error in saving the doubt');
                                    }else{
                                        res.json(doc);
                                    }

    });
});

//Reporting a post
router.post('/reportPost', (req, res, next)=>{
    console.log('Reporting a post');
    var newReportedPost = Reportedpost();
    newReportedPost.username = req.body.usernamefs;
    newReportedPost.department = req.body.departmentfs;
    newReportedPost.subject = req.body.subjectfs;
    newReportedPost.topic = req.body.topicfs;
    newReportedPost.query = req.body.queryfs;
    newReportedPost.save((err, reportedpost)=>{
                                    if(err){
                                        console.log('there is an error in reporting the post');
                                    }else{
                                        res.json(reportedpost);
                                    }

    });
});

//getting User doubts
router.post('/userDoubts', (req, res, next)=>{
    console.log('getting all the user doubts');
    username = req.body.username;
    Askeddoubt.find({username : username}).exec((err, userDoubts)=>{
        if(err){
            console.log('there is an error in retrieving the user doubts');
        }
        else{
            res.json(userDoubts);
        }
    });
});

//delete user doubt
router.post('/deleteUserDoubt', (req, res, next)=>{
    console.log('deleting user doubt');
    username = req.body.usernameD;
    query = req.body.queryD;
    Askeddoubt.remove({username : username, query : query}).exec((err, deletedDoubt)=>{
        if(err){
            console.log('there is an error in deleting the user doubt');
        }
        else{
            res.json(deletedDoubt);
        }
    });
});

module.exports = router;



















