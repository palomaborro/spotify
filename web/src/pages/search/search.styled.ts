import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 80vh;
`;

export const SearchWrapper = styled.div`
  background: var(--white);
  padding: 1rem;
  border-radius: 3rem;
  width: 60rem;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  input {
    border: none;
    outline: none;
    background: transparent;
    flex-grow: 1;
    font-size: 1.6rem;
  }
`;

export const ResultsWrapper = styled.div`
  margin: 2rem;
  display: flex;
  z-index: 2;
`;

export const SongsWrapper = styled.div`
  flex: 2;
`;

export const PlaylistsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 2;
`;
