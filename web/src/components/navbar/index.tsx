import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { ClickAwayListener } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import {
  Container,
  LeftElement,
  ProfileMenu,
  Menu,
  Options,
} from "./navbar.styled";
import "./navbar.styles.scss";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const goForward = () => {
    window.history.forward();
  };

  return (
    <Container>
      <LeftElement>
        <div className="icon" onClick={() => navigate(-1)}>
          <ArrowBackIosRoundedIcon />
        </div>
        <div className="icon" onClick={goForward}>
          <ArrowForwardIosRoundedIcon />
        </div>
      </LeftElement>
      <div>
        <ProfileMenu
          style={{ backgroundColor: `${menu ? "#282828" : "#000"}` }}
          onClick={() => setMenu(!menu)}
        >
          <AccountCircleIcon />
          <p>Jahangeer</p>
          {menu ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </ProfileMenu>
      </div>
      {menu && (
        <ClickAwayListener onClickAway={() => setMenu(false)}>
          <Menu onClick={() => setMenu(false)}>
            <Link to="/me">
              <Options>
                <p>Profile</p>
                <PersonIcon />
              </Options>
            </Link>
            <Options>
              <p>Settings</p>
              <SettingsIcon />
            </Options>
            <Options>
              <p>Logout</p>
              <LogoutIcon />
            </Options>
          </Menu>
        </ClickAwayListener>
      )}
    </Container>
  );
};

export default Navbar;
