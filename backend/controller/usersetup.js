const Profile = require("../modals/Profilesetup");
const settingupprofile = async (req, res) => {
    try {
        const { ideahasornot, useridea, userwhatkindaidea, userskills, usersmoto } = req.body;
        const newProfile = new Profile({ ideahasornot, useridea, userwhatkindaidea, userskills, usersmoto });
        await newProfile.save();
        res.status(201).json({ message: "Profile setup successfully!" });
    } catch (err) {
        res.status(500).json({ message: "Error in profile setup", error: err });
    }
};
module.exports = { settingupprofile };