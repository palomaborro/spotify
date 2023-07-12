import React, { useState, useContext, FC } from "react";

import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { UserContext } from "../../utils/user-context";

import "./like.styles.scss";

interface LikeProps {
  songId: string;
}

const Like: FC<LikeProps> = ({ songId }) => {
  const [like, setLike] = useState(false);
  const [favoriteSongs, setFavoriteSongs] = useState<string[]>([]);

  const { user } = useContext(UserContext);

  const handleFavoriteClick = async () => {
    if (!favoriteSongs.includes(songId) && user.userId) {
      const newFavorites = [...favoriteSongs, songId];

      try {
        const token = user.token;

        const body = {
          userId: user.userId,
          favorites: newFavorites,
        };

        console.log(user.userId);

        const response = await fetch(
          `http://localhost:3977/favorites/${user.userId}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        } else {
          setFavoriteSongs(newFavorites);
          setLike(!like);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

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
