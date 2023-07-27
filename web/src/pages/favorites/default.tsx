import React, { useState, useEffect, useContext } from "react";

import AccessTimeIcon from "@mui/icons-material/AccessTime";

import Song from "../../components/song/default";
import Navbar from "../../components/navbar/default";

import { SongType } from "../../utils/types";
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
} from "./favorites.styled";

const Favorites = () => {
  const [favoriteSongs, setFavoriteSongs] = useState<SongType[]>([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const getFavoriteSongs = async () => {
      try {
        const token = user.token;

        const response = await fetch(
          `http://localhost:3977/favorites/${user.userId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        } else {
          setFavoriteSongs(data.favorites);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getFavoriteSongs();
  }, [user.token, user.userId]);

  console.log(favoriteSongs);

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
          favoriteSongs.map((song) => (
            <PlaylistContainer>
              <Song key={song._id} song={song} />
            </PlaylistContainer>
          ))
        ) : (
          <div>No tracks yet</div>
        )}
      </Container>
    </Wrapper>
  );
};

export default Favorites;
