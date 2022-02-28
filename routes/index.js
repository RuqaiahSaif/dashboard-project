const { Router } = require('express');
const assert = require("assert")
const multer = require('multer');
const path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
const User = require('./../models/user');
const Skills = require('./../models/dash-skills');
var experienceModel = require('../models/Experince');
var qualificationsModel=require('../models/eduction');
var socialModel = require('../models/social');
// ===multer file==//
require('dotenv/config');
const storage = multer.diskStorage({
 

});

const upload = multer({

});

// ==routing==//
const router = Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('pages/index',{title:'home'});
});

// router.get('/', (req, res, next) => {
//   User.find().then((result) => {
//     res.render('pages/index', { data: result })
//   });
// });
// dashboard page
// router.get('/dashboard', function(req, res) {
//   res.render('pages/dashboard');
// });
// social page
// router.get('/index', function(req, res) {
//   res.render('pages/index');
// });
// router.get('/dash-social', function(req, res) {
//   res.render('pages/dash-social');
// });
// Eduction page
 
router.get('/dash-Edu', function(req, res, next) {
  qualificationsModel.find().then((result)=>{
  
    res.render('pages/dash-Eduction', { qualifications:result });
  })
  });
// GET Expirence 
router.get('/dash-Experince', (req, res, next)=>{
  experienceModel.find().then((result) =>{
    res.render('pages/dash-Experince', { data: result})
  })
})
// GET social 
router.get('/dash-social', (req, res, next) => {
  socialModel.find().then((result) => {
    res.render('pages/dash-social', { data: result })
  })
})
// 
// Skills page
router.get('/dash-Skill', function(req, res, next) {
  Skills.find().then((result)=>{
    res.render('pages/dash-skills', { skills:result});
  console.log(result);
  })
  });
// user operation
const userFilesHandler = upload.fields([
]);
//find
router.get('/dashboard', (req, res, next)=>{
  User.find().then((result) =>{
    res.render('pages/dashboard', { data: result})
  })
})
// add user
router.post('/user-info', userFilesHandler, async (req, res) => {
  try {
    const { username,phone,email,Address } = req.body;
    await User.insertMany({
      username,
      phone,
      Address,
      email,
     
    });
    res.redirect('/dashboard');
  } catch (err) {
    console.log("canot derict");
    res.json(err.writeErrors[0].errmsg);
  }
});
//Edit  user on the view in the data tables section

router.post('/edit_User', function(req, res, next){
  console.log(req.body.username);
  var item = {
    username: req.body.username,
    phone: req.body.phone,
    Address:req.body.Address,
    email:req.body.email,
  };
  var id = req.body.id;
  User.updateMany({"_id": id}, {$set: item}, item, function(err, result){
   
    console.log("item updated");
    console.log(item);
  })
  res.redirect('/dashboard');
});

//Delete user item

router.get('/delete_user/:id',function(req,res,next){
  User.deleteOne({"_id":req.params.id},function(err,result){
    console.log("item deleted");
  })
  res.redirect('/dashboard');

});

//Add new skill to the view in the data tables section
router.post('/addskills', function(req, res, next) {
     
  var skillDetails = new Skills({
    title: req.body.title,
    progress_percent: req.body.progress_percent,
   
  });
   
  skillDetails.save();
        
console.log("skill was add")
res.redirect('/dash-Skill');

});
// Edit Skills
router.post('/Edit_skills', function(req, res, next){
  
  var item = {
    title: req.body.title,
    progress_percent: req.body.progress_percent,
   
  };
  var id = req.body.id;
  Skills.updateMany({"_id": id}, {$set: item}, item, function(err, result){
   
    console.log("item updated");
    console.log(item);
  })
  res.redirect('/dash-Skill');
});
//Delete skill item

router.get('/delete_skill/:id',function(req,res,next){
  Skills.deleteOne({"_id":req.params.id},function(err,result){
    console.log("item deleted");
  })
  res.redirect('/dash-Skill');

});

//Add new expirince to the view in the data tables section

router.post('/add_experience', function(req, res, next) {
     
  var experienceDetails = new experienceModel({
    experience: req.body.experience,
    year: req.body.year,
    company_name: req.body.company_name,
    Description: req.body.Description,
        Start_Date: req.body.Start_Date,
        End_Date: req.body.End_Date,
  });
   
  experienceDetails .save();
        

    res.redirect('/dash-Experince');

});
// Edit expirince
//Edit  experience on the view in the data tables section

router.post('/edit_experience', function(req, res, next){
  var item = {
    experience: req.body.experience,
    year: req.body.year,
    company_name:req.body.company_name,
    Description: req.body.Description,
    Start_Date: req.body.Start_Date,
    End_Date: req.body.End_Date
  };
  var id = req.body.id;
  experienceModel.updateOne({"_id": id}, {$set: item}, item, function(err, result){
    assert.equal(null, err);
    console.log("item updated");
  })
  res.redirect('/dash-Experince');
});

//Delete experience item

router.get('/delete_experience/:id',function(req,res,next){
  experienceModel.deleteOne({"_id":req.params.id},function(err,result){
    console.log("item deleted");
  })
res.redirect('/dash-Experince');

});

///////////social
//Add new social to the view in the data tables section

router.post('/add_social', function (req, res, next) {

  var socials = new socialModel({
    name: req.body.name,
    icon: req.body.icon,
    link: req.body.link,
 
  });

  socials.save();


  res.redirect('/dash-social');

});
// Edit social
//Edit  social on the view in the data tables section

router.post('/edit_social', function (req, res, next) {
  var item = {
    name: req.body.name,
    icon: req.body.icon,
    link: req.body.link,
    
  };
  var id = req.body.id;
  socialModel.updateOne({ "_id": id }, { $set: item }, item, function (err, result) {
    assert.equal(null, err);
    console.log("item updated");
  })
  res.redirect('/dash-social');
});

//Delete social item

router.get('/delete_social/:id', function (req, res, next) {
  socialModel.deleteOne({ "_id": req.params.id }, function (err, result) {
    console.log("item deleted");
  })
  res.redirect('/dash-social');

});

//Add new qualificationl to the view in the data tables section
router.post('/add_qualification', function(req, res, next) {
     
  var qualificationDetails = new qualificationsModel({
    qualification: req.body.qualification,
    date: req.body.date,
    university: req.body.university,
  });
   
  qualificationDetails.save();
        

    res.redirect('/dash-Edu');

});

// Edit qualification on the view in the data tables section

router.post('/edit_qualification', function(req, res, next){
  var item = {
    qualification: req.body.qualification,
    date: req.body.date,
    university:req.body.university
  };
  var id = req.body.id;
  qualificationsModel.updateOne({"_id": id}, {$set: item}, item, function(err, result){
    assert.equal(null, err);
    console.log("item updated");
  })
  res.redirect('/dash-Edu');
});

//Delete qualification item

router.get('/delete_qualification/:id',function(req,res,next){
  qualificationsModel.deleteOne({"_id":req.params.id},function(err,result){
    console.log("item deleted");
  })
res.redirect('/dash-Edu');

});
 


module.exports = router;
