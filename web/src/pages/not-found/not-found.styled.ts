import styled from "styled-components";

export const Container = styled.div`
  width: calc(100vw - 40rem);
  height: 100vh;
  background-color: var(--light-pink);
  display: flex;
  align-items: center;
  padding: 0 20rem;
  overflow: hidden;
`;

export const LeftElement = styled.div`
  flex: 1;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30rem;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  letter-spacing: -0.01em;
  font-weight: 900;
  margin: 0;
  padding-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0;
  padding-bottom: 2rem;
`;

export const RedirectLink = styled.span`
  color: var(--black);
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 1rem 0;
  letter-spacing: 0.2em;
  cursor: pointer;

  &:hover {
    color: #616467;
  }
`;

export const RightElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
`;

export const RecordContainer = styled.div`
  transition: all ease 4s;
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
