const Message = require("../models/message");
const User = require("../models/user");
const async = require("async");


exports.index = async (req, res) => {
  try {
    const messages = await Message.find({}).populate("user");
    res.render("index", {
      user: req.user,
      title: "Messages",
      data: {
        messages: messages,
      },
    });
  } catch (err) {
    res.render("index", {
      title: "Messages",
      error: err,
      data: {},
    });
  }
};

  
exports.message_create_get = (req,res)=>{
    res.render("message",{title:"New Message"});
}
exports.message_create_post = (req,res,next)=>{
    const message = new Message({
      user: req.user._id,
      title: req.body.title,
      text: req.body.text,

    });
    message.save()
           .then(result=>{
            res.redirect("/");
          })
          .catch(err=>{
            next(err);
          })
}
exports.message_delete_post = (req,res)=>{
    return res.send("Delete HTTP METHOD on user " +  req.params.userId);
}
