const mongoose = require('mongoose');
const profileSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    hasorhasnotidea: {
        type:Boolean,
        required: true
    },
    idea: {
        type: String,
        required: false
    },
    whatkindaidea: {
        type: String,
        required: false
    },
    skills: {  
        type:Object,
        // required: true
    },
    moto: {
        type: String,
        required: false
    }
});
const Profile =   mongoose.model('Profile', profileSchema);

module.exports = Profile;
