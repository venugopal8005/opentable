const Profile = require('../modals/profile');
const settingupprofile = async(req, res) => {
try {
    const { username, hasorhasnotidea, idea, whatkindaidea, skills, moto } = req.body;
    const newuserprofile = new Profile({
        username: username,
        hasorhasnotidea: hasorhasnotidea,
        idea: idea,
        whatkindaidea: whatkindaidea,
        skills: skills,
        moto: moto
    });
await newuserprofile.save();
res.status(200).send('Profile Created');
console.log('Profile Created');
} catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
    
}
}
module.exports = {settingupprofile};