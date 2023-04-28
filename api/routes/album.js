const express = require("express");
const AlbumController = require("../controllers/album");
const middlewareAuth = require("../middlewares/authentication");
const multer = require("multer");

const api = express.Router();

api.get("/album/:id", middlewareAuth.isAuthenticated, AlbumController.getAlbum);
api.get(
  "/albums/:artist?",
  middlewareAuth.isAuthenticated,
  AlbumController.getAlbums
);
api.get("/get-image-album/:imageFile", AlbumController.getImageFile);

api.post(
  "/album",
  middlewareAuth.isAuthenticated,
  AlbumController.albumImageUpload,
  AlbumController.saveAlbum
);
// api.post(
//   "/upload-image-album/:id",
//   [middlewareAuth.isAuthenticated, middlewareUpload],
//   AlbumController.uploadImage
// );

api.put(
  "/album/:id",
  middlewareAuth.isAuthenticated,
  AlbumController.updateAlbum
);

api.delete(
  "/album/:id",
  middlewareAuth.isAuthenticated,
  AlbumController.deleteAlbum
);

module.exports = api;
