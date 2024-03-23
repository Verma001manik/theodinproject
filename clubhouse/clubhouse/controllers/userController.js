const User = require("../models/user");
const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// const session = require("express-session");
const bcrypt = require('bcryptjs');
const express = require("express");


exports.user_signup_get = (req,res)=>{
    res.render("signup", {title: "Signup"})

}
exports.user_signup_post = (req,res,next)=>{

    // password = req.body.password;
    bcrypt.hash(req.body.password,10,(err,hashedPassword)=>{
        if(err) {
            return next(err);

        }
        const user = new User({
            username: req.body.username,
            password : hashedPassword

        });
        user.save()
            .then(result=>{
                res.redirect("/");
            })
            .catch(err=>{
                next(err);

            });
    });
    
    // const user = new User({
    //     username: req.body.username,
    //     password: req.body.password
    // });
    // user.save()
    //     .then(result => {
    //         res.redirect("/");
    //     })
    //     .catch(err => {
    //         next(err);
    //     });
};


exports.user_login_get = (req,res)=>{
    res.render("login", {title:"Login"});

}
exports.user_login_post = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    // failureFlash: true
    

  });
  
exports.user_logout_post = (req,res,next)=>{
    req.logout(function(err){
        if(err){
            return next(err);

        }

        res.redirect("/");

    });
    
}
exports.member_get = (req,res)=>{
    // if(!res.locals.currentUser){
    //     return res.redirect("/login");

    // }
    res.render("member", {title:"Become Member",user:res.locals.currentUser});
    

}
exports.member_post = async (req, res, next) => {
    
    const passcode = req.body.passcode;
    // console.log(req.user);
   
  
    // Check if the entered passcode is correct
    if (passcode === "password") {
      const userId = req.user._id; // Assuming you have already implemented user authentication
  
      try {
        const updatedUser = await User.findByIdAndUpdate(
          userId,
          { member: true },
          { new: true }
        );
        console.log("User updated successfully:", updatedUser);
        res.redirect("/"); // Redirect the user to the homepage or any other desired page
      } catch (err) {
        console.log(err);
        res.status(500).send("Error updating user");
      }
    } else {
      res.status(401).send("Invalid passcode");
    }
  };
  
exports.admin_get = (req,res)=>{
    res.send("admin get");
}
exports.admin_post = (req,res)=>{
    res.send("admin post");
}
