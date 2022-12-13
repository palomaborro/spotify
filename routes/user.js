const express = require("express");
const UserController = require("../controllers/user");
const middlewareAuth = require("../middlewares/authentication");
const multipart = require("connect-multiparty");

const api = express.Router();

const middlewareUpload = multipart({ uploadDir: "./uploads/users" });

// User routes
api.get("/get-image-user/:imageFile", UserController.getImageFile);

api.post("/register", UserController.saveUser);
api.post("/login", UserController.loginUser);
api.post(
  "/upload-image-user/:id",
  [middlewareAuth.isAuthenticated, middlewareUpload],
  UserController.uploadImage
);

api.put(
  "/update-user/:id",
  middlewareAuth.isAuthenticated,
  UserController.updateUser
);

module.exports = api;
