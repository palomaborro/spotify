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
