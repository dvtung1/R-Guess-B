const express = require("express");
const router = express.Router();
const GameController = require("../controllers/GameController");
const checkAuthentication = require("../middlewares/authentication");

router.post("/score", checkAuthentication, GameController.saveHighscore);
router.get("/score/", checkAuthentication, GameController.getHighscore);
router.get("/summary", checkAuthentication, GameController.getSummary);
router.get("/top", GameController.getTopPlayers);

module.exports = router;
