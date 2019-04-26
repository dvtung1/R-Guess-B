const Backendless = require("backendless");
const express = require("express");
const bodyParser = require("body-parser");
const UserRoutes = require("./routes/UserRoutes");
const GameRoutes = require("./routes/GameRoutes");
const path = require("path");
const cors = require("cors");

require("dotenv").config();
const app = express();

Backendless.initApp(process.env.APP_ID, process.env.API_KEY);

//use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//use cors setup for development purpose
app.use(cors());

app.use("/", express.static(path.join(__dirname, "angular")));
app.use("/api/user", UserRoutes);
app.use("/api/game", GameRoutes);
app.use("/api", (req, res) => {
  res.send("Welcome to our RGB API");
});
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "angular", "index.html"));
});

module.exports = app;
