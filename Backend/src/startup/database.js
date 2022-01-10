const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect(
      "mongodb+srv://murtuza:12345@cluster0.lk9jv.mongodb.net/vidlynode?retryWrites=true&w=majority"
      // {
      //   useNewUrlParser: true,
      //   useFindAndModify: false,
      //   useUnifiedTopology: true,
      // }
    )
    .then(() => console.log("Connected to MongoDB"));
  // catch removed as Rejection is handled by error Module
};
