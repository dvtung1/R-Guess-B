const mongoose = require("mongoose");
require("dotenv").config();
const DB_ID = process.env.DB_ID;
mongoose
  .connect(
    `mongodb+srv://dvtung1:${DB_ID}@cluster0-hrsq8.mongodb.net/test?retryWrites=true`
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connect database failed");
  });
