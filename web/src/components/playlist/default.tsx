import React from "react";

import { Link } from "react-router-dom";

import { Container } from "./playlist.styled";

const Playlists = ({ playlists }: any) => {
  return (
    <>
      {playlists.map((playlist: any) => (
        <Link key={playlist._id} to={`/playlist/${playlist._id}`}>
          <Container>
            {playlist.img === "" ? (
              <img
                src="https://static.thenounproject.com/png/17849-200.png"
                alt={playlist.name}
                style={{ background: "#919496" }}
              />
            ) : (
              <img src={playlist.img} alt={playlist.name} />
            )}
            <p>{playlist.name}</p>
            <span>{playlist.desc}</span>
          </Container>
        </Link>
      ))}
    </>
  );
};

export default Playlists;
