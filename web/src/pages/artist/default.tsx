import React, { useEffect, useState, useContext, useRef } from "react";

import { useParams } from "react-router-dom";

import { ArtistType } from "../../utils/types";
import { UserContext } from "../../utils/user-context";

import Navbar from "../../components/navbar/default";
import Button from "../../components/button/default";
import FileInput from "../../components/inputs/file-input/default";
import MessageBanner from "../../components/message-banner/default";

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
} from "./artist.styled";

const Artist = () => {
  const [artist, setArtist] = useState<ArtistType>({
    _id: "",
    name: "",
    image: null,
    description: "",
  });
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
  const nameRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const { user } = useContext(UserContext);
  const { id } = useParams();

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
        }
      } catch (error) {
        console.error(error);
      }
    };

    getArtist();
  }, [id, updateTrigger]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      if (artist) {
        formData.append("name", artist.name ?? "");
        formData.append("description", artist.description ?? "");
        if (artist.image instanceof File) {
          formData.append("image", artist.image);
        }
      }

      const token = user.token;
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
            <MessageBanner message="By clicking on any of the elements you can edit them" />
          </MessageBannerWrapper>
        ) : null}
      </Container>
    </Wrapper>
  );
};

export default Artist;
