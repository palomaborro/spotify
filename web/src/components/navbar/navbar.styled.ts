import styled from "styled-components";

// export const Container = styled.div`
//   height: 6rem;
//   width: calc(100% - 28rem);
//   background: linear-gradient(149.46deg, #450af5, #8e8ee5 99.16%);
//   position: fixed;
//   top: 0;
//   left: 0;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 2rem 0 26rem;
//   z-index: 99;
// `;

// export const LeftElement = styled.div`
//   display: flex;
// `;

// export const ProfileMenu = styled.div`
//   .profile_menu {
//     display: flex;
//     align-items: center;
//     padding: 0.5rem;
//     color: var(--white);
//     border-radius: 2rem;
//     cursor: pointer;

//     &:hover {
//       background-color: var(--light-black);
//     }

//     svg {
//       width: 2.5rem;
//       height: 2.5rem;
//     }

//     p {
//       font-size: 1.4rem;
//       font-weight: 600;
//       margin: 0 0.6rem;
//     }

//     svg {
//       width: 2.5rem;
//       height: 2.5rem;
//     }
//   }
// `;

// export const Menu = styled.div`
//   width: 20rem;
//   position: absolute;
//   padding: 0.5rem;
//   top: 5.4rem;
//   right: 2rem;
//   border-radius: 0.5rem;
//   background-color: var(--light-black);
//   z-index: 100;
// `;

// export const Options = styled.div`
//   color: var(--white);
//   padding: 1rem;
//   border-radius: 0.2rem;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   cursor: pointer;

//   p {
//     margin: 0;
//     font-size: 1.2rem;
//     font-weight: 500;
//   }

//   svg {
//     width: 1.6rem;
//     height: 1.6rem;
//   }

//   &:hover {
//     background-color: var(--light-white);
//   }
// `;

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
