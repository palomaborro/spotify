const express = require("express");
const FavoritesController = require("../controllers/favorites");
const middlewareAuth = require("../middlewares/authentication");

const api = express.Router();

api.get(
  "/favorites/:id",
  middlewareAuth.isAuthenticated,
  FavoritesController.getFavoriteSongs
);

api.post(
  "/favorites/:id",
  middlewareAuth.isAuthenticated,
  FavoritesController.saveFavoriteSongs
);

module.exports = api;
