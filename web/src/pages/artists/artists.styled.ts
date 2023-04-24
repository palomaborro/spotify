import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #181818;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 15rem;

  > * {
    flex: 0 0 calc(25% - 1rem);
    margin-bottom: 1rem;
  }

  @media (max-width: 1400px) {
    > * {
      flex: 0 0 calc(33.333% - 1rem);
    }
  }

  @media (max-width: 1100px) {
    padding: 0 7rem;

    > * {
      flex: 0 0 calc(50% - 1rem);
    }
  }

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

export const Header = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  font-weight: 600;
  margin: 2rem 0 7rem 0;
  color: #b3b3b3;
`;

export const IconWrapper = styled.div`
  margin-left: 2rem;
  cursor: pointer;

  svg {
    background-color: #333333;
    color: var(--white);
    padding: 0.5rem;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
  }
`;

export const ArrowsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 0;
`;
