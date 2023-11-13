import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 50rem;
    object-fit: cover;
    width: 20rem;
    height: 20rem;
    cursor: pointer;
  }
`;

export const Artist = styled.h2`
  color: #b3b3b3;
  margin: 3rem 0;
  font-size: 2rem;
  display: flex;
  justify-content: center;
`;

export const ArtistNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
