var express = require('express');
var router = express.Router();
// import { v4 as uuidv4 } from 'uuid';
const uuidv4 = require('uuid').v4;


let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};
router.use((req,res,next)=>{
  req.me = users[1];
  next();
})
let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/users', (req, res) => {
  return res.send(Object.values(users));
});

router.post('/users', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

router.put('/users', (req, res) => {
  return res.send('PUT HTTP method on user resource');
});
router.get('/users/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});
router.post('/messages',(req,res)=>{
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.method.id,

  };
 
  messages[id] = message;
  return res.send(message);
})

router.delete('/users', (req, res) => {
  return res.send('DELETE HTTP method on user resource');
});
router.delete('/messages/:messageId', (req, res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = messages;

  messages = otherMessages;

  return res.send(message);
});

module.exports = router;
