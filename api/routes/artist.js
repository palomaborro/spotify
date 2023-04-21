const express = require("express");
const ArtistController = require("../controllers/artist");
const middlewareAuth = require("../middlewares/authentication");
const multer = require("multer");

const upload = multer({ dest: "./uploads/artists" });

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
  "/artists",
  middlewareAuth.isAuthenticated,
  ArtistController.artistImageUpload,
  ArtistController.saveArtist
);

// api.get("/get-image-artist/:imageFile", upload.single("image"));

// api.post(
//   "/upload-image-artist/:id",
//   [middlewareAuth.isAuthenticated, ArtistController.artistImageUpload],
//   ArtistController.uploadImage
// );

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
