import styled from "styled-components";

export const Header = styled.div`
  position: relative;
  display: flex;
  padding: 5rem;
  background-color: var(--gradient-gray);
`;

export const PlaylistInfo = styled.div`
  align-self: flex-end;
  margin-left: 2rem;

  h1 {
    font-size: 8rem;
    margin: 0;
  }

  p {
    font-size: 1.4rem;
    margin: 0;
    text-transform: uppercase;
  }

  span {
    font-size: 1.4rem;
  }
`;

export const Body = styled.div`
  padding: 1rem 3rem;
`;

export const NavBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  color: var(--light-white);
  font-size: 1.4rem;
  text-transform: uppercase;
  border-bottom: 1px solid var(--light-white);
  margin-bottom: 1rem;
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
