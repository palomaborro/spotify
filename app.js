const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// routes
const user_routes = require("./routes/user");
const artist_routes = require("./routes/artist");
const album_routes = require("./routes/album");
const song_routes = require("./routes/song");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// htpp config
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// base routes
app.use("/", user_routes);
app.use("/", artist_routes);
app.use("/", album_routes);
app.use("/", song_routes);

module.exports = app;
