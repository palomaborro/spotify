const Artist = require("../models/artist");
const Album = require("../models/album");
const User = require("../models/user");
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const fs = require("fs");
const path = require("path");

const getArtist = (req, res) => {
  const artistId = req.params.id;

  Artist.findById(artistId, (err, artist) => {
    if (err) {
      res.status(500).send({ message: "Error in the request" });
    } else {
      if (!artist) {
        res.status(404).send({ message: "Artist not found" });
      } else {
        res.status(200).send({ artist });
      }
    }
  });
};

const saveArtist = (req, res) => {
  const artist = new Artist();
  const params = req.body;

  artist.name = params.name;
  artist.description = params.description;
  artist.image = null;

  artist.save((err, artistStored) => {
    if (err) {
      res.status(500).send({ message: "Error saving artist" });
    } else {
      if (!artistStored) {
        res.status(404).send({ message: "Artist not registered" });
      } else {
        res.status(200).send({ artist: artistStored });
      }
    }
  });
};

const getArtists = (req, res) => {
  const options = {
    sort: "name",
    page: req.params.page,
    limit: 2,
  };

  Artist.paginate({}, options, (err, artists) => {
    if (err) {
      res.status(500).send({ message: "Error in the request" });
    } else {
      if (!artists) {
        res.status(404).send({ message: "No artists found" });
      } else {
        return res.status(200).send({
          total_items: artists.totalDocs,
          artists: artists.docs,
          docs: artists,
        });
      }
    }
  });
};

module.exports = {
  getArtist,
  saveArtist,
  getArtists,
};
