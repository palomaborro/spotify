import React, { FC, useContext } from "react";

import { Link } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";

import { AlbumType } from "../../utils/types";
import { UserContext } from "../../utils/user-context";

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
  onDelete: (id: string) => void;
}

const AlbumCard: FC<AlbumCardProps> = ({ album, artist, onDelete }) => {
  const artistName = artist ?? "";

  const { user } = useContext(UserContext);

  const handleDeleteClick = (e: React.MouseEvent, albumId: string) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete(albumId);
  };

  return (
    <Container>
      <Link to={`/album/${album._id}`}>
        <img src={`http://localhost:3977${album.image}`} alt={artistName} />
        <TextWrapper>
          <TitleAndYearWrapper>
            <Title>{album.title}</Title>
            <Year>({album.year})</Year>
          </TitleAndYearWrapper>
          {user.userRole === "ADMIN" && (
            <DeleteIcon
              onClick={(e) => handleDeleteClick(e, album._id)}
              fontSize="large"
              className="delete-icon"
            />
          )}
        </TextWrapper>
      </Link>
    </Container>
  );
};

export default AlbumCard;
