import React, { FC, useEffect, useState, useContext, useRef } from "react";

import { Link } from "react-router-dom";

import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import DeleteIcon from "@mui/icons-material/Delete";

import Like from "../like/default";
import { SongType, ArtistType } from "../../utils/types";
import { UserContext } from "../../utils/user-context";

import Button from "../../components/button/default";

import {
  Container,
  LeftElement,
  MiddleElement,
  RightElement,
  Input,
  ButtonWrapper,
  Form,
  Wrapper,
  SongNumber,
  AlbumTitle,
  ArtistName,
} from "./song.styled";
import "./song.styles.scss";

interface SongProps {
  song: SongType;
  onDelete?: (songId: string) => void;
  isFavorites?: boolean;
}

const Song: FC<SongProps> = ({ song, onDelete, isFavorites }) => {
  const [artist, setArtist] = useState<ArtistType>({
    _id: null,
    name: null,
    image: null,
    description: null,
  });
  const [duration, setDuration] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTimeSong, setCurrentTimeSong] = useState<number>(0);
  const [isEditing, setIsEditing] = useState({
    name: false,
  });
  const [editedSongName, setEditedSongName] = useState("");
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const getArtist = async () => {
      const artist = song.artist;
      try {
        if (typeof artist === "object") {
          const artistObject = artist as ArtistType;
          setArtist(artistObject);
          return;
        }

        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/artist/${song.artist}`,
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
    if (song && song.artist) {
      getArtist();
    }
  }, [song, song.artist]);

  useEffect(() => {
    const getSong = async () => {
      try {
        const token = user.token;

        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/song/${song._id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        } else {
          setEditedSongName(responseData.song.name);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getSong();
  }, [song._id, updateTrigger, user.token]);

  useEffect(() => {
    const audioElement = document.createElement("audio");

    audioElement.addEventListener("loadedmetadata", () => {
      setDuration(audioElement.duration);
    });

    if (typeof song.song === "string") {
      audioElement.src = `${process.env.REACT_APP_API_URL}${song.song}`;
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
    new Audio(`${process.env.REACT_APP_API_URL}${song.song}`)
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

    if (onDelete) {
      onDelete(songId);
    } else {
      console.warn("onDelete function is not defined");
    }
  };

  const handleTitleClick = () => {
    if (user.userRole === "ADMIN") {
      setIsEditing({ ...isEditing, name: true });
      setEditedSongName(song.name);
    }
  };

  const nameRef = useRef<HTMLHeadingElement>(null);

  const handleTitleBlur = () => {
    if (nameRef.current) {
      setEditedSongName(nameRef.current.textContent ?? "");
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", editedSongName);

      const token = user.token;
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/song/${song._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.song.message);
      } else {
        setIsEditing({ name: false });
        setEditedSongName(responseData.song.name);
        setUpdateTrigger(!updateTrigger);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setIsEditing({
      ...isEditing,
      name: false,
    });
  };

  return (
    <Wrapper>
      <Container>
        <LeftElement>
          <IconButton className="play_btn" onClick={handlePlay}>
            {playIcon}
          </IconButton>
          <SongNumber>{song.number}.</SongNumber>
          <>
            {isEditing.name ? (
              <p
                contentEditable={true}
                suppressContentEditableWarning={true}
                onBlur={handleTitleBlur}
                ref={nameRef}
              >
                {editedSongName}
              </p>
            ) : (
              <p onClick={handleTitleClick}>{editedSongName}</p>
            )}
          </>
        </LeftElement>
        <MiddleElement>
          <Link to={`/artist/${artist._id}`}>
            <ArtistName>{artist.name} </ArtistName>
          </Link>
          <AlbumTitle>{song.album?.title}</AlbumTitle>
        </MiddleElement>
        <RightElement>
          <Input
            type="range"
            value={currentTimeSong}
            min="0"
            max={duration ? duration : 0}
            step="1"
            onChange={handleProgressBarChange}
          />
          <Like songId={song._id} />
          <p>{duration ? formatDuration(duration) : "Loading..."}</p>
        </RightElement>
        {user.userRole === "ADMIN" && !isFavorites && (
          <DeleteIcon
            onClick={(e) => handleDeleteClick(e, song._id)}
            fontSize="large"
            className="delete-icon"
          />
        )}
      </Container>
      <Form onSubmit={handleUpdate}>
        {isEditing.name ? (
          <ButtonWrapper>
            <Button type="submit" label="Update" />
            <Button type="button" label="Cancel" onClick={handleCancel} />
          </ButtonWrapper>
        ) : null}
      </Form>
    </Wrapper>
  );
};

export default Song;
