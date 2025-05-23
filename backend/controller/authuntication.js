const User = require("../modals/User");
const bcrypt = require("bcrypt");
// const Profile = require('../modals/profile');
const { set } = require("mongoose");
// const settingupprofile = async(req, res) => {
// try {
//     const { username, hasorhasnotidea, idea, whatkindaidea, skills, moto } = req.body;
//     const newuserprofile = new Profile({
//         username: username,
//         hasorhasnotidea: hasorhasnotidea,
//         idea: idea,
//         whatkindaidea: whatkindaidea,
//         skills: skills,
//         moto: moto
//     });
// await newuserprofile.save();
// res.status(200).send('Profile Created');
// } catch (error) {
//     console.log(error);
//     res.status(500).send('Server Error');
    
// }
// }
// module.exports = settingupprofile;
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password:hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Error in registration", error: err });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) return res.status(400).json({ message: "User not found" });
       
    const isMatch = await bcrypt.compare(password, user.password);
      console.log(isMatch);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
    
    res.status(200).json({ message: "Login successful!" });
  } catch (err) {
    res.status(500).json({ message: "Error in login", error: err });
  }
};

module.exports = { registerUser, loginUser };
