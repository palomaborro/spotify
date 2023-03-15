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

export const SelectWrapper = styled.select`
  height: 5rem;
  font-size: 1.6rem;
  font-weight: 400;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--black);
  padding: 0 1rem;

  &:hover {
    outline: 1px solid var(--black);
  }
`;
