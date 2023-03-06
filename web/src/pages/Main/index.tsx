import React from "react";

import { Link } from "react-router-dom";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Copyright";

import Button from "../../components/button";
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
  FooterSecondElement,
  FooterSecondElementLinks,
  Copyright,
} from "./main.styled";
import "./main-styles.scss";

const navLinks = [
  { name: "Premium", link: "#" },
  { name: "Support", link: "#" },
  { name: "Download", link: "#" },
  { name: "Sign up", link: "/signup" },
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

const footerLinks = [
  "legal",
  "privacy center",
  "privacy policy",
  "Cookies",
  "About ads",
  "Additional CA Privacy Disclosures",
];

const footerIcons = [<InstagramIcon />, <TwitterIcon />, <FacebookIcon />];

const Main = () => {
  return (
    <MainContainer>
      <NavbarContainer>
        <Link to="/" className="nav-logo">
          <WhiteLogoIcon />
        </Link>
        <NavLinks>
          {navLinks.map((link, index) => (
            <Link key={index} to={link.link} className="links">
              {link.name}
            </Link>
          ))}
        </NavLinks>
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
          <Link to="/" className="footer_logo">
            <WhiteLogoIcon />
          </Link>
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
          <FooterIcons>
            {footerIcons.map((icon, index) => (
              <FooterIcon key={index}>{icon}</FooterIcon>
            ))}
          </FooterIcons>
        </FooterFirstElement>
        <FooterSecondElement>
          <FooterSecondElementLinks>
            {footerLinks.map((link, index) => (
              <FooterLinks key={index}>{link}</FooterLinks>
            ))}
          </FooterSecondElementLinks>
          <Copyright>
            <CopyrightIcon />
            <span>2021 Spotify</span>
          </Copyright>
        </FooterSecondElement>
      </Footer>
    </MainContainer>
  );
};

export default Main;
