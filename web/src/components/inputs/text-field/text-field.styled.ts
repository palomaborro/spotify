import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.p`
  margin: 0.5rem 0;
  font-weight: 500;
  font-size: 1.4rem;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin: 0.2rem 0;
  font-weight: 400;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
`;
