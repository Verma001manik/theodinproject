const express = require("express");
const router = express.Router();

const Usercontroller = require("../controllers/userController");
const Messagecontroller = require("../controllers/messageController");

router.get("/", Messagecontroller.index);
router.get("/", (req,res)=>{
    res.render("layout", {user: req.user});
})
router.get("/signup", Usercontroller.user_signup_get);
router.post("/signup", Usercontroller.user_signup_post);

router.get("/login", Usercontroller.user_login_get);
router.post("/login", Usercontroller.user_login_post);

router.get("/logout", Usercontroller.user_logout_post);

router.get("/message", Messagecontroller.message_create_get);
router.post("/message", Messagecontroller.message_create_post);

router.get("/delete", Messagecontroller.message_delete_post);

router.get("/member", Usercontroller.member_get);
router.post("/member", Usercontroller.member_post);
router.get("/admin", Usercontroller.admin_get);
router.post("/admin", Usercontroller.admin_post);

module.exports = router;
