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
    max-width: 300px;
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
  }
`;

export const ArtistDescription = styled.p`
  color: #b3b3b3;
  line-height: 1.6;
  padding: 3rem 0 2rem 0;
  text-align: justify;
  font-size: 1.5rem;
  max-width: 750px;

  @media (max-width: 500px) {
    max-width: 300px;
  }

  @media (max-width: 850px) {
    width: 500px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
    max-width: 300px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 45rem;
  margin: 0 0 1.5rem 0;

  button {
    width: 15rem;
    height: 4.5rem;
    margin-right: 3rem;
  }

  @media (max-width: 500px) {
    max-width: 300px;
  }
`;

export const ButtonAndImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  img {
    border-radius: 50rem;
    object-fit: cover;
    width: 20rem;
    height: 20rem;
    margin-left: 2rem;
    margin-top: 1rem;
  }
`;

export const MessageBannerWrapper = styled.div`
  width: 432px;
  height: auto;

  @media (max-width: 500px) {
    max-width: 300px;
  }
`;

export const DiscographyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 750px;

  @media (max-width: 500px) {
    max-width: 300px;
  }
`;

export const Discography = styled.h1`
  color: #fff;
  display: flex;
  padding-top: 3rem;
  margin-bottom: 2rem;

  &:hover {
    color: var(--primary);
  }
`;

export const AlbumsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  max-width: 750px;

  > * {
    flex: 1;
    margin-bottom: 1rem;
    padding: 0 2rem;
  }
`;

export const EmptyAlbums = styled.p`
  color: #b3b3b3;
  font-size: 1.5rem;
  margin-top: 0.5rem;
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

export const Input = styled.div<{ isImage?: boolean }>`
  width: 45rem;
  margin: 0.5rem 0;
  display: ${({ isImage }) => (isImage ? "flex" : "")};
  align-items: center;

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
