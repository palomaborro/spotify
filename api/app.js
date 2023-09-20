const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const app = express();

app.use(cors());

// routes
const user_routes = require("./routes/user");
const artist_routes = require("./routes/artist");
const album_routes = require("./routes/album");
const song_routes = require("./routes/song");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// base routes
app.use("/", user_routes);
app.use("/", artist_routes);
app.use("/", album_routes);
app.use("/", song_routes);

module.exports = app;
