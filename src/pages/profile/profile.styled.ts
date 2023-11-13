import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
  min-height: 100vh;
  background-color: #181818;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--light-white);

  img {
    width: 20rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  color: #b3b3b3;

  div {
    margin-right: 2rem;
  }

  img {
    border-radius: 50rem;
    object-fit: cover;
    width: 10rem;
    height: 10rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin-top: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 3rem;

  @media (max-width: 500px) {
    width: 100%;
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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 45rem;
  margin: 2rem 0 1.5rem 0;

  button {
    width: 15rem;
    height: 4.5rem;
  }
`;

export const SuccessMessage = styled.p`
  color: #20c15b;
  margin-top: 1rem;
  font-size: 1.5rem;
`;
