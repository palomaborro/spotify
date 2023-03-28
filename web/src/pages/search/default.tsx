import React, { Fragment, useState } from "react";

import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

import Song from "../../components/song/default";
import Playlists from "../../components/playlist/default";

import {
  Container,
  SearchWrapper,
  ResultsWrapper,
  SongsWrapper,
  PlaylistsWrapper,
} from "./search.styled";

const playlists = [
  {
    _id: 1,
    img: "../../images/rock.jpg",
    name: "Today's Top Songs",
    desc: "By Jahangeer",
  },
];

const songs = [
  {
    _id: 1,
    img: "../../images/peaches.jpg",
    name: "Today's Top Songs",
    artist: "By Jahangeer",
  },
];

const Search = () => {
  const [search, setSearch] = useState("");
  const handleSearch = async ({ currentTarget: input }: any) => {
    setSearch(input.value);
  };

  return (
    <Container>
      <SearchWrapper>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input
          type="text"
          placeholder="Search for songs and playlists"
          onChange={handleSearch}
          value={search}
        />
        <IconButton onClick={() => setSearch("")}>
          <ClearIcon />
        </IconButton>
      </SearchWrapper>
      <ResultsWrapper>
        <SongsWrapper>
          {songs.map((song) => (
            <Fragment key={song._id}>
              <Song song={song} />
            </Fragment>
          ))}
        </SongsWrapper>
        <PlaylistsWrapper>
          <Playlists playlists={playlists} />
        </PlaylistsWrapper>
      </ResultsWrapper>
    </Container>
  );
};

export default Search;
