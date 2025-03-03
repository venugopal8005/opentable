const mongoose = require('mongoose');
const ProfilesetupSchema = new mongoose.Schema({
    ideahasornot : {type:Boolean, required:true},
    useridea : {type:String,default:""},
    userwhatkindaidea : {type:String,default:""},
    userskills : {type:Object,reuired:true},
    usersmoto  : {type:String,reuired:true},
});
module.exports = mongoose.model('Profilesetup', ProfilesetupSchema);

