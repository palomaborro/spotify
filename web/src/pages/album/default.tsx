import React, { useState, useEffect, useContext } from "react";

import { useParams, Link } from "react-router-dom";

import { ArtistType, AlbumType } from "../../utils/types";
import { UserContext } from "../../utils/user-context";

import Navbar from "../../components/navbar/default";

import {
  Wrapper,
  Content,
  Container,
  AlbumTitle,
  AlbumYear,
  ArtistName,
  AlbumDescription,
  TextContainer,
  TitleAndYearWrapper,
} from "./album.styled";

const Album = () => {
  const initialArtist: ArtistType = {
    _id: "",
    name: "",
    image: null,
    description: "",
  };

  const [album, setAlbum] = useState<AlbumType>({
    _id: "",
    title: "",
    image: null,
    year: 0,
    description: "",
    artist: initialArtist,
  });

  const { id } = useParams();
  const { user } = useContext(UserContext);

  useEffect(() => {
    const getAlbum = async () => {
      try {
        const token = user.token;

        const response = await fetch(`http://localhost:3977/album/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        } else {
          setAlbum(data.album);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getAlbum();
  }, [id]);

  return (
    <Wrapper>
      <Navbar />
      <Content>
        <Container>
          <img src={`http://localhost:3977${album.image}`} alt={album.title} />
          <TextContainer>
            <TitleAndYearWrapper>
              <AlbumTitle>{album.title}</AlbumTitle>
              <AlbumYear>({album.year})</AlbumYear>
            </TitleAndYearWrapper>
            <Link to={`/artist/${album.artist._id}`}>
              <ArtistName>{album.artist.name}</ArtistName>
            </Link >
            <AlbumDescription>{album.description}</AlbumDescription>
          </TextContainer>
        </Container>
      </Content>
    </Wrapper>
  );
};

export default Album;
