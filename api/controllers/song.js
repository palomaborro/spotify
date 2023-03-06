const Artist = require("../models/artist");
const Song = require("../models/song");
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const fs = require("fs");
const path = require("path");

const getSong = (req, res) => {
  const songId = req.params.id;

  Song.findById(songId)
    .populate({ path: "album" })
    .exec((err, song) => {
      if (err) {
        res.status(500).send({ message: "Error in the request" });
      } else {
        if (!song) {
          res.status(404).send({ message: "Song not found" });
        } else {
          res.status(200).send({ song });
        }
      }
    });
};

const saveSong = (req, res) => {
  const song = new Song();
  const params = req.body;

  song.number = params.number;
  song.name = params.name;
  song.duration = params.duration;
  song.file = null;
  song.album = params.album;

  song.save((err, songStored) => {
    if (err) {
      res.status(500).send({ message: "Error saving song" });
    } else {
      if (!songStored) {
        res.status(404).send({ message: "Song not stored" });
      } else {
        res.status(200).send({ song: songStored });
      }
    }
  });
};

const getSongs = (req, res) => {
  const albumId = req.params.album;

  let find;

  if (!albumId) {
    find = Song.find({}).sort("number");
  } else {
    find = Song.find({ album: albumId }).sort("number");
  }

  find
    .populate({
      path: "album",
      populate: {
        path: "artist",
        model: "Artist",
      },
    })
    .populate({ path: "featuredArtists" })
    .exec((err, songs) => {
      if (err) {
        res.status(500).send({ message: "Error in the request" });
      } else {
        if (!songs) {
          res.status(404).send({ message: "There are no songs" });
        } else {
          res.status(200).send({ songs });
        }
      }
    });
};

const updateSong = (req, res) => {
  const songId = req.params.id;
  const update = req.body;

  Song.findByIdAndUpdate(songId, update, (err, songUpdated) => {
    if (err) {
      res.status(500).send({ message: "Error in the request" });
    } else {
      if (!songUpdated) {
        res.status(404).send({ message: "Song not updated" });
      } else {
        res.status(200).send({ song: songUpdated });
      }
    }
  });
};

const deleteSong = (req, res) => {
  const songId = req.params.id;

  Song.findByIdAndDelete(songId, (err, songRemoved) => {
    if (err) {
      res.status(500).send({ message: "Error in the request" });
    } else {
      if (!songRemoved) {
        res.status(404).send({ message: "Song not removed" });
      } else {
        res.status(200).send({ song: songRemoved });
      }
    }
  });
};

const uploadFile = (req, res) => {
  const songId = req.params.id;

  if (req.files) {
    const file_path = req.files.file.path;
    const file_split = file_path.toString().split("/");
    const file_name = file_split[2];

    const ext_split = file_name.split(".");
    const file_ext = ext_split[1] || null;

    if (file_ext === "mp3" || file_ext === "wav" || file_ext === "flac") {
      Song.findByIdAndUpdate(
        songId,
        { file: file_name },
        (err, songUpdated) => {
          if (err) {
            res.status(404).send({ message: "Song not updated" });
          } else {
            res.status(200).send({ file: file_name, song: songUpdated });
          }
        }
      );
    } else {
      res.status(415).send({ message: "Invalid file extension" });
    }
  } else {
    res.status(404).send({ message: "You have not uploaded any file" });
  }
};

const getSongFile = (req, res) => {
  const songFile = req.params.songFile;
  const path_file = `./uploads/songs/${songFile}`;

  if (fs.existsSync(path_file)) {
    res.sendFile(path.resolve(path_file));
  } else {
    res.status(404).send({ message: "Song does not exist" });
  }
};

module.exports = {
  getSong,
  saveSong,
  getSongs,
  updateSong,
  deleteSong,
  uploadFile,
  getSongFile,
};
