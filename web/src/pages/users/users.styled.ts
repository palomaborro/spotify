import styled from "styled-components";

export const Container = styled.div`
  overflow-x: auto;
  min-height: 100vh;
  background-color: #181818;
`;

export const Body = styled.div`
  padding: 1rem 3rem;
  min-width: 700px;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20rem;
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
  justify-content: center;
  padding-right: 4rem;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const UserList = styled.div<{ lastElement?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  color: var(--light-white);
  font-size: 1.4rem;
  border-bottom: ${({ lastElement }) =>
    !lastElement ? "1px solid var(--light-white)" : "none"};
`;

export const ButtonWrapper = styled.div`
  margin-right: 1rem;

  @media (max-width: 700px) {
  }
`;
