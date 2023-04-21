import React, { useState, useEffect, useContext } from "react";

import { ArtistType } from "../../utils/types";
import { UserContext } from "../../utils/user-context";

const Artists = () => {
  const [artists, setArtists] = useState<ArtistType[]>([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const token = user.token;

        const response = await fetch("http://localhost:3977/artists/:page", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const responseData = await response.json();
        console.log(responseData);

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
  }, [user.token]);

  return (
    <div>
      <h1>Artists</h1>
      {artists.map((artist) => (
        <div key={artist._id}>
          <h2>{artist.name}</h2>
          <p>{artist.description}</p>
          {artist.image && (
            <img
              src={`http://localhost:3977${artist.image}`}
              alt={artist.name}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Artists;
