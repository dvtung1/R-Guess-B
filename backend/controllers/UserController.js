const Backendless = require("backendless");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    await Backendless.UserService.register({ email, password });
    return res.status(201).json({
      message: "User created"
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
};

exports.logIn = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const currentUser = await Backendless.UserService.login(
      email,
      password,
      true
    );
    const token = jwt.sign(
      { email, userId: currentUser.objectId },
      process.env.JWT_KEY,
      {
        expiresIn: "1h"
      }
    );
    return res.status(200).json({
      expiresIn: 3600,
      userId: currentUser.objectId,
      token
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
};

exports.logOut = async (req, res) => {
  try {
    await Backendless.UserService.logout();
    return res.status(200).json({
      message: "Log out successfully"
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
};
