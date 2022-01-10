const mongoose = require("mongoose");

// Defining Result schema
const resultSchema = new mongoose.Schema({
  teamOneName: { type: String, required: true, minlength: 3, maxlength: 20 },
  teamOneImage: { type: String, required: true, minlength: 5 },
  teamTwoName: { type: String, required: true, minlength: 3, maxlength: 20 },
  teamTwoImage: { type: String, required: true, minlength: 5 },
  matchDate: { type: String, required: true, minlength: 3, maxlength: 30 },
  winner: { type: String, required: true, minlength: 3, maxlength: 30 },
});

// model the Result schema
const Result = mongoose.model("Result", resultSchema);

// export router for use
module.exports.Result = Result;
