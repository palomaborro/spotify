import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Copyright";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Button from "../../components/button/default";
import WhiteLogoIcon from "../../images/white-logo";
import {
  MainContainer,
  NavbarContainer,
  NavLinks,
  Container,
  Wrapper,
  Footer,
  FooterFirstElement,
  FooterFirstElementLinks,
  FooterHeading,
  FooterLinks,
  FooterIcons,
  FooterIcon,
  Copyright,
  FooterLinksContainer,
} from "./main.styled";
import "./main-styles.scss";

const navLinks = [
  { name: "Premium", link: "#" },
  { name: "Support", link: "#" },
  { name: "Download", link: "#" },
  { name: "Sign up", link: "/sign-up" },
  { name: "Log in", link: "/login" },
];

const companyLInks = ["About", "Jobs", "For the record"];

const communitiesLinks = [
  "For Artists",
  "Developers",
  "Advertising",
  "Investors",
  "Vendors",
];

const usefulLInks = ["Support", "Web Player", "Free Mobile App"];

const footerIcons = [<InstagramIcon />, <TwitterIcon />, <FacebookIcon />];

const Main = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <MainContainer>
      <NavbarContainer>
        <Link to="/" className="nav-logo">
          <WhiteLogoIcon width={150} />
        </Link>
        <NavLinks isMenuOpen={isMenuOpen}>
          {navLinks.map((link, index) => (
            <Link key={index} to={link.link} className="links">
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
      <Container>
        <Wrapper>
          <h1>Listening is everything</h1>
          <p>Millions of songs and podcasts. No credit card needed.</p>
          <Link to="/signup">
            <Button
              label="GET SPOTIFY FREE"
              style={{ color: "#2941ab", width: "18rem", fontSize: "1.4rem" }}
            />
          </Link>
        </Wrapper>
      </Container>
      <Footer>
        <FooterFirstElement>
          <Link to="/" className="footer-logo">
            <WhiteLogoIcon width={150} />
          </Link>
          <FooterLinksContainer>
            <FooterFirstElementLinks>
              <FooterHeading>Company</FooterHeading>
              {companyLInks.map((link, index) => (
                <FooterLinks key={index}>{link}</FooterLinks>
              ))}
            </FooterFirstElementLinks>
            <FooterFirstElementLinks>
              <FooterHeading>Communities</FooterHeading>
              {communitiesLinks.map((link, index) => (
                <FooterLinks key={index}>{link}</FooterLinks>
              ))}
            </FooterFirstElementLinks>
            <FooterFirstElementLinks>
              <FooterHeading>Useful links</FooterHeading>
              {usefulLInks.map((link, index) => (
                <FooterLinks key={index}>{link}</FooterLinks>
              ))}
            </FooterFirstElementLinks>
          </FooterLinksContainer>
          <FooterIcons>
            {footerIcons.map((icon, index) => (
              <FooterIcon key={index}>{icon}</FooterIcon>
            ))}
          </FooterIcons>
        </FooterFirstElement>
        <Copyright>
          <CopyrightIcon />
          <span>2021 Spotify</span>
        </Copyright>
      </Footer>
    </MainContainer>
  );
};

export default Main;
