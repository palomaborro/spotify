const express = require("express");
const FavoritesController = require("../controllers/favorites");
const middlewareAuth = require("../middlewares/authentication");

const api = express.Router();

api.post(
  "/favorites/:id",
  middlewareAuth.isAuthenticated,
  FavoritesController.saveFavoriteSongs
);

api.get(
  "/favorites/:id",
  middlewareAuth.isAuthenticated,
  FavoritesController.getFavoriteSongs
);

module.exports = api;
