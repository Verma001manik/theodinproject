const Posts = require("../models/posts");
const User = require("../models/user");
const async = require("async");
const { body, validationResult } = require("express-validator");

exports.index = (req,res,next)=>{
    async.parallel({
        post_count(callback){
            Posts.countDocuments({}, callback);

        }
    },
    (err,results)=>{
        res.render("index", {
            title: "Blog",
            error:err,
            user: req.user,
            data:results,
        });
    }
    );    
};
exports.post_detail_get = (req,res,next)=>{
    async.parallel({
        post(callback){
            Posts.findById(req.params.id)
              .exec(callback);
        },

    },
    (err,results)=>{
        if(err){
            return next(err);
        }
        if(results.post== null){
            const err = new Error("Post not found");
            err.status = 404;
            return next(err);
        }
        res.render("post_detail",{
            title:results.post.title,
            post: results.post,

        });
    })
    res.send("post detail get");
};
exports.post_detail_post = (req,res)=>{
    res.send("post detail post");
}
exports.create_post_get = (req,res)=>{
    res.render("create");
};
exports.create_post_post = (req,res)=>{
    res.send("create post post");

};
exports.update_post_get = (req,res)=>{
    res.send("update post get");
};
exports.update_post_post = (req,res)=>{
    res.send("update post post");

};
exports.delete_post_get = (req,res)=>{
    res.send("delete post get");
};
exports.delete_post_post = (req,res)=>{
    res.send("delete post post");

};
exports.published_posts = (req,res)=>{
    res.send("all published posts");
};
exports.unpublished_posts = (req,res)=>{
    res.send("all unpublished posts ");
};
