import React, { FC, useEffect, useState } from "react";

import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

import Like from "../like/default";
import { SongType, ArtistType } from "../../utils/types";

import {
  Container,
  LeftElement,
  MiddleElement,
  RightElement,
} from "./song.styled";
import "./song.styles.scss";

interface SongProps {
  song: SongType;
}

const Song: FC<SongProps> = ({ song }) => {
  const [artist, setArtist] = useState<ArtistType>({
    _id: "",
    name: "",
    image: null,
    description: "",
  });
  const [duration, setDuration] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    const getArtist = async () => {
      try {
        const response = await fetch(
          `http://localhost:3977/artist/${song.artist}`,
          {
            method: "GET",
          }
        );

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        } else {
          setArtist(responseData.artist);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getArtist();
  }, [song.artist]);

  useEffect(() => {
    const audioElement = document.createElement("audio");

    audioElement.addEventListener("loadedmetadata", () => {
      setDuration(audioElement.duration);
    });

    if (typeof song.song === "string") {
      audioElement.src = `http://localhost:3977${song.song}`;
    }

    return () => {
      audioElement.removeEventListener("loadedmetadata", () => {});
    };
  }, [song.song]);

  const formatDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const audioRef = React.useRef<HTMLAudioElement>(
    new Audio(`http://localhost:3977${song.song}`)
  );

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playIcon = isPlaying ? <PauseIcon /> : <PlayArrowIcon />;

  return (
    <Container>
      <LeftElement>
        <IconButton className="play_btn" onClick={handlePlay}>
          {playIcon}
        </IconButton>
        <p>{song.name}</p>
      </LeftElement>
      <MiddleElement>
        <p>{artist.name}</p>
      </MiddleElement>
      <RightElement>
        {/* <Like songId={song._id} /> */}
        <p>{duration ? formatDuration(duration) : "Loading..."}</p>
      </RightElement>
    </Container>
  );
};

export default Song;
