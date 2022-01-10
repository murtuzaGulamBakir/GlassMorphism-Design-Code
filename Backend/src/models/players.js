const mongoose = require("mongoose");

// creating schema
const playerSchema = new mongoose.Schema({
  playerName: { type: String, required: true, minlength: 3, maxlength: 30 },
  teamName: { type: String, required: true, minlength: 3, maxlength: 30 },
  matchesPlayed: { type: Number, required: true, minlength: 2, maxlength: 10 },
  playerSpecialization: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  strikeRate: { type: Number, required: true, minlength: 2, maxlength: 10 },
  wicketsTaken: { type: Number, required: true, minlength: 1, maxlength: 10 },
  altName: { type: String, required: true, minlength: 3, maxlength: 30 },
  playerImage: { type: String, required: true, minlength: 5 },
});

// model the player schema
const Player = mongoose.model("Player", playerSchema);

// export router for use
module.exports.Player = Player;
