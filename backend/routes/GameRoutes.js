const express = require("express");
const router = express.Router();
const GameController = require("../controllers/GameController");
const checkAuthentication = require("../middlewares/authentication");

module.exports = router;
