import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 2rem);
  border: 1px solid var(--white);
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  audio {
    width: 25rem;
    height: 4rem;
    border-radius: 0.1rem;
  }

  img {
    width: 8rem;
    height: 8rem;
    object-fit: contain;
  }
`;

export const Input = styled.input`
  display: none;
`;
