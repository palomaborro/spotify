import React, { useState, useContext, FC, useEffect } from "react";

import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { UserContext } from "../../utils/user-context";
import { FavoriteType } from "../../utils/types";

import "./like.styles.scss";

interface LikeProps {
  songId: string;
}

const Like: FC<LikeProps> = ({ songId }) => {
  const [favoriteSongs, setFavoriteSongs] = useState<string[]>([]);
  const [like, setLike] = useState<boolean>(false);

  const { user } = useContext(UserContext);

  const fetchFavoriteSongs = async () => {
    const token = user.token;

    try {
      const response = await fetch(
        `http://localhost:3977/favorites/${user.userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setFavoriteSongs(
          data.favorites.map((fav: FavoriteType) => fav.song?._id)
        );
      } else {
        throw new Error(data.message || "Error fetching favorite songs.");
      }
    } catch (error) {
      console.error("Error fetching favorite songs:", error);
    }
  };

  useEffect(() => {
    fetchFavoriteSongs();
  }, [user.userId]);

  const handleFavoriteClick = async () => {
    const token = user.token;

    if (like) {
      try {
        const response = await fetch(
          `http://localhost:3977/users/${user.userId}/favorites/${songId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || "Could not delete favorite.");
        }

        console.log("Favorite deleted");
        setFavoriteSongs((prevSongs) =>
          prevSongs.filter((id) => id !== songId)
        );
        setLike(false);
      } catch (error) {
        console.error("Error removing from favorites", error);
      }
    } else {
      if (favoriteSongs.includes(songId)) {
        console.warn("Song is already a favorite!");
        return;
      }
      try {
        const response = await fetch(
          `http://localhost:3977/users/${user.userId}/favorites`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ songId }),
          }
        );

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || "Could not add favorite.");
        }

        console.log("Favorite added");
        setFavoriteSongs((prevSongs) => [...prevSongs, songId]);
        setLike(true);
      } catch (error) {
        console.error("Error adding to favorites", error);
      }
    }
  };

  useEffect(() => {
    setLike(favoriteSongs.includes(songId));
  }, [favoriteSongs, songId]);

  return (
    <IconButton className="like_btn" onClick={handleFavoriteClick}>
      {!like ? (
        <FavoriteBorderIcon className="like_outlined" />
      ) : (
        <FavoriteIcon className="like_filled" />
      )}
    </IconButton>
  );
};

export default Like;
