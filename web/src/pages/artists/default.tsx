import React, { useState, useEffect, useContext } from "react";

import { useParams, useNavigate } from "react-router-dom";

import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import { ArtistType } from "../../utils/types";
import { UserContext } from "../../utils/user-context";

import ArtistCard from "../../components/artist-card/default";
import Navbar from "../../components/navbar/default";

import {
  Wrapper,
  Container,
  Header,
  IconWrapper,
  ArrowsWrapper,
} from "./artists.styled";

const Artists = () => {
  const [artists, setArtists] = useState<ArtistType[]>([]);
  const [hasNextPage, setHasNextPage] = useState(true);

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

  return (
    <Wrapper>
      <Navbar />
      <Header>Artists</Header>
      <Container>
        {artists.map((artist) => (
          <ArtistCard key={artist._id} artist={artist} />
        ))}
      </Container>
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
