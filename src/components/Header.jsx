import { AccessTimeFilledOutlined, Help } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      {/* #3f0f40  #421f44*/}
      <div className="header__left">
        <Avatar src="" alt="mj" className="header__avatar"/>
        <AccessTimeFilledOutlined className="header__icon"/>
      </div>
      <div className="header__center">
        <SearchIcon className="header__icon"/>
        <input type="text" className="header__input" placeholder="Search" />
      </div>
      <div className="header__right">
        <Help className="header__icon"/>
      </div>
    </div>
  );
};

export default Header;
