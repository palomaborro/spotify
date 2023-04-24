import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #181818;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 15rem;

  > * {
    flex: 0 0 calc(25% - 1rem);
    margin-bottom: 1rem;
  }

  @media (max-width: 1400px) {
    > * {
      flex: 0 0 calc(33.333% - 1rem);
    }
  }

  @media (max-width: 1100px) {
    padding: 0 7rem;

    > * {
      flex: 0 0 calc(50% - 1rem);
    }
  }

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

export const Header = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  font-weight: 600;
  margin: 2rem 0 7rem 0;
  color: #b3b3b3;
`;

export const IconWrapper = styled.div`
  margin-left: 2rem;
  cursor: pointer;

  svg {
    background-color: #333333;
    color: var(--white);
    padding: 0.5rem;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
  }
`;

export const ArrowsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 0;
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
