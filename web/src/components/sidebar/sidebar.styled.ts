import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 24rem;
  height: 100vh;
  background: var(--black);
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  z-index: 100;
`;

export const LogoWrapper = styled.div`
  margin: 2.5rem;
`;

export const Underline = styled.div`
  width: 90%;
  margin: 1rem 5%;
  height: 0.1rem;
  background-color: var(--light-white);
`;

export const CreatePlaylist = styled.div`
  color: var(--light-white);
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 4rem 0 1rem 0;

  svg {
    background-color: var(--light-white);
    color: var(--black);
    width: 2rem;
    height: 2rem;
    margin: 0 2rem;
    padding: 0.5rem;
  }

  span {
    font-size: 1.5rem;
    font-weight: 600;
  }

  &:hover {
    color: var(--white);
    svg {
      background-color: var(--white);
    }
  }
`;
