import React, { FC } from "react";

import { Link } from "react-router-dom";

import { AlbumType } from "../../utils/types";

import {
  Container,
  Title,
  Year,
  TextWrapper,
  TitleAndYearWrapper,
} from "./album-card.styled";

interface AlbumCardProps {
  album: AlbumType;
  artist: string | null;
}

const AlbumCard: FC<AlbumCardProps> = ({ album, artist }) => {
  const artistName = artist ?? "";

  return (
    <Container>
      <Link to={`/album/${album._id}`}>
        <img src={`http://localhost:3977${album.image}`} alt={artistName} />
        <TextWrapper>
          <TitleAndYearWrapper>
            <Title>{album.title}</Title>
            <Year>({album.year})</Year>
          </TitleAndYearWrapper>
        </TextWrapper>
      </Link>
    </Container>
  );
};

export default AlbumCard;
