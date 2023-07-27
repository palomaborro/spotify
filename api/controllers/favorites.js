const User = require("../models/user");
const Favorites = require("../models/favorites");

const getFavoriteSongs = (req, res) => {
  const userId = req.params.id;

  User.findById(userId)
    .populate({
      path: "favorites",
      model: "Song",
      populate: [
        { path: "album", model: "Album" },
        { path: "artist", model: "Artist" },
      ],
    })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: "Error in the request" });
      } else {
        if (!user) {
          res.status(404).send({ message: "User not found" });
        } else {
          res.status(200).send({ favorites: user.favorites });
        }
      }
    });
};

const saveFavoriteSongs = async (req, res) => {
  const userId = req.params.id;
  const { songId, albumId, artistId } = req.body;

  try {
    const userUpdated = await User.findByIdAndUpdate(
      userId,
      { $push: { favorites: songId } },
      { new: true }
    );

    const newFavorite = new Favorites({
      user: userId,
      song: songId,
      album: albumId,
      artist: artistId,
    });

    await newFavorite.save();

    if (!userUpdated) {
      res.status(404).send({ message: "User not found" });
    } else {
      res.status(200).send({ user: userUpdated });
    }
  } catch (err) {
    res.status(500).send({ message: "Error in the request" });
  }
};

module.exports = {
  getFavoriteSongs,
  saveFavoriteSongs,
};
