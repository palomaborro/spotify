import React from "react";

import { ClickAwayListener } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import "./playlist-menu.styles.scss";

const playlists = [
  { _id: 1, img: "", name: "Today's Top Songs", desc: "By Jahangeer" },
];

const PlaylistMenu = ({ closeMenu }: any) => {
  return (
    <ClickAwayListener onClickAway={closeMenu}>
      <div className="menu" onClick={closeMenu}>
        <div className="playlist_option">
          <p>Add to Playlist</p>
          <>
            <ArrowRightIcon />
            <div className="playlists">
              {playlists.map((playlist) => (
                <div className="option" key={playlist._id}>
                  <p>{playlist.name}</p>
                </div>
              ))}
            </div>
          </>
        </div>

        <div className="option">
          <p>Go to artist</p>
        </div>
        <div className="option">
          <p>Share</p>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default PlaylistMenu;
