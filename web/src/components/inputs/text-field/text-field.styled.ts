import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  .input {
    height: 5rem;
    font-size: 1.6rem;
    font-weight: 400;
    border-radius: 0.5rem;
    border: 0.1rem solid var(--black);
    padding: 0 1rem;

    &:hover {
      outline: 1px solid var(--black);
    }
  }
`;

export const Label = styled.p`
  margin: 0.5rem 0;
  font-weight: 500;
  font-size: 1.4rem;
  color: #b3b3b3;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin: 1rem 0 0.3rem 0;
  font-weight: 400;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
`;
