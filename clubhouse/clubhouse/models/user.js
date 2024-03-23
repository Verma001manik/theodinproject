const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true, maxLength: 20 },
    password: {type:String , required:true},

    member: { type: Boolean, default: false },
    admin: { type: Boolean, default: false },



});

UserSchema.virtual("url").get(function(){
    return "/user/${this._id}";
});
module.exports = mongoose.model("User", UserSchema);
