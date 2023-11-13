import React, { useState, useEffect, useContext } from "react";

import AccessTimeIcon from "@mui/icons-material/AccessTime";

import Song from "../../components/song/default";
import Navbar from "../../components/navbar/default";

import { FavoriteType } from "../../utils/types";
import { UserContext } from "../../utils/user-context";

import {
  PlaylistInfo,
  NavBody,
  LeftElement,
  MiddleElement,
  RightElement,
  Container,
  Wrapper,
  PlaylistContainer,
  EmptyTracks,
} from "./favorites.styled";

const Favorites = () => {
  const [favoriteSongs, setFavoriteSongs] = useState<FavoriteType[]>([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const getFavoriteSongs = async () => {
      try {
        const token = user.token;

        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/favorites/${user.userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        } else {
          setFavoriteSongs(
            data.favorites.filter((fav: FavoriteType) => fav.song !== null)
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    getFavoriteSongs();
  }, [user]);

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <PlaylistInfo>
          <h1>Favorites</h1>
        </PlaylistInfo>
        <NavBody>
          <LeftElement>
            <span>#</span>
            <p>Title</p>
          </LeftElement>
          <MiddleElement>
            <p>Artist</p>
          </MiddleElement>
          <RightElement>
            <AccessTimeIcon />
          </RightElement>
        </NavBody>
        {favoriteSongs?.length > 0 ? (
          favoriteSongs.map((favorite) =>
            favorite.song ? (
              <PlaylistContainer key={favorite.song._id}>
                <Song isFavorites song={favorite.song} />
              </PlaylistContainer>
            ) : null
          )
        ) : (
          <EmptyTracks>No tracks yet</EmptyTracks>
        )}
      </Container>
    </Wrapper>
  );
};

export default Favorites;
