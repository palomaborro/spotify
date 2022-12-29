const Artist = require("../models/artist");
const Album = require("../models/album");
const User = require("../models/user");
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const fs = require("fs");
const path = require("path");

const getAlbum = (req, res) => {
  const albumId = req.params.id;

  Album.findById(albumId)
    .populate({ path: "artist" })
    .exec((err, album) => {
      if (err) {
        res.status(500).send({ message: "Error in the request" });
      } else {
        if (!album) {
          res.status(404).send({ message: "Album not found" });
        } else {
          res.status(200).send({ album });
        }
      }
    });
};

const saveAlbum = (req, res) => {
  const album = new Album();
  const params = req.body;

  album.title = params.title;
  album.description = params.description;
  album.year = params.year;
  album.image = null;
  album.artist = params.artist;

  album.save((err, albumStored) => {
    if (err) {
      res.status(500).send({ message: "Error saving album" });
    } else {
      if (!albumStored) {
        res.status(404).send({ message: "Album not registered" });
      } else {
        res.status(200).send({ album: albumStored });
      }
    }
  });
};

const getAlbums = (req, res) => {
  const artistId = req.params.artist;

  let find;

  if (!artistId) {
    find = Album.find({}).sort("title");
  } else {
    find = Album.find({ artist: artistId }).sort("year");
  }

  find.populate({ path: "artist" }).exec((err, albums) => {
    if (err) {
      res.status(500).send({ message: "Error in the request" });
    } else {
      if (!albums) {
        res.status(404).send({ message: "No albums found" });
      } else {
        res.status(200).send({ albums });
      }
    }
  });
};

const updateAlbum = (req, res) => {
  const albumId = req.params.id;
  const update = req.body;

  Album.findByIdAndUpdate(albumId, update, (err, albumUpdated) => {
    if (err) {
      res.status(500).send({ message: "Error in the request" });
    } else {
      if (!albumUpdated) {
        res.status(404).send({ message: "Album not found" });
      } else {
        res.status(200).send({ album: albumUpdated });
      }
    }
  });
};

// const deleteAlbum = (req, res) => {
//   const albumId = req.params.id;

//   Album.findByIdAndDelete(albumId, (err, albumRemoved) => {
//     if (err) {
//       res.status(500).send({ message: "Error in the request" });
//     } else {
//       if (!albumRemoved) {
//         res.status(404).send({ message: "Album not found" });
//       } else {
//         Song.find({ album: albumRemoved._id }).remove((err, songRemoved) => {
//           if (err) {
//             res.status(500).send({ message: "Error in the request" });
//           } else {
//             if (!songRemoved) {
//               res.status(404).send({ message: "Song not found" });
//             } else {
//               res.status(200).send({ album: albumRemoved });
//             }
//           }
//         });
//       }
//     }
//   });
// };

const deleteAlbum = (req, res) => {
  const albumId = req.params.id;

  Album.findByIdAndDelete(albumId, (err, albumRemoved) => {
    if (err) {
      res.status(500).send({ message: "Error removing album" });
    } else {
      if (!albumRemoved) {
        res.status(404).send({ message: "Album not removed" });
      } else {
        res.status(200).send({ albumRemoved });
      }
    }
  });
};

const uploadImage = (req, res) => {
  const albumId = req.params.id;

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
      Album.findByIdAndUpdate(
        albumId,
        { image: file_name },
        (err, albumUpdated) => {
          if (err) {
            res.status(404).send({ message: "Album not updated" });
          } else {
            res.status(200).send({ image: file_name, album: albumUpdated });
          }
        }
      );
    } else {
      res.status(415).send({ message: "Invalid image extension" });
    }
  } else {
    res.status(404).send({ message: "You have not uploaded any image" });
  }
};

const getImageFile = (req, res) => {
  const imageFile = req.params.imageFile;
  const path_file = `./uploads/albums/${imageFile}`;

  if (fs.existsSync(path_file)) {
    res.sendFile(path.resolve(path_file));
  } else {
    res.status(404).send({ message: "Image does not exist" });
  }
};

module.exports = {
  getAlbum,
  saveAlbum,
  getAlbums,
  updateAlbum,
  deleteAlbum,
  uploadImage,
  getImageFile,
};
