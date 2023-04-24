import React, { FC } from "react";

import { Link } from "react-router-dom";

import { ArtistType } from "../../utils/types";

import { Container } from "./artist-card.styled";

interface ArtistCardProps {
  artist: ArtistType;
}

const ArtistCard: FC<ArtistCardProps> = ({ artist }) => {
  return (
    <Container>
      <Link to={`/artist/${artist._id}`}>
        <img src={`http://localhost:3977${artist.image}`} alt={artist.name} />
        <h2>{artist.name}</h2>
      </Link>
    </Container>
  );
};

export default ArtistCard;
