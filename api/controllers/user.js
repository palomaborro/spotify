const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("../services/auth-service");
const fs = require("fs");
const path = require("path");

const saveUser = (req, res) => {
  const user = new User();
  const params = req.body;

  user.name = params.name;
  user.surname = params.surname;
  user.email = params.email;
  user.role = "ROLE_USER";
  user.image = null;

  if (params.password) {
    bcrypt.hash(params.password, 10, (err, hash) => {
      user.password = hash;
      if (user.name !== null && user.surname !== null && user.email !== null) {
        user.save((err, userStored) => {
          if (err) {
            res.status(500).send({ message: "Error saving user" });
          } else {
            if (!userStored) {
              res.status(404).send({ message: "User not registered" });
            } else {
              res.status(200).send({ user: userStored });
            }
          }
        });
      } else {
        res.status(400).send({ message: "Fill all fields" });
      }
    });
  } else {
    res.status(400).send({ message: "Introduce your password" });
  }
};

const loginUser = (req, res) => {
  const params = req.body;

  const email = params.email;
  const password = params.password;

  User.findOne({ email: email?.toLowerCase() }, (err, user) => {
    if (err) {
      res.status(500).send({ message: "Error in the request" });
    } else {
      if (!user) {
        res.status(404).send({ message: "User not found" });
      } else {
        bcrypt.compare(password, user.password, (err, check) => {
          if (check) {
            if (params.gethash) {
              res.status(200).send({
                token: jwt.createToken(user),
              });
            } else {
              res.status(200).send({ user });
            }
          } else {
            res.status(404).send({ message: "User not logged in" });
          }
        });
      }
    }
  });
};

const updateUser = (req, res) => {
  const userId = req.params.id;
  const update = req.body;

  User.findByIdAndUpdate(userId, update, (err, userUpdated) => {
    if (err) {
      res.status(500).send({ message: "Error updating user" });
    } else {
      if (!userUpdated) {
        res.status(404).send({ message: "User not updated" });
      } else {
        res.status(200).send({ image: file_name, user: userUpdated });
      }
    }
  });
};

const uploadImage = (req, res) => {
  const userId = req.params.id;

  if (req.files) {
    const file_path = req.files.image.path;
    const file_split = file_path.toString().split("/");
    const file_name = file_split[2];

    const ext_split = file_name.split(".");
    const file_ext = ext_split[1] || null;

    if (
      file_ext === "png" ||
      file_ext === "jpg" ||
      file_ext === "jpeg" ||
      file_ext === "gif"
    ) {
      User.findByIdAndUpdate(
        userId,
        { image: file_name },
        (err, userUpdated) => {
          if (err) {
            res.status(404).send({ message: "User not updated" });
          } else {
            res.status(200).send({ image: file_name, user: userUpdated });
          }
        }
      );
    } else {
      res.status(415).send({ message: "Invalid extension" });
    }
  } else {
    res.status(404).send({ message: "You have not uploaded any image" });
  }
};

const getImageFile = (req, res) => {
  const imageFile = req.params.imageFile;
  const path_file = `./uploads/users/${imageFile}`;

  if (fs.existsSync(path_file)) {
    res.sendFile(path.resolve(path_file));
  } else {
    res.status(404).send({ message: "Image does not exist" });
  }
};

module.exports = {
  saveUser,
  loginUser,
  updateUser,
  uploadImage,
  getImageFile,
};
