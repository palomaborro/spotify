import React, { Fragment } from "react";

import AccessTimeIcon from "@mui/icons-material/AccessTime";

import Song from "../../components/song/default";

import {
  Header,
  PlaylistInfo,
  Body,
  NavBody,
  LeftElement,
  MiddleElement,
  RightElement,
} from "./liked-songs.styled";
import "./liked-songs.styles.scss";

const songs = [
  {
    _id: 1,
    img: "../../images/peaches.jpg",
    name: "Peaches",
    artist: "Justin Bieber",
  },
];

const LikedSongs = () => {
  return (
    <div>
      <Header>
        <div className="head_gradient" />
        <img src="../../images/like.jpg" alt="like songs" />
        <PlaylistInfo>
          <p>Playlist</p>
          <h1>Liked Songs</h1>
          <span>By Jahangeer</span>
        </PlaylistInfo>
      </Header>
      <Body>
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

        {songs.map((song) => (
          <Fragment key={song._id}>
            <Song song={song} />
          </Fragment>
        ))}
      </Body>
    </div>
  );
};

export default LikedSongs;
