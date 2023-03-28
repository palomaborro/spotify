import React from "react";

import Playlists from "../../components/playlist/default";

import { Container, PlaylistsWrapper } from "./home.styled";

const playlists = [
  {
    _id: 1,
    img: "../../images/rock.jpg",
    name: "Today's Top Songs",
    desc: "By Jahangeer",
  },
];

const Home = () => {
  return (
    <>
      <Container>
        <h1>Good afternoon</h1>
        <PlaylistsWrapper>
          <Playlists playlists={playlists} />
        </PlaylistsWrapper>
        <h1>Just the hits</h1>
        <PlaylistsWrapper>
          <Playlists playlists={playlists} />
        </PlaylistsWrapper>
      </Container>
    </>
  );
};

export default Home;
