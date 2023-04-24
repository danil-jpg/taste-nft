import React from "react";
import header from "../assets/styles/_header.scss";
import sprites from "../assets/sprites.svg";
import { IconRenderer as Icon } from "./UI/IconRenderer.js";

const Header = () => {
  return (
    <header className="header">
      <Icon id={"logo"} className="logo"></Icon>
      <div className="header__input-wr">
        <Icon id={"search-icon"} className="search-icon"></Icon>
        <input type="text" placeholder="Search for ..." className="header__input" />
      </div>
      <button className="header__btn common-btn">Connect wallet</button>
    </header>
  );
};

export default Header;
