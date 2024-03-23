const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.signup_get = (req,res)=>{



    res.render("signup");


};
exports.signup_post = async (req,res,next)=>{
    bcrypt.hash(req.body.password, 10,(err,hashedPassword)=>{
        if(err){
            return next(err);
        }
        const user = new User({
            username: req.body.username,
            password: hashedPassword
        });
        user.save()
            .then(result=>{
                res.redirect("/login");

            })
            .catch(err=>{
                next(err);
            })
    });
};

//     try{
//         const user = new User({
//             username: req.body.username,
//             password : req.body.password
//         });
//         console.log(user.password,user.username);
        
//         res.redirect("/");
//     } catch(err){
//         return next(err);
//     }
// }
exports.login_get = (req,res)=>{
    res.render("login");
};
// exports.login_post = passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//     // failureFlash: true,
    

//   });

exports.login_post = (req,res,next)=>{
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user : user
            });
        }

req.login(user, {session: false}, (err) => {
           if (err) {
               res.send(err);
           }

// generate a signed son web token with the contents of user object and return it in the response

const token = jwt.sign(user, 'secret');
           return res.json({user, token});
        });
    })(req, res);

};


exports.logout = (req,res,next)=>{
    req.logout(function (err){
        if(err){
            return next(err);

        }
        res.redirect("/");

    });
};
