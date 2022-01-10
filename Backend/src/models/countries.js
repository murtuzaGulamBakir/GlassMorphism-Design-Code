const mongoose = require("mongoose");

// defining country schema
const countrySchema = new mongoose.Schema({
  countryName: { type: String, required: true, minlength: 3, maxlength: 50 },
  captainname: { type: String, required: true, minlength: 3, maxlength: 50 },
  association: { type: String, required: true, minlength: 1, maxlength: 50 },
  debut: { type: String, required: true, minlength: 2, maxlength: 50 },
  winningPercentage: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  flagImage: { type: String, required: true, minlength: 5 },
});

//modelling country schema
const Country = mongoose.model("Country", countrySchema);

// export router for use
module.exports.Country = Country;
