import React, { useEffect, useState } from "react";
import sprites from "../assets/sprites.svg";
import { IconRenderer as Icon } from "./utils/IconRenderer.js";
import { useNavigate } from "react-router";
import ModalsTemplate from "./UI/modals/ModalsTemplate";

const Header = ({ callback, logedIn, setArt }) => {
  const [input, setInput] = useState("");
  const [showMore, setShowMore] = useState(false);
  const navigation = useNavigate();

  const logedInFoo = () => {
    return (
      <div className="header__logedIn-wr">
        <button className="header__btn-add-art common-btn" onClick={() => setArt(true)}>
          + Add artwork
        </button>
        <div className={showMore ? "header__user-wr active" : "header__user-wr"}>
          <img
            className="header__user-_avatar"
            src={require("../assets/img/avatar.png")}
            alt="img"
          />
          <div className="header__user-info-wr">
            <p className="header__user-info_name">User Name</p>
            <div className="header__user-info_sub-wr">
              <p className="header__user-info_sub_name">@username</p>
              <div className="header__user-info_sub_bal-wr">
                <p className="header__user-info_sub_bal-text">Balance:</p>
                <Icon id={"tongue"} className="tongue"></Icon>
                <p className="header__user-info_sub_bal-num">1,5M</p>
              </div>
            </div>
          </div>
          <button
            className={"header__logedIn_show-more-btn"}
            onClick={() => setShowMore(!showMore)}>
            <Icon id={"showMore"} className={showMore ? "showMore active" : "showMore "}></Icon>
          </button>

          <div className="header__user-more-wr">
            <p className="header__user-more_hash">Address: 0c0xcx1cx606g4516x51g1...</p>

            <ul className="header__user-more-list">
              <li className="header__user-more_link">My profile</li>
              <li className="header__user-more_link">Balance settings</li>
              <li className="header__user-more_link header_user-more_link_exit">Log out</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="header">
      <Icon id={"logo"} className="logo" onClick={() => navigation("")}></Icon>
      <div className="header__input-wr">
        <Icon id={"icon-search"} className="icon-search"></Icon>
        <input
          type="text"
          placeholder="Search for ..."
          className="header__input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {logedIn ? (
        logedInFoo()
      ) : (
        <button className="header__btn common-btn" onClick={() => callback(true)}>
          Connect wallet
        </button>
      )}
    </div>
  );
};

export default Header;
