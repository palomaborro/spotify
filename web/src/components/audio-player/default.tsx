import React from "react";

import { IconButton } from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

import Like from "../like/default";

import {
  Container,
  LeftElement,
  SongInfo,
  SongName,
  Artist,
  ControlElements,
  AudioControl,
  ProgressContainer,
  Input,
  RightElement,
} from "./audio-player.styled";
import "./audio-player.styles.scss";

const AudioPlayer = () => {
  return (
    <Container>
      <LeftElement>
        <img src="../../images/peaches.jpg" alt="song_img" />
        <SongInfo>
          <SongName>Peaches</SongName>
          <Artist>Justin Bieber</Artist>
        </SongInfo>
      </LeftElement>
      <ControlElements>
        <AudioControl>
          <IconButton className="prev">
            <SkipPreviousIcon />
          </IconButton>
          <IconButton className="play">
            <PlayArrowIcon />
          </IconButton>
          <IconButton className="next">
            <SkipNextIcon />
          </IconButton>
        </AudioControl>
        <ProgressContainer>
          <p>0.30</p>
          <Input type="range" step="1" min="0" max={4} />
          <audio></audio>
          <p>4.00</p>
        </ProgressContainer>
      </ControlElements>
      <RightElement>
        <Like />
      </RightElement>
    </Container>
  );
};

export default AudioPlayer;
