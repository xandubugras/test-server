const express = require("express");
const os = require("os");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = 8080;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);
app.post("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);
app.listen(PORT, () => console.log("Listening on port 8080!"));
