const express = require("express");
const router = express.Router(); // Router for external module use
const { Result } = require("../models/results"); //Importing Result Schema

// adding a new result
router.post("/", async (req, res) => {
  var result = new Result({
    teamOneName: req.body.teamOneName,
    teamOneImage: req.body.teamOneImage,
    teamTwoName: req.body.teamTwoName,
    teamTwoImage: req.body.teamTwoImage,
    matchDate: req.body.matchDate,
    winner: req.body.winner,
  });

  //save the result to database
  result = await result.save();
  res.send(result);
});

// to get list of  all result
router.get("/", async (req, res) => {
  const results = await Result.find();
  res.send(results);
});

module.exports = router;
