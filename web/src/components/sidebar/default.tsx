// @ts-nocheck
import React from "react";

import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddIcon from "@mui/icons-material/Add";

import WhiteLogoIcon from "../../images/white-logo";

import {
  Container,
  LogoWrapper,
  Underline,
  CreatePlaylist,
} from "./sidebar.styled";

import "./sidebar.styles.scss";

const playlists = [
  { _id: 1, img: "", name: "Today's Top Songs", desc: "By Jahangeer" },
];

const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <WhiteLogoIcon width={240} />
      </LogoWrapper>
      <Link to="/home" className={`${active ? "active_menu" : "menu_link"}`}>
        <HomeIcon />
        <span>Home</span>
      </Link>
      <Link to="/search" className={`${active ? "active_menu" : "menu_link"}`}>
        <SearchIcon />
        <span>Search</span>
      </Link>
      <Link
        to="/collection/playlists"
        className={`${active ? "active_menu" : "menu_link"}`}
      >
        <LibraryMusicIcon />
        <span>Your Library</span>
      </Link>
      <CreatePlaylist>
        <AddIcon />
        <span>Create Playlist</span>
      </CreatePlaylist>
      <Link
        to="/collection/tracks"
        className={`${active ? "active_menu" : "menu_link"}`}
      >
        <img src="../../images/like-icon.jpeg" alt="jfo" />
        <span>Liked Songs</span>
      </Link>
      <Underline />
      {playlists.map((playlist) => (
        <Link
          key={playlist._id}
          to={`/playlist/${playlist._id}`}
          className={`${active ? "active_link" : "playlist_link"}`}
        >
          {playlist.name}
        </Link>
      ))}
    </Container>
  );
};

export default Sidebar;
