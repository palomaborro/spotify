import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { ArtistType } from "../../utils/types";

import Navbar from "../../components/navbar/default";

import {
  Wrapper,
  Container,
  ArtistNameAndImageContainer,
  Image,
  ArtistName,
  ArtistDescription,
} from "./artist.styled";

const Artist = () => {
  const [artist, setArtist] = useState<ArtistType>();

  const { id } = useParams();

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
          setArtist(responseData.artist);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getArtist();
  }, [id]);

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <ArtistNameAndImageContainer>
          <Image
            src={`http://localhost:3977${artist?.image}`}
            alt={artist?.name}
          />
          <ArtistName>{artist?.name}</ArtistName>
        </ArtistNameAndImageContainer>
        <ArtistDescription>{artist?.description}</ArtistDescription>
      </Container>
    </Wrapper>
  );
};

export default Artist;
