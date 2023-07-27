import styled from "styled-components";

export const Wrapper = styled.div`
  overflow-x: auto;
  min-height: 100vh;
  background-color: #181818;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PlaylistInfo = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 5rem;
    padding: 2rem;
    color: #b3b3b3;
  }
`;

export const NavBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  color: var(--light-white);
  font-size: 1.4rem;
  text-transform: uppercase;
  border-bottom: 1px solid var(--light-white);
  width: 750px;
`;

export const LeftElement = styled.div`
  display: flex;
  flex: 1;
  padding-left: 2rem;

  span {
    margin-right: 1.5rem;
  }

  p {
    margin: 0;
  }
`;

export const MiddleElement = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  p {
    margin: 0;
  }
`;

export const RightElement = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 4rem;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const PlaylistContainer = styled.div`
  width: 750px;
`;
