const mongoose = require("mongoose");

const highscoreSchema = mongoose.Schema({
  score: { type: Number, required: true },
  player: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true }
});

module.exports = mongoose.model("Highscore", highscoreSchema);
