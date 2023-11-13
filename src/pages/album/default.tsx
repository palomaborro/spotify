import React, { useState, useEffect, useContext, useRef } from "react";

import { useParams } from "react-router-dom";

import { AlbumType, SongType } from "../../utils/types";
import { UserContext } from "../../utils/user-context";

import Navbar from "../../components/navbar/default";
import Button from "../../components/button/default";
import FileInput from "../../components/inputs/file-input/default";
import TextField from "../../components/inputs/text-field/default";
import Song from "../../components/song/default";

import {
  Wrapper,
  Container,
  AlbumTitle,
  AlbumYear,
  AlbumDescription,
  TextContainer,
  TitleAndYearWrapper,
  ButtonWrapper,
  Form,
  ButtonAndImageWrapper,
  FormContainer,
  Input,
  SuccessMessage,
  ErrorMessage,
  EmptyTracks,
  Tracks,
  TrackWrapper,
} from "./album.styled";

const Album = () => {
  const [album, setAlbum] = useState<AlbumType>({
    _id: "",
    title: "",
    image: null,
    year: 0,
    description: "",
    artist: {
      _id: "",
    },
  });
  const [isEditing, setIsEditing] = useState({
    image: false,
    title: false,
    year: false,
    description: false,
    song: false,
  });
  const [titleImageURL, setTitleImageURL] = useState<string | undefined>(
    undefined
  );
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [formTrackName, setFormTrackName] = useState<string | undefined>(
    undefined
  );
  const [formImageURL, setFormImageURL] = useState<string | undefined>(
    undefined
  );
  const [song, setSong] = useState<SongType>({
    _id: "",
    number: "",
    name: "",
    song: "",
    artist: album.artist._id,
    album: { _id: album._id, title: album.title },
  });
  const [successMessage, setSuccessMessage] = useState<string | undefined>("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [songs, setSongs] = useState<SongType[]>([]);

  const { id } = useParams();
  const { user } = useContext(UserContext);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLHeadingElement>(null);
  const yearRef = useRef<HTMLHeadingElement>(null);

  const handleTitleBlur = () => {
    if (titleRef.current) {
      setAlbum({ ...album, title: titleRef.current.textContent ?? "" });
    }
  };

  const handleTitleClick = () => {
    if (user.userRole === "ADMIN") {
      setIsEditing({ ...isEditing, title: true });
    }
  };

  const handleYearBlur = () => {
    if (user.userRole === "ADMIN") {
      setAlbum({
        ...album,
        year: parseInt(yearRef.current?.textContent ?? ""),
      });
    }
  };

  const handleYearClick = () => {
    if (user.userRole === "ADMIN") {
      setIsEditing({ ...isEditing, year: true });
    }
  };

  const handleDescriptionBlur = () => {
    if (descriptionRef.current) {
      setAlbum({
        ...album,
        description: descriptionRef.current.textContent ?? "",
      });
    }
  };

  const handleDescriptionClick = () => {
    if (user.userRole === "ADMIN") {
      setIsEditing({ ...isEditing, description: true });
    }
  };

  const handleImageClick = () => {
    if (user.userRole === "ADMIN") {
      setIsEditing({ ...isEditing, image: true });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files ? e.target.files[0] : null;
    if (imageFile) {
      setAlbum({
        ...album,
        image: imageFile,
      });
      setFormImageURL(URL.createObjectURL(imageFile));
    }
  };
  const handleTrackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trackFile = e.target.files ? e.target.files[0] : null;
    if (trackFile) {
      setSong({
        ...song,
        song: trackFile,
      });
      setFormTrackName(trackFile.name);
    } else {
      setFormTrackName(undefined);
    }
  };

  const handleCancelClick = () => {
    setIsEditing({
      ...isEditing,
      image: false,
      title: false,
      year: false,
      description: false,
    });
  };

  const handleInputChange = <T extends {}>(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputName: string,
    setData: React.Dispatch<React.SetStateAction<any>>
  ) => {
    setData((prevState: T) => ({
      ...prevState,
      [inputName]: e.target.value,
    }));
  };

  useEffect(() => {
    const getAlbum = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/album/${id}`,
          {
            method: "GET",
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        } else {
          const albumImage = data.album.image
            ? `${process.env.REACT_APP_API_URL}${data.album.image}`
            : undefined;
          setAlbum(data.album);
          setSong((prevData) => ({
            ...prevData,
            artist: data.album.artist._id,
            album: data.album._id,
          }));
          setTitleImageURL(albumImage);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getAlbum();
  }, [id, updateTrigger]);

  useEffect(() => {
    const getSongs = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/songs/${id}`,
          {
            method: "GET",
          }
        );

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message);
        } else {
          setSongs(data.songs);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getSongs();
  }, [id, updateTrigger]);

  const deleteSong = async (songId: string) => {
    try {
      const token = user.token;

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/song/${songId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      } else {
        const updatedSongs = songs.filter((song) => song._id !== songId);
        setSongs(updatedSongs);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      if (album) {
        formData.append("title", album.title);
        formData.append("description", album.description);
        if (album.image instanceof File) {
          formData.append("image", album.image);
        }
      }

      const token = user.token;
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/album/${id}`,
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
        throw new Error(responseData.message);
      } else {
        setIsEditing({
          image: false,
          title: false,
          description: false,
          year: false,
          song: false,
        });
        setTitleImageURL(responseData.album.image);
        setAlbum((prevState) => ({
          ...prevState,
          title: responseData.album.title,
          description: responseData.album.description,
          image: responseData.album.image,
        }));
        setUpdateTrigger(!updateTrigger);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewSongSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = user.token;

      const formData = new FormData();
      if (song) {
        formData.append("number", song.number.toString());
        formData.append("name", song.name);
        formData.append("artist", song.artist);
        formData.append("album", song.album._id ?? song.album);
        if (song.song instanceof File) {
          formData.append("song", song.song);
        }
      }

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/song/${id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        setErrorMessage(
          "There was an error adding the song, make sure the info is correct."
        );
        setShowErrorMessage(true);
      } else {
        setSong({
          _id: responseData._id,
          number: responseData.number,
          name: responseData.name,
          song: responseData.song,
          album: responseData.album,
          artist: responseData.artist,
        });
        setIsSubmitting(true);
        setShowSuccessMessage(true);
        setSuccessMessage("Song added successfully!");
        setTimeout(() => {
          window.location.reload();
          setIsSubmitting(false);
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <img onClick={handleImageClick} src={titleImageURL} alt={album.title} />
        <TextContainer>
          <TitleAndYearWrapper>
            {isEditing.title ? (
              <AlbumTitle
                contentEditable={true}
                suppressContentEditableWarning={true}
                onBlur={handleTitleBlur}
                ref={titleRef}
              >
                {album.title}
              </AlbumTitle>
            ) : (
              <AlbumTitle onClick={handleTitleClick}>{album.title}</AlbumTitle>
            )}
            {isEditing.year ? (
              <AlbumYear
                contentEditable={true}
                suppressContentEditableWarning={true}
                onBlur={handleYearBlur}
                ref={yearRef}
                onClick={handleYearClick}
              >
                ({album.year})
              </AlbumYear>
            ) : (
              <AlbumYear onClick={handleYearClick}>({album.year})</AlbumYear>
            )}
          </TitleAndYearWrapper>
          {isEditing.description ? (
            <AlbumDescription
              contentEditable={true}
              suppressContentEditableWarning={true}
              onBlur={handleDescriptionBlur}
              ref={descriptionRef}
            >
              {album.description}
            </AlbumDescription>
          ) : (
            <AlbumDescription onClick={handleDescriptionClick}>
              {album.description}
            </AlbumDescription>
          )}
        </TextContainer>
        <Form onSubmit={handleSubmit}>
          <ButtonAndImageWrapper>
            {isEditing.image && (
              <FileInput
                label="Change image"
                onChange={handleImageChange}
                type="file"
              />
            )}
            {formImageURL && isEditing.image ? (
              <img src={formImageURL} alt="album" />
            ) : null}
          </ButtonAndImageWrapper>
          {isEditing.title ||
          isEditing.year ||
          isEditing.description ||
          isEditing.image ? (
            <ButtonWrapper>
              <Button type="submit" label="Update" />
              <Button
                type="button"
                label="Cancel"
                onClick={handleCancelClick}
              />
            </ButtonWrapper>
          ) : null}
        </Form>
        <TrackWrapper>
          <Tracks>Album tracks</Tracks>
          {songs.length > 0 ? (
            songs.map((song) => (
              <Song onDelete={deleteSong} key={song._id} song={song} />
            ))
          ) : (
            <EmptyTracks>No tracks yet</EmptyTracks>
          )}
        </TrackWrapper>
        <FormContainer>
          <h2>Add a new track</h2>
          <Form onSubmit={handleNewSongSubmit}>
            <Input>
              <TextField
                onChange={(e) => handleInputChange(e, "number", setSong)}
                label="Track number"
                placeholder="Number"
                name="number"
                value={song.number || ""}
                required={true}
              />
            </Input>
            <Input>
              <TextField
                onChange={(e) => handleInputChange(e, "name", setSong)}
                label="Track name"
                placeholder="Name"
                name="year"
                value={song.name || ""}
                required={true}
              />
            </Input>
            <Input isTrack>
              <FileInput
                onChange={handleTrackChange}
                label="Select track"
                type="audio"
                required={true}
              />
              {formTrackName && <p>{formTrackName}</p>}
            </Input>
            {showSuccessMessage && (
              <SuccessMessage>{successMessage}</SuccessMessage>
            )}
            {showErrorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <ButtonWrapper>
              <Button label="Add track" type="submit" disabled={isSubmitting} />
            </ButtonWrapper>
          </Form>
        </FormContainer>
      </Container>
    </Wrapper>
  );
};

export default Album;
