import React, { FC } from "react";

import { Link } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";

import { ArtistType } from "../../utils/types";

import { Container, Artist, ArtistNameWrapper } from "./artist-card.styled";
import "./artist-card.styles.scss";

interface ArtistCardProps {
  artist: ArtistType;
  onDelete: (id: string) => void;
}

const ArtistCard: FC<ArtistCardProps> = ({ artist, onDelete }) => {
  const handleDeleteClick = (e: React.MouseEvent, artistId: string) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete(artistId);
  };

  return (
    <Container>
      <Link to={`/artist/${artist._id}`}>
        <img src={`http://localhost:3977${artist.image}`} alt={artist.name} />
        <ArtistNameWrapper>
          <Artist>{artist.name}</Artist>
          <DeleteIcon
            onClick={(e) => handleDeleteClick(e, artist._id)}
            fontSize="large"
            className="delete-icon"
          />
        </ArtistNameWrapper>
      </Link>
    </Container>
  );
};

export default ArtistCard;
