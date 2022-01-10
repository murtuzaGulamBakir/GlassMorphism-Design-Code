const express = require("express");
const router = express.Router(); // Router for external module use
const { Player } = require("../models/players"); //Importing Player Schema

// adding a new player
router.post("/", async (req, res) => {
  // create player
  var player = new Player({
    playerName: req.body.playerName,
    teamName: req.body.teamName,
    matchesPlayed: req.body.matchesPlayed,
    playerSpecialization: req.body.playerSpecialization,

    strikeRate: req.body.strikeRate,
    wicketsTaken: req.body.wicketsTaken,
    altName: req.body.altName,
    playerImage: req.body.playerImage,
  });

  //save the player to database
  player = await player.save();
  res.send(player);
});

// to get list of  all players
router.get("/", async (req, res) => {
  const players = await Player.find();
  res.send(players);
});

module.exports = router;
