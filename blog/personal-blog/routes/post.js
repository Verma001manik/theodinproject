const express = require("express");
const router = express.Router();
const post_controller = require("../controllers/postController");
const user_controller = require("../controllers/userController");
const user = require("../models/user");

router.get("/",post_controller.index );
router.get("/signup" , user_controller.signup_get);
router.post("/signup", user_controller.signup_post);
router.get("/login", user_controller.login_get);
router.post("/login", user_controller.login_post);
router.get("/post/create", post_controller.create_post_get);
router.post("/post/create", post_controller.create_post_post);
router.get("/post/update", post_controller.update_post_get);

router.get("/post/:id", post_controller.post_detail_get);
router.post("/post/:id/update", post_controller.update_post_post);
router.get("/post/:id/delete",post_controller.delete_post_get);
router.post("/post/:id/delete", post_controller.delete_post_post);
router.get("/post/:id", post_controller.post_detail_get);
router.get("/publish", post_controller.published_posts);
router.get("/unpublished", post_controller.unpublished_posts);
router.get("/logout",user_controller.logout);


module.exports = router;

