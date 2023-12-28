var express = require('express');
var router = express.Router();
const userModel = require("./users");


router.get('/', function (req, res, next) {
  res.render('index');
});

// router.get('/failed', function (req, res, next) {
//   req.flash("age", 12);
//   req.flash("name", "jay");

//   res.send("Set Flash")
// });

// router.get('/get', function (req, res, next) {
//   console.log(req.flash("age"),req.flash("name>><<"));
//   res.send("Check in terminal")
// });

// router.get('/create', async function (req, res) {
//   let userdata = await userModel.create({
//     username: "saket",
//     name: "Sakshi",
//     description: "I need clothes",
//     categories: ['fashion', 'games', 'social media']
//   })
//   res.send(userdata);
// });

// router.get('/find', async function (req, res) {
//   var regex = new RegExp("Chimmu",'i');
//   let user = await userModel.find({ username: regex });
//   res.send(user)
// });

// router.get('/create', async function (req, res) {
  
// });

// router.get('/find', async function (req, res) {
//   var regex = new RegExp("Games","i")
//  let user = await userModel.find({categories : {$all : [regex]} });
//   res.send(user)
// });

// router.get('/find', async function (req, res) {
//   var date1 = new Date('2023-12-27');
//   var date2 = new Date('2023-12-29');
//   let user = await userModel.find({datacreated : {$gte : date1,$lte : date2}});
//   res.send(user);
// });

// router.get('/find', async function (req, res) {
//     let user = await userModel.find({categories : {$exists : true}})
//     res.send(user);
//   });

router.get('/find', async function (req, res) {
  let user = await userModel.find({
    $expr : {
      $and : [
        {$gte : [{$strLenCP : '$username'},0]},
        {$lte : [{$strLenCP : '$username'},6]}
      ]
    }
  })
  res.send(user);
});

module.exports = router;
