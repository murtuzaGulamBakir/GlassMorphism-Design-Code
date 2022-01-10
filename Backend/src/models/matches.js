const mongoose = require("mongoose");

// Defining matches schema
const matchesSchema = new mongoose.Schema({
  teamOneName: { type: String, required: true, minlength: 3, maxlength: 20 },
  teamOneImage: { type: String, required: true, minlength: 5 },
  teamTwoName: { type: String, required: true, minlength: 3, maxlength: 20 },
  teamTwoImage: { type: String, required: true, minlength: 5 },
  matchDate: { type: String, required: true, minlength: 3, maxlength: 30 },
  venue: { type: String, required: true, minlength: 3, maxlength: 30 },
});

// model the match schema
const Match = mongoose.model("Match", matchesSchema);

// export router for use
module.exports.Match = Match;
