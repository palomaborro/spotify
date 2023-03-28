// @ts-nocheck
import React, { useState } from "react";

import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import Like from "../like/default";
import PlaylistMenu from "../playlist-menu/default";

import {
  Container,
  LeftElement,
  MiddleElement,
  RightElement,
} from "./song.styled";
import "./song.styles.scss";

const Song = ({ song, playlist }: any) => {
  const [menu, setMenu] = useState(false);

  return (
    <Container>
      <LeftElement>
        <IconButton className="play_btn">
          <PlayArrowIcon />
        </IconButton>
        <img src={song.img} alt="song_img" />
        <p>{song.name}</p>
      </LeftElement>
      <MiddleElement>
        <p>{song.artist}</p>
      </MiddleElement>
      <RightElement>
        <Like songId={song._id} />
        <p>4.30</p>
        <IconButton className="menu_btn" onClick={() => setMenu(true)}>
          <MoreHorizIcon />
        </IconButton>
        {menu && (
          <PlaylistMenu playlist={playlist} closeMenu={() => setMenu(false)} />
        )}
      </RightElement>
    </Container>
  );
};

export default Song;
