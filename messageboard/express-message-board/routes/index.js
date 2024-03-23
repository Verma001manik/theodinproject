var express = require('express');
var router = express.Router();

const messages = [
  {
    text:"Hi Bitch!!",
    user: "Jessy pinkman",
    added: new Date()
  },
  {
    text: "Whats up mf!",
    user: "WIll smith",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.get('/new', function(req,res,next){
  res.render('form', {title:'Add Message' })
})

router.post('/new',function(req,res,next){
  username = req.body.username;
  message = req.body.message;
  messages.push({text: message, user: username, added: new Date()});
  res.redirect('/');

})
module.exports = router;
