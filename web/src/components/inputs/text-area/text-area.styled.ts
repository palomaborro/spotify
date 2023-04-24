import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  textarea {
    height: 13rem;
    font-size: 1.6rem;
    font-weight: 400;
    border-radius: 0.5rem;
    border: 0.1rem solid var(--black);
    padding: 1rem;
    background-color: #3c3c3c;
    color: #b3b3b3;
    font-family: "Roboto", sans-serif;

    ::placeholder {
      color: #b3b3b3;
    }
  }
`;

export const Label = styled.p`
  margin: 0.5rem 0;
  font-weight: 500;
  font-size: 1.4rem;
  color: #b3b3b3;
`;
