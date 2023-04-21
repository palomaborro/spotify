import React, { useState, useEffect, useContext } from "react";

import { useParams } from "react-router-dom";

import { ArtistType } from "../../utils/types";
import { UserContext } from "../../utils/user-context";

import ArtistCard from "../../components/artist-card/default";

const Artists = () => {
  const [artists, setArtists] = useState<ArtistType[]>([]);

  const { user } = useContext(UserContext);
  const { page } = useParams();

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const token = user.token;

        const response = await fetch(
          `http://localhost:3977/artists/${page || 1}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        } else {
          setArtists(responseData.artists);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchArtists();
  }, [page, user.token]);

  return (
    <div>
      <h1>Artists</h1>
      {artists.map((artist) => (
        <ArtistCard key={artist._id} artist={artist} />
      ))}
    </div>
  );
};

export default Artists;
