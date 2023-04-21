import React, { FC } from "react";

import { ArtistType } from "../../utils/types";

import { Container } from "./artist-card.styled";

interface ArtistCardProps {
  artist: ArtistType;
}

const ArtistCard: FC<ArtistCardProps> = ({ artist }) => {
  return (
    <Container>
      <img src={`http://localhost:3977${artist.image}`} alt={artist.name} />
      <h2>{artist.name}</h2>
    </Container>
  );
};

export default ArtistCard;
