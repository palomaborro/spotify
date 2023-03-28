import React, { useState, Fragment } from "react";

import { IconButton } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import Song from "../../components/song/default";
import PlaylistModel from "../../components/playlist-model/default";

import {
  Container,
  Header,
  PlaylistInfo,
  ActionsWrapper,
  Body,
  NavBody,
  LeftElement,
  MiddleElement,
  RightElement,
} from "./playlist.styled";
import "./playlist.styles.scss";

const playlist = {
  _id: 1,
  img: "../../images/rock.jpg",
  name: "Today's Top Songs",
  desc: "By Jahangeer",
};

const songs = [
  {
    _id: 1,
    img: "../../images/peaches.jpg",
    name: "Peaches",
    artist: "Justin Bieber",
  },
];

const Playlist = () => {
  const [model, setModel] = useState(false);

  return (
    <Container>
      <Header>
        <div className="head_gradient" />
        {playlist.img === "" ? (
          <img
            src="https://static.thenounproject.com/png/17849-200.png"
            alt={playlist.name}
            style={{ background: "#919496" }}
          />
        ) : (
          <img src={playlist.img} alt={playlist.name} />
        )}

        <PlaylistInfo>
          <p>Playlist</p>
          <h1>{playlist.name}</h1>
          <span>{playlist.desc}</span>
        </PlaylistInfo>

        <ActionsWrapper>
          <IconButton onClick={() => setModel(true)}>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </ActionsWrapper>
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
            <Song song={song} playlist={playlist} />
          </Fragment>
        ))}
      </Body>
      {model && (
        <PlaylistModel closeModel={() => setModel(false)} playlist={playlist} />
      )}
    </Container>
  );
};

export default Playlist;
