import React, { useEffect, useState, useContext, useRef } from "react";

import { useParams } from "react-router-dom";

import { ArtistType, AlbumType } from "../../utils/types";
import { UserContext } from "../../utils/user-context";

import Navbar from "../../components/navbar/default";
import Button from "../../components/button/default";
import FileInput from "../../components/inputs/file-input/default";
import MessageBanner from "../../components/message-banner/default";
import AlbumCard from "../../components/album-card/default";
import TextField from "../../components/inputs/text-field/default";
import TextArea from "../../components/inputs/text-area/default";

import {
  Wrapper,
  Container,
  ArtistNameAndImageContainer,
  Image,
  ArtistName,
  ArtistDescription,
  Form,
  ButtonWrapper,
  ButtonAndImageWrapper,
  MessageBannerWrapper,
  DiscographyWrapper,
  Discography,
  AlbumsWrapper,
  EmptyAlbums,
  FormContainer,
  Input,
  SuccessMessage,
  ErrorMessage,
} from "./artist.styled";

const Artist = () => {
  const [artist, setArtist] = useState<ArtistType>({
    _id: "",
    name: "",
    image: null,
    description: "",
  });
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const [isEditing, setIsEditing] = useState({
    image: false,
    name: false,
    description: false,
  });
  const [titleImageURL, setTitleImageURL] = useState<string | undefined>(
    undefined
  );
  const [formImageURL, setFormImageURL] = useState<string | undefined>(
    undefined
  );
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const [data, setData] = useState<AlbumType>({
    _id: "",
    title: "",
    description: "",
    image: null,
    year: "",
    artist: artist._id,
  });
  const [successMessage, setSuccessMessage] = useState<string | undefined>("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const { user } = useContext(UserContext);
  const { id } = useParams();

  const nameRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const handleNameBlur = () => {
    if (nameRef.current) {
      setArtist({ ...artist, name: nameRef.current.textContent ?? "" });
    }
  };

  const handleDescriptionBlur = () => {
    if (descriptionRef.current) {
      setArtist({
        ...artist,
        description: descriptionRef.current.textContent ?? "",
      });
    }
  };

  const handleNameClick = () => {
    if (user.userRole === "ADMIN") {
      setIsEditing({ ...isEditing, name: true });
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
      setArtist({
        ...artist,
        image: imageFile,
        imagePreviewUrl: URL.createObjectURL(imageFile),
      });
      setFormImageURL(URL.createObjectURL(imageFile));
    }
  };

  const handleCancelClick = () => {
    setIsEditing({
      ...isEditing,
      image: false,
      name: false,
      description: false,
    });
  };

  useEffect(() => {
    const getArtist = async () => {
      try {
        const response = await fetch(`http://localhost:3977/artist/${id}`, {
          method: "GET",
        });

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        } else {
          const artistImage = responseData.artist.image
            ? `http://localhost:3977${responseData.artist.image}`
            : undefined;
          setArtist(responseData.artist);
          setTitleImageURL(artistImage);
          setData((prevData) => ({
            ...prevData,
            artist: responseData.artist._id,
          }));
        }
      } catch (error) {
        console.error(error);
      }
    };

    getArtist();
  }, [id, updateTrigger]);

  useEffect(() => {
    const getAlbums = async () => {
      try {
        const token = user.token;

        const response = await fetch(
          `http://localhost:3977/albums/${artist._id}`,
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
          setAlbums(responseData.albums);
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (artist._id) {
      getAlbums();
    }
  }, [artist]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = user.token;

      const formData = new FormData();
      if (artist) {
        formData.append("name", artist.name ?? "");
        formData.append("description", artist.description ?? "");
        if (artist.image instanceof File) {
          formData.append("image", artist.image);
        }
      }

      const response = await fetch(`http://localhost:3977/artist/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      } else {
        setIsEditing({ image: false, name: false, description: false });
        setTitleImageURL(responseData.artist?.image ?? undefined);
        setArtist((prevState) => ({
          ...prevState,
          name: responseData.artist?.name ?? undefined,
          description: responseData.artist?.description ?? undefined,
          image: responseData.artist?.image ?? undefined,
        }));
        setUpdateTrigger(!updateTrigger);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePostSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = user.token;

      const formData = new FormData();
      if (data) {
        formData.append("title", data.title);
        formData.append("year", data.year.toString());
        formData.append("artist", artist._id);
        formData.append("description", data.description);
        if (data.image instanceof File) {
          formData.append("image", data.image);
        }
      }

      const response = await fetch(`http://localhost:3977/album`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const responseData = await response.json();

      if (!response.ok) {
        setErrorMessage(
          "There was an error adding the album, make sure the info is correct."
        );
        setShowErrorMessage(true);
      } else {
        setData({
          _id: responseData._id,
          title: responseData.title,
          description: responseData.description,
          image: responseData.image,
          year: responseData.year,
          artist: responseData.artist,
        });
        setIsSubmitting(true);
        setShowSuccessMessage(true);
        setSuccessMessage("Album added successfully!");
        setTimeout(() => {
          window.location.reload();
          setIsSubmitting(false);
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    }
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

  const deleteAlbum = async (albumId: string) => {
    try {
      const token = user.token;

      const response = await fetch(`http://localhost:3977/album/${albumId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      } else {
        const updatedAlbums = albums.filter((album) => album._id !== albumId);
        setAlbums(updatedAlbums);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <ArtistNameAndImageContainer>
          <Image
            src={titleImageURL}
            alt={artist?.name ?? "Artist"}
            onClick={handleImageClick}
          />
          {isEditing.name ? (
            <ArtistName
              contentEditable={true}
              suppressContentEditableWarning={true}
              onBlur={handleNameBlur}
              ref={nameRef}
            >
              {artist?.name}
            </ArtistName>
          ) : (
            <ArtistName onClick={handleNameClick}>{artist?.name}</ArtistName>
          )}
        </ArtistNameAndImageContainer>
        {isEditing.description ? (
          <ArtistDescription
            contentEditable={true}
            suppressContentEditableWarning={true}
            onBlur={handleDescriptionBlur}
            ref={descriptionRef}
          >
            {artist?.description}
          </ArtistDescription>
        ) : (
          <ArtistDescription onClick={handleDescriptionClick}>
            {artist?.description}
          </ArtistDescription>
        )}
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
              <img src={formImageURL} alt="user" />
            ) : null}
          </ButtonAndImageWrapper>
          {isEditing.name || isEditing.description || isEditing.image ? (
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
        {user.userRole === "ADMIN" &&
        !isEditing.image &&
        !isEditing.name &&
        !isEditing.description ? (
          <MessageBannerWrapper>
            <MessageBanner message="By clicking on any of the elements above you can edit them" />
          </MessageBannerWrapper>
        ) : null}
        <DiscographyWrapper>
          <Discography>Discography</Discography>
          {albums.length > 0 ? (
            <AlbumsWrapper>
              {albums.map((album) => (
                <AlbumCard
                  key={album._id}
                  album={album}
                  artist={artist.name}
                  onDelete={deleteAlbum}
                />
              ))}
            </AlbumsWrapper>
          ) : (
            <EmptyAlbums>There are no albums</EmptyAlbums>
          )}
        </DiscographyWrapper>
        <FormContainer>
          <h2>Add a new album</h2>
          <Form onSubmit={handlePostSubmit}>
            <Input>
              <TextField
                onChange={(e) => handleInputChange(e, "title", setData)}
                label="Title"
                placeholder="Album title"
                name="title"
                value={data.title}
                required={true}
              />
            </Input>
            <Input>
              <TextField
                onChange={(e) => handleInputChange(e, "year", setData)}
                label="Year"
                placeholder="Album year"
                name="year"
                value={data.year}
                required={true}
              />
            </Input>
            <Input>
              <TextArea
                onChange={(e) => handleInputChange(e, "description", setData)}
                label="Description"
                placeholder="Album description"
                name="description"
                value={data.description}
                required={true}
              />
            </Input>
            <Input isImage>
              <FileInput
                onChange={(e) => {
                  setData({
                    ...data,
                    image: e.target.files ? e.target.files[0] : null,
                  });
                  setFormImageURL(
                    e.target.files
                      ? URL.createObjectURL(e.target.files[0])
                      : undefined
                  );
                }}
                label="Add image"
                type="image"
                required={true}
              />
              {formImageURL && (
                <img src={formImageURL} alt="user" width={100} />
              )}
            </Input>
            {showSuccessMessage && (
              <SuccessMessage>{successMessage}</SuccessMessage>
            )}
            {showErrorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <ButtonWrapper>
              <Button label="Add album" type="submit" disabled={isSubmitting} />
            </ButtonWrapper>
          </Form>
        </FormContainer>
      </Container>
    </Wrapper>
  );
};

export default Artist;
