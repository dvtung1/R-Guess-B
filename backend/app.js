const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();
const app = express();

mongoose
  .connect(
    `mongodb+srv://dvtung1:${
      process.env.DB_ID
    }@cluster0-hrsq8.mongodb.net/test?retryWrites=true`,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connect database failed");
  });

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

module.exports = app;
