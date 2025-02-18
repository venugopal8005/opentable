const mongoose = require('mongoose');
const bycrypt = require("bcryptjs");
const userschema = new mongoose.Schema({
    username    : {type:String, required:true,unique:true},
    email : {type:String,required:true,unique:true},
    password : {type:String,required:true}
}); 
// userschema.pre("save",async function (next) {
//     if (!this.isModified("password")) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });
module.exports = mongoose.model('User', userschema);    