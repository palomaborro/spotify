import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { NavbarContainer, NavLinks } from "./navbar.styled";
import { UserContext } from "../../utils/user-context";
import WhiteLogoIcon from "../../images/white-logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, logoutUser } = useContext(UserContext);

  const getNavLinks = () => {
    const links = [
      user.isAuthenticated
        ? { name: "Profile", link: "/profile" }
        : { name: "Sign up", link: "/sign-up" },
      { name: "Artists", link: "/artists" },
      user.isAuthenticated
        ? { name: "Log out", link: "/login", onClick: logoutUser }
        : { name: "Log in", link: "/login" },
    ];

    if (user.userRole === "ADMIN") {
      links.splice(1, 0, { name: "Users", link: "/users" });
    }

    return links;
  };

  const navLinks = getNavLinks();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavbarContainer>
      <Link to="/" className="nav-logo">
        <WhiteLogoIcon width={150} />
      </Link>
      <NavLinks isMenuOpen={isMenuOpen}>
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.link}
            className="links"
            onClick={link.onClick}
          >
            {link.name}
          </Link>
        ))}
      </NavLinks>

      <div className="menu-icon" onClick={handleMenuToggle}>
        {isMenuOpen ? (
          <CloseIcon fontSize="large" />
        ) : (
          <MenuIcon fontSize="large" />
        )}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;

// import React, { useState } from "react";

// import { useNavigate, Link } from "react-router-dom";

// import { ClickAwayListener } from "@mui/material";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
// import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import PersonIcon from "@mui/icons-material/Person";
// import SettingsIcon from "@mui/icons-material/Settings";
// import LogoutIcon from "@mui/icons-material/Logout";

// import {
//   Container,
//   LeftElement,
//   ProfileMenu,
//   Menu,
//   Options,
// } from "./navbar.styled";
// import "./navbar.styles.scss";

// const Navbar = () => {
//   const [menu, setMenu] = useState(false);
//   const navigate = useNavigate();
//   const goForward = () => {
//     window.history.forward();
//   };

//   return (
//     <Container>
//       <LeftElement>
//         <div className="icon" onClick={() => navigate(-1)}>
//           <ArrowBackIosRoundedIcon />
//         </div>
//         <div className="icon" onClick={goForward}>
//           <ArrowForwardIosRoundedIcon />
//         </div>
//       </LeftElement>
//       <div>
//         <ProfileMenu
//           style={{ backgroundColor: `${menu ? "#282828" : "#000"}` }}
//           onClick={() => setMenu(!menu)}
//         >
//           <AccountCircleIcon />
//           <p>Jahangeer</p>
//           {menu ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
//         </ProfileMenu>
//       </div>
//       {menu && (
//         <ClickAwayListener onClickAway={() => setMenu(false)}>
//           <Menu onClick={() => setMenu(false)}>
//             <Link to="/me">
//               <Options>
//                 <p>Profile</p>
//                 <PersonIcon />
//               </Options>
//             </Link>
//             <Options>
//               <p>Settings</p>
//               <SettingsIcon />
//             </Options>
//             <Options>
//               <p>Logout</p>
//               <LogoutIcon />
//             </Options>
//           </Menu>
//         </ClickAwayListener>
//       )}
//     </Container>
//   );
// };

// export default Navbar;
