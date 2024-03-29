import React, { FC, useContext } from "react";

import { Link } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";

import { ArtistType } from "../../utils/types";
import { UserContext } from "../../utils/user-context";

import { Container, Artist, ArtistNameWrapper } from "./artist-card.styled";
import "./artist-card.styles.scss";

interface ArtistCardProps {
  artist: ArtistType;
  onDelete: (id: string) => void;
}

const ArtistCard: FC<ArtistCardProps> = ({ artist, onDelete }) => {
  const { user } = useContext(UserContext);

  const handleDeleteClick = (e: React.MouseEvent, artistId: string) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete(artistId);
  };

  const isUserRedirect = user.isAuthenticated
    ? `/artist/${artist._id}`
    : "/sign-up";

  return (
    <Container>
      <Link className="artist-link" to={isUserRedirect}>
        <img
          src={`${process.env.REACT_APP_API_URL}${artist.image}`}
          alt={artist.name ?? "Artist"}
        />
        <ArtistNameWrapper>
          <Artist>{artist.name}</Artist>
          {user.userRole === "ADMIN" && (
            <DeleteIcon
              onClick={(e) => {
                if (artist._id) {
                  handleDeleteClick(e, artist._id);
                }
              }}
              fontSize="large"
              className="delete-icon"
            />
          )}
        </ArtistNameWrapper>
      </Link>
    </Container>
  );
};

export default ArtistCard;
