import React from "react";
import { IconRenderer as Icon } from "./utils/IconRenderer";
import ProfileComp from "./UI/ProfileComp";
import { useNavigate } from "react-router";

const AutorPreview = () => {
  const navigation = useNavigate();

  return (
    <div className="authorPr container">
      <div className="authorPrDescr">
        <ProfileComp></ProfileComp>
        <p className="authorPr__title">WFH - art name</p>
        <p className="authorPr__descr">
          <span>Description:</span>
          The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).
        </p>
        <div className="authorPr__etc-wr">
          <div className="header__user-info_sub_bal-wr ">
            <p className="header__user-info_sub_bal-text">Sold for:</p>
            <Icon id={"tongue"} className="tongue"></Icon>
            <p className="header__user-info_sub_bal-num">1,5M</p>
          </div>
          <button className="authorPr__btn common-btn" onClick={() => navigation("artwork")}>
            View
          </button>
          <button className="authorPr__icon">
            <Icon id="externalLink" className="externalLink"></Icon>
          </button>
          <button className="authorPr__icon">
            <Icon id="shareIcon" className="shareIcon"></Icon>
          </button>
          <button className="authorPr__icon">
            <Icon id="etcIcon" className="etcIcon"></Icon>
          </button>
        </div>
      </div>
      <div className="authorPr__slider"></div>
    </div>
  );
};

export default AutorPreview;
