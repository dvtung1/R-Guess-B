const Backendless = require("backendless");
const express = require("express");
const bodyParser = require("body-parser");
const UserRoutes = require("./routes/UserRoutes");
const GameRoutes = require("./routes/GameRoutes");

require("dotenv").config();
const app = express();

Backendless.initApp(process.env.APP_ID, process.env.API_KEY);

//use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//to connect to front end
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/user", UserRoutes);
app.use("/api/game", GameRoutes);

module.exports = app;
