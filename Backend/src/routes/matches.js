const express = require("express");
const router = express.Router(); // Router for external module use
const { Match } = require("../models/matches"); //Importing Match Schema

// adding a new match
router.post("/", async (req, res) => {
  var match = new Match({
    teamOneName: req.body.teamOneName,
    teamOneImage: req.body.teamOneImage,
    teamTwoName: req.body.teamTwoName,
    teamTwoImage: req.body.teamTwoImage,
    matchDate: req.body.matchDate,
    venue: req.body.venue,
  });

  //save the match to database
  match = await match.save();
  res.send(match);
});

// to get list of  all matches
router.get("/", async (req, res) => {
  const matches = await Match.find();
  res.send(matches);
});

module.exports = router;
