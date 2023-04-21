import React from "react";

import { Link } from "react-router-dom";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Copyright";

import Button from "../../components/button/default";
import Navbar from "../../components/navbar/default";

import WhiteLogoIcon from "../../images/white-logo";
import {
  MainContainer,
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
  return (
    <MainContainer>
      <Navbar />
      <Container>
        <Wrapper>
          <h1>Listening is everything</h1>
          <p>Millions of songs and podcasts. No credit card needed.</p>
          <Link to="/sign-up">
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
