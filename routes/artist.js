const express = require("express");
const ArtistController = require("../controllers/artist");
const middlewareAuth = require("../middlewares/authentication");
const multipart = require("connect-multiparty");

const api = express.Router();

const middlewareUpload = multipart({ uploadDir: "./uploads/artists" });

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
api.get("/get-image-artist/:imageFile", ArtistController.getImageFile);

api.post(
  "/artist",
  middlewareAuth.isAuthenticated,
  ArtistController.saveArtist
);
api.post(
  "/upload-image-artist/:id",
  [middlewareAuth.isAuthenticated, middlewareUpload],
  ArtistController.uploadImage
);

api.put(
  "/artist/:id",
  middlewareAuth.isAuthenticated,
  ArtistController.updateArtist
);

api.delete(
  "/artist/:id",
  middlewareAuth.isAuthenticated,
  ArtistController.deleteArtist
);

module.exports = api;
