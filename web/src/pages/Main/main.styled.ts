import styled from "styled-components";

export const MainContainer = styled.div`
  overflow-x: hidden;
`;

export const NavbarContainer = styled.nav`
  width: calc(100vw - 20rem);
  height: 8rem;
  background-color: var(--black);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
`;

export const NavLinks = styled.div`
  display: flex;
  color: white;

  :nth-child(3) {
    border-right: 1px solid var(--white);
  }
`;

export const Container = styled.main`
  width: 100vw;
  min-height: 85rem;
  background-color: var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: url(https://www-growth.scdn.co/static/home/bursts.svg);
  background-size: 175%;
  background-position: 46% 4%;
  -webkit-box-pack: center;
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
    @media (min-width: 1200px) {
      text-indent: -3.3em;
      font-size: 15rem;
      width: 80rem;
      transform: translate(125px, 0px);
    }
  }

  p {
    font-size: 1.8rem;
    font-weight: 400;
    color: var(--primary);
    padding-bottom: 3rem;
  }
`;

export const Footer = styled.footer`
  width: calc(100vw - 20rem);
  padding: 5rem 10rem;
  background-color: var(--black);
`;

export const FooterFirstElement = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8rem;
`;

export const FooterFirstElementLinks = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const FooterIcons = styled.div`
  display: flex;
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

export const FooterSecondElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterSecondElementLinks = styled.div`
  display: flex;
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: var(--light-white);
  span {
    margin: 0 0.5rem;
  }
`;
