const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.signUp = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    //get hash of password
    const hash = await bcrypt.hash(password, process.env.SALT);
    const user = new User({
      email,
      password: hash
    });
    await user.save();
    return res.status(201).json({
      message: "User created"
    });
  } catch (err) {
    return res.status(500).json({
      message: "Invalid authentication"
    });
  }
};

exports.logIn = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email });
    //check if user exist in db
    if (!user) {
      return res.status(401).json({
        message: "User not exist"
      });
    }
    //compare password
    const result = await bcrypt.compare(password, user.password);
    if (!result) {
      return res.status(401).json({
        message: "Wrong password"
      });
    }
    //sign the token with jwt and pass it to client
    const token = jwt.sign({ email, id: user._id }, process.env.JWT_KEY, {
      expiresIn: "1h"
    });
    return res.status(200).json({
      expiresIn: 3600,
      userId: user._id,
      token
    });
  } catch (err) {
    return res.status(500).json({
      message: "Authorize failed"
    });
  }
};
