import styled from "styled-components";

export const MainContainer = styled.div``;

export const Container = styled.main`
  width: 100vw;
  background-color: var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: url(https://www-growth.scdn.co/static/home/bursts.svg);
  background-size: 175%;
  background-position: 46% 4%;

  @media (max-width: 500px) {
    background-position: 100% 4%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 15rem 0;

  h1 {
    text-align: center;
    font-size: 10rem;
    color: var(--primary);
    font-weight: 900;
    margin: 0;
    padding-bottom: 2.4rem;
    text-shadow: -1px -1px 0 #5573ed, 1px -1px 0 #5573ed, -1px 1px 0 #5573ed,
      1px 1px 0 #5573ed;

    @media (min-width: 1200px) {
      text-indent: -3.3em;
      font-size: 15rem;
      width: 80rem;
      transform: translate(125px, 0px);
    }
    @media (max-width: 900px) {
      font-size: 6rem;
    }
  }

  p {
    font-size: 1.8rem;
    font-weight: 300;
    color: var(--primary);
    padding-bottom: 3rem;

    @media (max-width: 1100px) {
      font-size: 1.2rem;
    }
  }
`;

export const Footer = styled.footer`
  width: calc(100vw - 20rem);
  padding: 5rem 10rem;
  background-color: var(--black);

  @media (max-width: 900px) {
    width: auto;
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }
`;

export const FooterFirstElement = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }

  &:f {
    margin-top: 3rem;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FooterFirstElementLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-right: 5rem;

  @media (max-width: 900px) {
    margin-top: 3rem;
  }
`;

export const FooterHeading = styled.div`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 900;
  line-height: 4rem;
  color: var(--light-white);
`;

export const FooterLinks = styled.div`
  text-decoration: none;
  text-transform: capitalize;
  font-size: 1.6rem;
  line-height: 4rem;
  font-weight: 400;
  color: var(--white);
  cursor: pointer;

  &:hover {
    color: var(--primary);
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FooterIcons = styled.div`
  display: flex;

  @media (max-width: 900px) {
    margin-top: 3rem;
  }
`;

export const FooterIcon = styled.div`
  width: 5.4rem;
  height: 5.4rem;
  border-radius: 50%;
  margin-left: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: var(--light-black);
  color: var(--white);

  &:hover {
    color: var(--primary);
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: var(--light-white);

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
  }

  span {
    margin: 0 0.5rem;
  }
`;
