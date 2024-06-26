var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const { body, validationResult } = require("express-validator");
const session = require("express-session");
var logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);
const mongodb = proces.env.MONGODB_URL;

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
main().catch(err=> console.log(err));
async function main(){
  await mongoose.connect(mongodb);
}


const postRouter = require("./routes/post");


var app = express();
passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({ username: username })
    .then(user => {
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      bcrypt.compare(password,user.password,(err,res)=>{
        if(err){
          return done(err);

        }
        if(res){
          return done(null,user);

        }
        else {
          return done(null,false,{message:"Incorrect password"});

        }
      })
      
      // return done(null, user);
    })
    .catch(err => done(err));
}));


passport.serializeUser(function(user,done){
  done(null,user.id);

});
passport.deserializeUser(async function(id, done) {
  try{
    const user = await User.findById(id);
    done(null,user);
  } catch(err){
    done(err);
  };
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req,res,next){
  res.locals.currentUser = req.user;
  next();

});


app.use("/", postRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
