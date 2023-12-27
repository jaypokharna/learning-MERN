var express = require('express');
var router = express.Router();
const userModel = require("./users");

// router.get("/createuser",async function(req,res){
//   const createduser = await userModel.create({
//     username : "cartoon",
//     name : "Jay Pokharna",
//     age : 21
//   });
//   res.send(createduser);
// });

// router.get("/",function(req,res){
//   req.session.banned = true;
//   res.render("index");
// });

// router.get("/checkban",function(req,res){
//   if (req.session.banned == true){
//     res.send("404 Error - You are banned from the server");
//   }
//   else{
//     res.send("You are not banned")
//   }
 
// });

// router.get("/removeban",function(req,res){
//   if (req.session.banned == true){
//     req.session.destroy((err)=>{
//       if(err) throw err;
//       res.send("ban removed");
//     })
//   }
//   else{
//     res.send("You are not banned")
//   }
 
// });

router.get("/",function(req,res){
res.cookie("age",25);
res.render("index");
});

router.get("/readcookie",function(req,res){
console.log(req.cookies.age);
res.send("Reading Cooking");
});

router.get("/deletecookie",function(req,res){
  res.clearCookie("age");
  res.send("Deleted")
  });


module.exports = router;
