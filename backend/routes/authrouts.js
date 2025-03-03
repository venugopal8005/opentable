    const express = require("express");
const { registerUser, loginUser } = require("../controller/authuntication");
const {settingupprofile} = require("../controller/usersetup");

const router = express.Router();


router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/profile", settingupprofile);


module.exports = router;
