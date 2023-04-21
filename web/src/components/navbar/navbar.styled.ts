import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: calc(100vw - 20rem);
  height: 8rem;
  background-color: var(--black);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 900px) {
    padding: 0 2rem;
    width: auto;
  }

  .menu-icon {
    display: none;
    color: white;
    cursor: pointer;

    @media (max-width: 900px) {
      display: block;
    }
  }
`;

export const NavLinks = styled.div<{
  isMenuOpen: boolean;
}>`
  display: flex;
  color: white;

  a {
    padding: 0 1rem;
    text-decoration: none;
    color: inherit;

    &:hover {
      color: var(--primary);
    }
  }

  @media (max-width: 900px) {
    position: fixed;
    top: ${({ isMenuOpen }) => (isMenuOpen ? "8rem" : "-100%")};
    left: 0;
    background-color: var(--black);
    flex-direction: column;
    width: 100%;
    padding: 1rem 0;
    z-index: 10;
  }
`;
