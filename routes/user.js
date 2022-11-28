const express = require("express");
const UserController = require("../controllers/user");

const api = express.Router();
const middlewareAuth = require("../middlewares/authentication");

api.get("/test", middlewareAuth.isAuthenticated, UserController.test);

api.post("/register", UserController.saveUser);
api.post("/login", UserController.loginUser);
api.put(
  "/update-user/:id",
  middlewareAuth.isAuthenticated,
  UserController.updateUser
);

module.exports = api;
