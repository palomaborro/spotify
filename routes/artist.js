const express = require("express");
const ArtistController = require("../controllers/artist");
const middlewareAuth = require("../middlewares/authentication");

const api = express.Router();

api.get(
  "/artist/:id",
  middlewareAuth.isAuthenticated,
  ArtistController.getArtist
);
api.get(
  "/artists/:page?",
  middlewareAuth.isAuthenticated,
  ArtistController.getArtists
);

api.post(
  "/artist",
  middlewareAuth.isAuthenticated,
  ArtistController.saveArtist
);

module.exports = api;
