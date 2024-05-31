const express = require("express");
const cors = require("cors");
const getRank = require("./routes/rank");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/riot.txt", (req, res) => {
  try {
    res.send("45cba775-74b3-4de5-8a93-e29a59678ce9");
  } catch (error) {
    console.error(error);
  }
});

app.get("/val/rank/:region/:username/:tag/", getRank);

module.exports = app;