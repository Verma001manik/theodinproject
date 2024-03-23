const mongoose = require("mongoose");
const Schema = mongoose.Schema ;
const { DateTime } = require("luxon");;


const postSchema = new Schema({
    title: {type:String , required: true},
    desc: {type:String },
    published : {type:Boolean, default:false},
    timestamp: { type: Date, default: Date.now, required: true },

});
postSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/post/${this._id}`;
  });
  
module.exports = mongoose.model("Posts", postSchema);
