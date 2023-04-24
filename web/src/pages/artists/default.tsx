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
} from "./artists.styled";

const Artists = () => {
  const [artists, setArtists] = useState<ArtistType[]>([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [data, setData] = useState<ArtistType>({
    name: "",
    description: "",
    image: null,
  });
  const [formImageURL, setFormImageURL] = useState<string | undefined>(
    undefined
  );
  const [successMessage, setSuccessMessage] = useState<string | undefined>("");
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

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
        `http://localhost:3977/artists/${nextPage}`,
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
          `http://localhost:3977/artists/${page || 1}`,
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
      formData.append("name", data.name);
      formData.append("description", data.description);
      if (data.image) {
        formData.append("image", data.image);
      }

      const response = await fetch("http://localhost:3977/artists", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      } else {
        setData({
          name: responseData.artist.name,
          description: responseData.artist.description,
          image: responseData.image,
        });
        setShowSuccessMessage(true);
        setSuccessMessage("Artist added successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
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
          <ArtistCard key={artist._id} artist={artist} />
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
                value={data.name}
                required={true}
              />
            </Input>
            <Input>
              <TextArea
                onChange={(e) => handleInputChange(e, "description", setData)}
                label="Description"
                placeholder="Artist description"
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
                type="file"
              />
              {formImageURL && (
                <img src={formImageURL} alt="user" width={100} />
              )}
            </Input>
            {showSuccessMessage && (
              <SuccessMessage>{successMessage}</SuccessMessage>
            )}
            <ButtonWrapper>
              <Button label="Add Artist" type="submit" />
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
