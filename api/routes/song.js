const express = require("express");
const SongController = require("../controllers/song");
const middlewareAuth = require("../middlewares/authentication");
const multipart = require("connect-multiparty");

const api = express.Router();

const middlewareUpload = multipart({ uploadDir: "./uploads/songs" });

api.get("/song/:id", middlewareAuth.isAuthenticated, SongController.getSong);
api.get(
  "/songs/:album?",
  middlewareAuth.isAuthenticated,
  SongController.getSongs
);
api.get("/get-album-song/:songFile", SongController.getSongFile);

api.post("/song", middlewareAuth.isAuthenticated, SongController.saveSong);
api.post(
  "/upload-album-song/:id",
  [middlewareAuth.isAuthenticated, middlewareUpload],
  SongController.uploadFile
);

api.put("/song/:id", middlewareAuth.isAuthenticated, SongController.updateSong);

api.delete(
  "/song/:id",
  middlewareAuth.isAuthenticated,
  SongController.deleteSong
);

module.exports = api;
