var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const User = require("./models/user");
const bcrypt = require("bcryptjs");
require('dotenv').config();
let mongoose = require('mongoose');
mongoose.set("strictQuery",false);
const mongodb = proces.env.MONGODB_URL;
main().catch(err =>console.log(err));
async function main(){
  await mongoose.connect(mongodb);
  
}
var indexRouter = require('./routes/catalog');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(session({secret:"cats",resave:false,saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({extended:false}));






app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


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
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(err => {
      done(err, null);
    });
});

app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  next();
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
