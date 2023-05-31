import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #181818;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    border-radius: 1rem;
    margin-top: 3rem;
    cursor: pointer;

    @media (max-width: 500px) {
      max-width: 300px;
    }
  }
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
  max-width: 750px;

  @media (max-width: 500px) {
    max-width: 300px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
`;

export const TitleAndYearWrapper = styled.div`
  display: flex;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 45rem;
  height: 4.5rem;
  margin: 0 0 1.5rem 0;

  button {
    width: 15rem;
    height: 4.5rem;
    margin-right: 3rem;
  }
`;

export const ButtonAndImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  img {
    border-radius: 1rem;
    object-fit: cover;
    width: 20rem;
    height: 20rem;
    margin-left: 2rem;
    margin-top: 1rem;
  }
`;
