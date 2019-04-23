const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const checkAuthentication = require("../middlewares/authentication");

router.post("/signup", UserController.signUp);
router.post("/login", UserController.logIn);
router.get("/logout", UserController.logOut);

module.exports = router;
