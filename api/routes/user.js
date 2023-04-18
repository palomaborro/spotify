const express = require("express");
const UserController = require("../controllers/user");
const middlewareAuth = require("../middlewares/authentication");
const multer = require("multer");

const upload = multer({ dest: "./uploads/users" });

const api = express.Router();

api.get("/get-image-user/:imageFile", UserController.getImageFile);
api.get(
  "/profile/:id",
  middlewareAuth.isAuthenticated,
  UserController.getUserProfile
);

api.post("/sign-up", upload.single("image"), UserController.saveUser);
api.post("/login", UserController.loginUser);
api.post(
  "/upload-image-user/:id",
  [middlewareAuth.isAuthenticated, upload.single("image")],
  UserController.uploadImage
);

api.put(
  "/profile/:id",
  [middlewareAuth.isAuthenticated],
  UserController.updateUser
);

module.exports = api;
