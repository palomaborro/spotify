const express = require("express");
const SongController = require("../controllers/song");
const middlewareAuth = require("../middlewares/authentication");
const multer = require("multer");

const api = express.Router();

api.get("/song/:id", middlewareAuth.isAuthenticated, SongController.getSong);
api.get("/songs/:album?", SongController.getSongs);
api.get("/get-album-song/:songFile", SongController.getSongFile);

api.post(
  "/song/:id",
  middlewareAuth.isAuthenticated,
  SongController.songUpload,
  SongController.saveSong
);

api.put("/song/:id", middlewareAuth.isAuthenticated, SongController.updateSong);

api.delete(
  "/song/:id",
  middlewareAuth.isAuthenticated,
  SongController.deleteSong
);

module.exports = api;
