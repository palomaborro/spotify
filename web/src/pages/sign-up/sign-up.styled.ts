import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Header = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 3rem;
  margin-top: 3rem;
  color: #b3b3b3;

  @media (max-width: 500px) {
    width: 30rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const InputContainer = styled.div<{ isImage?: boolean }>`
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

export const TermsAndConditions = styled.p`
  width: 45rem;
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-weight: 500;
  text-align: center;
  margin: 0.8rem 0;
  color: #b3b3b3;

  a {
    text-decoration: underline;
    color: var(--dark-green);
  }

  @media (max-width: 500px) {
    width: 30rem;
  }
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45rem;
  margin: 1rem 0 1.5rem 0;

  button {
    width: 15rem;
    height: 5.6rem;
  }
`;
