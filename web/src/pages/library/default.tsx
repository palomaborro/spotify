import React from "react";

import { Link } from "react-router-dom";

import Playlists from "../../components/playlist/default";

import { Container, PlaylistWrapper, LikedSongs } from "./library.styled";

const playlists = [
  {
    _id: 1,
    img: "../../images/rock.jpg",
    name: "Today's Top Songs",
    desc: "By Jahangeer",
  },
];

const Library = () => {
  return (
    <Container>
      <h1>Playlists</h1>
      <PlaylistWrapper>
        <Link to="/collection/tracks">
          <LikedSongs>
            <h1>Liked Songs</h1>
            <p>1 Liked Songs</p>
          </LikedSongs>
        </Link>
        <Playlists playlists={playlists} />
      </PlaylistWrapper>
    </Container>
  );
};

export default Library;
