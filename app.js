const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// routes
const user_routes = require("./routes/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// htpp config

// base routes
app.use("/", user_routes);

module.exports = app;
