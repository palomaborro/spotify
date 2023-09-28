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
    max-width: 300px;
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

export const AlbumDescription = styled.p`
  color: #b3b3b3;
  line-height: 1.6;
  text-align: justify;
  font-size: 1.5rem;
  max-width: 750px;

  @media (max-width: 500px) {
    max-width: 300px;
  }

  @media (max-width: 850px) {
    max-width: 600px;
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

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #b3b3b3;
    font-size: 2rem;
    margin-top: 3rem;
  }
`;

export const Input = styled.div<{ isImage?: boolean; isTrack?: boolean }>`
  width: 45rem;
  margin: 0.5rem 0;
  display: ${({ isImage, isTrack }) => (isImage || isTrack ? "flex" : "")};
  align-items: center;
  color: ${({ isTrack }) => (isTrack ? "#b3b3b3" : "")};
  font-size: ${({ isTrack }) => (isTrack ? "1.5rem" : "")};

  img {
    border-radius: 50rem;
    object-fit: cover;
    width: 8rem;
    height: 8rem;
    margin-left: 2rem;
    margin-top: 1rem;
  }

  @media (max-width: 500px) {
    width: 30rem;
  }
`;

export const SuccessMessage = styled.p`
  color: #20c15b;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

export const ErrorMessage = styled.p`
  color: #c12020;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

export const Tracks = styled.h1`
  color: #fff;
  display: flex;
  padding-top: 3rem;
  margin-bottom: 2rem;

  &:hover {
    color: var(--primary);
  }
`;

export const EmptyTracks = styled.p`
  color: #b3b3b3;
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

export const TrackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 750px;
  width: 100%;

  @media (max-width: 500px) {
    max-width: 300px;
  }

  @media (max-width: 850px) {
    max-width: 600px;
  }
`;
