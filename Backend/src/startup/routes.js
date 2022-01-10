const express = require("express");
const countries = require("../routes/countries");
const players = require("../routes/players");
const matches = require("../routes/matches");
const results = require("../routes/results");
const scores = require("../routes/scores");
const cors = require("cors");

module.exports = function (app) {
  app.use(express.json()); // body parser
  app.use(cors("*"));
  app.use("/api/countries", countries); // use countries route for request like /api/countries
  app.use("/api/players", players); // use players route for request like /api/players
  app.use("/api/matches", matches); // use matches route for request like /api/matches
  app.use("/api/results", results); // use results route for request like /api/results
  app.use("/api/scores", scores); // use scores route for request like /api/scores
};
