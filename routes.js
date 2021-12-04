const express = require("express");
const app = express();
const recepies = require("Recipe.json");

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello to our restaurant app");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
