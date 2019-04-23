// const mongoose = require("mongoose");

// const highscoreSchema = mongoose.Schema({
//   score: { type: Number, required: true },
//   player: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   date: { type: Date, required: true }
// });

// module.exports = mongoose.model("Highscore", highscoreSchema);

const Backendless = require("backendless");

class Highscore {
  constructor(args) {
    args = args || {};
    this.score = args.score || null;
    this.ownerId = args.ownerId || null;
    this.objectId;
    this.created;
  }
  save() {
    return Backendless.Data.of(Highscore).save(this);
  }
}

module.exports = Highscore;
