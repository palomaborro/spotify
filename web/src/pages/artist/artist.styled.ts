import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #181818;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArtistNameAndImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Image = styled.img`
  width: 750px;
  height: auto;
  margin-top: 3rem;
  border-radius: 0.5rem;

  @media (max-width: 500px) {
    width: 300px;
  }
  @media (max-width: 850px) {
    width: 500px;
  }
`;

export const ArtistName = styled.h1`
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  margin: 0;

  &:hover {
    color: var(--primary);
    cursor: pointer;
  }
`;

export const ArtistDescription = styled.p`
  color: #b3b3b3;
  line-height: 1.6;
  padding: 3rem 0;
  text-align: justify;
  font-size: 1.5rem;
  max-width: 750px;

  @media (max-width: 500px) {
    width: 300px;
  }

  @media (max-width: 850px) {
    width: 500px;
  }
`;
