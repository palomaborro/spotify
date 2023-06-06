import React, { useState, useEffect, useContext, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ArtistType, AlbumType } from "../../utils/types";
import { UserContext } from "../../utils/user-context";
import Navbar from "../../components/navbar/default";
import Button from "../../components/button/default";
import FileInput from "../../components/inputs/file-input/default";
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
} from "./album.styled";

const Album = () => {
  const [album, setAlbum] = useState<AlbumType>({
    _id: "",
    title: "",
    image: null,
    year: 0,
    description: "",
    artist: "",
  });
  const [isEditing, setIsEditing] = useState({
    image: false,
    title: false,
    year: false,
    description: false,
  });
  const [titleImageURL, setTitleImageURL] = useState<string | undefined>(
    undefined
  );
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [formImageURL, setFormImageURL] = useState<string | undefined>(
    undefined
  );

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

  const handleCancelClick = () => {
    setIsEditing({
      ...isEditing,
      image: false,
      title: false,
      year: false,
      description: false,
    });
  };

  useEffect(() => {
    const getAlbum = async () => {
      try {
        const response = await fetch(`http://localhost:3977/album/${id}`, {
          method: "GET",
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        } else {
          const albumImage = data.album.image
            ? `http://localhost:3977${data.album.image}`
            : undefined;
          setAlbum(data.album);
          setTitleImageURL(albumImage);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getAlbum();
  }, [id, updateTrigger]);

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
      const response = await fetch(`http://localhost:3977/album/${id}`, {
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
        setIsEditing({
          image: false,
          title: false,
          description: false,
          year: false,
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
      </Container>
    </Wrapper>
  );
};

export default Album;
