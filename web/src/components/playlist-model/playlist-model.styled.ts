import styled from "styled-components";

export const Container = styled.div`
  width: 40rem;
  min-height: 40rem;
  background-color: var(--light-black);
  border-radius: 1rem;
  position: fixed;
  top: calc(50% - 20rem);
  left: calc(50% - 20rem);
  z-index: 200;
`;

export const FormContainer = styled.div`
  h1 {
    font-size: 1.8rem;
    font-weight: 500;
    margin: 2rem;
    margin-bottom: 0;
  }
`;

export const InputContainer = styled.div`
  padding: 0.5rem 1rem;
`;
