const mongoose = require("mongoose");

// Defining Score schema
const scoreSchema = new mongoose.Schema({
  scoretableteamImage: { type: String, required: true, minlength: 5 },
  scoretableTeamname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
  },
  PCTs: { type: String, required: true, minlength: 2, maxlength: 30 },
  points: { type: Number, required: true, minlength: 1, maxlength: 10 },
  won: { type: Number, required: true, minlength: 1, maxlength: 10 },
  lost: { type: Number, required: true, minlength: 1, maxlength: 10 },
  draw: { type: Number, required: true, minlength: 1, maxlength: 10 },
  series: { type: Number, required: true, minlength: 1, maxlength: 10 },
});

// model the Score schema
const Score = mongoose.model("Score", scoreSchema);

// export router for use
module.exports.Score = Score;
