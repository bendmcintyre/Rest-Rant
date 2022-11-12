// Require .env and get the enviorments variables
require("dotenv").config();

// Require needed node modules
const express = require("express");

// Initialize the app object
const app = express();

// Declare routes that people can visit on the application.
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// 404 Page
app.get("*", function (req, res) {
  res.status(404).send("<h1>404 Page</h1>");
});

// Connect to server
app.listen(process.env.PORT);
