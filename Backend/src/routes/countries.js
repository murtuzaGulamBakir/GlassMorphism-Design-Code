const express = require("express");
const router = express.Router(); // Router for external module use
const { Country } = require("../models/countries"); //Importing Countries Schema

// creating a new country
router.post("/", async (req, res) => {
  var country = new Country({
    countryName: req.body.countryName,
    captainname: req.body.captainname,
    association: req.body.association,
    debut: req.body.debut,
    winningPercentage: req.body.winningPercentage,
    flagImage: req.body.flagImage,
  });

  country = await country.save();
  res.send(country);
});

// to get list of  all countries
router.get("/", async (req, res) => {
  const countries = await Country.find();
  res.send(countries);
});

module.exports = router;
