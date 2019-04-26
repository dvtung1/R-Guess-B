const Backendless = require("backendless");
let Highscore = require("../models/Highscore");

exports.saveHighscore = async (req, res) => {
  try {
    const userId = req.userInfo.userId;
    const score = req.body.score;

    let highScore = new Highscore({
      score,
      ownerId: userId
    });
    await highScore.save();
    return res.status(200).json({
      message: "Save highscore successfully"
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
};

exports.getHighscore = async (req, res) => {
  try {
    const userId = req.userInfo.userId;
    const whereClause = `ownerId='${userId}'`;
    const queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(
      whereClause
    );
    //sort by created time
    queryBuilder.setSortBy(["created DESC"]);
    //get list of current user's high score
    let highscoreArray = await Backendless.Data.of(Highscore).find(
      queryBuilder
    );
    //only get 2 fields which is score and created
    highscoreArray = highscoreArray.map(highscore => {
      return {
        score: highscore.score,
        created: highscore.created
      };
    });
    return res.status(200).json({
      message: "Fetch current user's highscore successfully",
      highscoreArray
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
};

exports.getSummary = async (req, res) => {
  try {
    const userId = req.userInfo.userId;
    let queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(
      `ownerId='${userId}'`
    );
    queryBuilder.setProperties([
      "Count(objectId) as count",
      "Avg(score) as average",
      "Min(score) as min",
      "Max(score) as max"
    ]);
    const result = await Backendless.Data.of(Highscore).find(queryBuilder);

    return res.status(200).json({
      message: "Fetch summary successfully",
      summary: {
        count: result[0].count,
        average: result[0].average,
        min: result[0].min,
        max: result[0].max
      }
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
};
