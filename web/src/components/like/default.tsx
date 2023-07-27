import React, { useState, useContext, FC, useEffect } from "react";

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

  useEffect(() => {
    setLike(favoriteSongs.includes(songId));
  }, [favoriteSongs, songId]);

  const handleFavoriteClick = async () => {
    if (!favoriteSongs.includes(songId) && user.userId) {
      try {
        const token = user.token;

        const body = {
          user: user.userId,
          song: songId,
        };

        const response = await fetch(
          `http://localhost:3977/favorites/${user.userId}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        } else {
          setFavoriteSongs(data.user.favorites);
          setLike(data.action === "added");
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
