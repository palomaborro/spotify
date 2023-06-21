import React, { FC, useEffect, useState, useContext } from "react";

import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import DeleteIcon from "@mui/icons-material/Delete";

import Like from "../like/default";
import { SongType, ArtistType } from "../../utils/types";
import { UserContext } from "../../utils/user-context";

import {
  Container,
  LeftElement,
  MiddleElement,
  RightElement,
  Input,
} from "./song.styled";
import "./song.styles.scss";

interface SongProps {
  song: SongType;
  onDelete: (songId: string) => void;
}

const Song: FC<SongProps> = ({ song, onDelete }) => {
  const [artist, setArtist] = useState<ArtistType>({
    _id: "",
    name: "",
    image: null,
    description: "",
  });
  const [duration, setDuration] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTimeSong, setCurrentTimeSong] = useState<number>(0);

  const { user } = useContext(UserContext);

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

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTimeSong(audioElement.currentTime);
    };

    audioElement.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleProgressBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTimeSong(newTime);
  };

  const handleDeleteClick = (e: React.MouseEvent, songId: string) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete(songId);
  };

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
        <Input
          type="range"
          value={currentTimeSong}
          min="0"
          max={duration ? duration : 0}
          step="1"
          onChange={handleProgressBarChange}
        />
        <p>{duration ? formatDuration(duration) : "Loading..."}</p>
      </RightElement>
      {user.userRole === "ADMIN" && (
        <DeleteIcon
          onClick={(e) => handleDeleteClick(e, song._id)}
          fontSize="large"
          className="delete-icon"
        />
      )}
    </Container>
  );
};

export default Song;
