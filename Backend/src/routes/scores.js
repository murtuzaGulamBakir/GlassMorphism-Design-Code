const express = require("express");
const router = express.Router(); // Router for external module use
const { Score } = require("../models/scores"); //Importing Scores Schema

// adding a new score
router.post("/", async (req, res) => {
  var score = new Score({
    scoretableteamImage: req.body.scoretableteamImage,
    scoretableTeamname: req.body.scoretableTeamname,
    PCTs: req.body.PCTs,
    points: req.body.points,
    won: req.body.won,
    lost: req.body.lost,
    draw: req.body.draw,
    series: req.body.series,
  });

  //save the score to database
  score = await score.save();
  res.send(score);
});

// to get list of  all score
router.get("/", async (req, res) => {
  const scores = await Score.find();
  res.send(scores);
});

module.exports = router;
