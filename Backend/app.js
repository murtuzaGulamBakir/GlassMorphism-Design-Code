const express = require("express"); // Router managment
const app = express(); // express obj;

require("./src/startup/database")();
require("./src/startup/routes")(app);

app.get("/", (req, res) => {
  res.send("welcome");
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  //port Assigning
  console.log(`Listening on port ${port}...`);
});
