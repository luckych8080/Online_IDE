const express = require("express");
const bodyParser = require('body-parser')
const axios = require("axios");

const HttpError = require("./http-error");

const app = express();
const port = 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json())

app.get("/", (req, res) => {
  return res.json({ status: "working!" });
});

// error handling in unsupported route
app.use((req, res, next) => {
  const error = new HttpError("Could not found this route!", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

app.listen(port, () => {
  console.log("Running at port: ", port);
});
