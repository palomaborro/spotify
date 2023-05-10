import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #181818;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 1rem;
    margin-right: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 20rem);
  max-width: 750px;
  margin: 0 auto;
  width: 100%;
`;

export const AlbumTitle = styled.h1`
  color: #b3b3b3;
  margin-bottom: 2rem;
  margin-right: 0.5rem;
`;

export const AlbumYear = styled.h1`
  color: #b3b3b3;
  margin-bottom: 2rem;
`;

export const ArtistName = styled.h1`
  color: #b3b3b3;
  margin-bottom: 2rem;
  cursor: pointer;

  &:hover {
    color: var(--primary);
  }
`;

export const AlbumDescription = styled.p`
  color: #b3b3b3;
  line-height: 1.6;
  text-align: justify;
  font-size: 1.5rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleAndYearWrapper = styled.div`
  display: flex;
`;
