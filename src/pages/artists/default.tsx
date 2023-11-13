import React, { useState, useEffect, useContext } from "react";

import { useParams, useNavigate } from "react-router-dom";

import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import { ArtistType } from "../../utils/types";
import { UserContext } from "../../utils/user-context";

import ArtistCard from "../../components/artist-card/default";
import Navbar from "../../components/navbar/default";
import TextField from "../../components/inputs/text-field/default";
import TextArea from "../../components/inputs/text-area/default";
import FileInput from "../../components/inputs/file-input/default";
import Button from "../../components/button/default";

import {
  Wrapper,
  Container,
  Header,
  IconWrapper,
  ArrowsWrapper,
  Form,
  Input,
  FormContainer,
  ButtonWrapper,
  SuccessMessage,
  ErrorMessage,
} from "./artists.styled";

const Artists = () => {
  const [artists, setArtists] = useState<ArtistType[]>([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [data, setData] = useState<ArtistType>({
    _id: "",
    name: "",
    description: "",
    image: null,
  });
  const [formImageURL, setFormImageURL] = useState<string | undefined>(
    undefined
  );
  const [successMessage, setSuccessMessage] = useState<string | undefined>("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const { user } = useContext(UserContext);
  const { page } = useParams();
  const navigate = useNavigate();

  const goForward = () => {
    if (hasNextPage) {
      navigate(`/artists/${page ? parseInt(page) + 1 : 2}`);
    }
  };

  const goBack = () => {
    if (page && parseInt(page) > 1) {
      navigate(`/artists/${parseInt(page) - 1}`);
    }
  };

  const isFirstPage = () => {
    return !page || parseInt(page) === 1;
  };

  const fetchNextPageArtists = async (nextPage: number) => {
    try {
      const token = user.token;

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/artists/${nextPage}`,
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
        setHasNextPage(responseData.artists.length > 0);
        return responseData.artists;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const token = user.token;

        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/artists/${page || 1}`,
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
          setArtists(responseData.artists);
          setHasNextPage(responseData.artists.length === 12);
        }
      } catch (error) {
        console.error(error);
      }
      fetchNextPageArtists(page ? parseInt(page) + 1 : 2);
    };
    fetchArtists();
  }, [page, user.token]);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const token = user.token;

      const formData = new FormData();
      if (data) {
        formData.append("name", data.name ?? "");
        formData.append("description", data.description ?? "");
        if (data.image) {
          formData.append(
            "image",
            typeof data.image === "string"
              ? data.image
              : data.image instanceof File
              ? data.image
              : ""
          );
        }
      }

      const response = await fetch(`${process.env.REACT_APP_API_URL}/artists`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const responseData = await response.json();

      if (!response.ok) {
        setShowErrorMessage(true);
        setErrorMessage(
          "There was a problem adding the artist, make sure the info is correct"
        );
      } else {
        setData({
          _id: responseData.artist._id,
          name: responseData.artist.name,
          description: responseData.artist.description,
          image: responseData.image,
        });
        setIsSubmitting(true);
        setShowSuccessMessage(true);
        setSuccessMessage("Artist added successfully!");
        setTimeout(() => {
          window.location.reload();
          setIsSubmitting(false);
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteArtist = async (artistId: string) => {
    try {
      const token = user.token;

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/artist/${artistId}`,
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
        const updatedArtists = artists.filter(
          (artist) => artist._id !== artistId
        );
        const nextPageArtists = await fetchNextPageArtists(
          parseInt(page || "1") + 1
        );

        if (nextPageArtists.length > 0) {
          updatedArtists.push(nextPageArtists[0]);
        }

        setArtists(updatedArtists);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <Navbar />
      <Header>Artists</Header>
      <Container>
        {artists.map((artist) => (
          <ArtistCard
            key={artist._id ?? ""}
            artist={artist}
            onDelete={deleteArtist}
          />
        ))}
      </Container>
      {user.userRole === "ADMIN" && isFirstPage() && (
        <FormContainer>
          <h2>Add a new artist</h2>
          <Form onSubmit={handleSubmit}>
            <Input>
              <TextField
                onChange={(e) => handleInputChange(e, "name", setData)}
                label="Name"
                placeholder="Artist name"
                name="name"
                value={data.name ?? ""}
                required={true}
              />
            </Input>
            <Input>
              <TextArea
                onChange={(e) => handleInputChange(e, "description", setData)}
                label="Description"
                placeholder="Artist description"
                name="description"
                value={data.description ?? ""}
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
              <Button
                label="Add artist"
                type="submit"
                disabled={
                  isSubmitting || !data.name || !data.description || !data.image
                }
              />
            </ButtonWrapper>
          </Form>
        </FormContainer>
      )}
      <ArrowsWrapper>
        <IconWrapper>
          <ArrowBackIosRoundedIcon onClick={goBack} />
        </IconWrapper>
        <IconWrapper>
          <ArrowForwardIosRoundedIcon
            style={{ cursor: hasNextPage ? "pointer" : "not-allowed" }}
            onClick={goForward}
          />
        </IconWrapper>
      </ArrowsWrapper>
    </Wrapper>
  );
};

export default Artists;
