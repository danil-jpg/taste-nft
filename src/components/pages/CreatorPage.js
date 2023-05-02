import React, { useState } from "react";
import ProfileComp from "../UI/ProfileComp";
import { IconRenderer as Icon } from "../utils/IconRenderer";
import AuthorCards from "../AuthorCards";
import ModalsTemplate from "../UI/modals/ModalsTemplate";

const CreatorPage = () => {
  const [followForm, setFollowForm] = useState(true);
  const [btn, setBtn] = useState("Follow");
  const FollowBody = () => {
    return (
      <div className="follow__items">
        <div className="follow__item">
          <ProfileComp></ProfileComp>
          <button
            className="common-btn follow__btn "
            onClick={(e) => {
              e.target.classList.toggle("active");
              e.target.innerHTML = "Unfollow";
            }}>
            Follow
          </button>
        </div>
        <div className="follow__item">
          <ProfileComp></ProfileComp>
          <button
            className="common-btn follow__btn "
            onClick={(e) => {
              e.target.classList.toggle("active");
              e.target.innerHTML = "Unfollow";
            }}>
            Follow
          </button>
        </div>
        <div className="follow__item">
          <ProfileComp></ProfileComp>
          <button
            className="common-btn follow__btn "
            onClick={(e) => {
              e.target.classList.toggle("active");
              e.target.innerHTML = "Unfollow";
            }}>
            Follow
          </button>
        </div>
        <div className="follow__item">
          <ProfileComp></ProfileComp>
          <button
            className="common-btn follow__btn "
            onClick={(e) => {
              e.target.classList.toggle("active");
              e.target.innerHTML = "Unfollow";
            }}>
            Follow
          </button>
        </div>
        <div className="follow__item">
          <ProfileComp></ProfileComp>
          <button
            className="common-btn follow__btn "
            onClick={(e) => {
              e.target.classList.toggle("active");
              e.target.innerHTML = "Unfollow";
            }}>
            Follow
          </button>
        </div>
        <div className="follow__item">
          <ProfileComp></ProfileComp>
          <button
            className="common-btn follow__btn "
            onClick={(e) => {
              e.target.classList.toggle("active");
              e.target.innerHTML = "Unfollow";
            }}>
            Follow
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="creatorPage container">
      <div className="creator-descr ">
        <div className="creator-descr-top">
          <ProfileComp></ProfileComp>
          <div className="creator-descr_right-wr">
            <div className="creator-descr_nums-wr">
              <p className="creator-descr_num">234</p>
              <p className="creator-descr_foll">Followers</p>
            </div>
            <div className="creator-descr_nums">
              <p className="creator-descr_num">15</p>
              <p className="creator-descr_foll">Following</p>
            </div>
            <button
              className="common-btn creator-descr__btn"
              onClick={() => {
                setFollowForm(true);
              }}>
              Follow
            </button>
            <div className="authorPr__icon-wr art creator-descr__btns-wr">
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
        </div>
        <div className="creator-descr-bottom">
          <div className="creator__services-wr">
            <div className="creator__service-wr">
              <Icon id={"twitch"} className="socials twitch"></Icon>
              <p className="creator__social-text">Twitch</p>
            </div>
            <div className="creator__service-wr">
              <Icon id={"inst"} className="socials inst"></Icon>
              <p className="creator__social-text">Instagram</p>
            </div>
            <div className="creator__service-wr">
              <Icon id={"twitter"} className="socials witter"></Icon>
              <p className="creator__social-text">Twitter</p>
            </div>
            <div className="creator__service-wr">
              <Icon id={"onlyfans"} className="socials onlyfans"></Icon>
              <p className="creator__social-text">Onlyfans</p>
            </div>
          </div>
          <div className="creator-descr-wr">
            <p className="creator-descr__text">
              <span>Description:</span> The iconic meme that became a viral Internet sensation and
              an indispensable part of the gachimuchi music genre. This was taken when I was very
              young and in my full "performance" attire. That part of me now "lives" on platforms
              like Twitch, YouTube, and Bilibili (B 站). The iconic meme that became a viral
              Internet sensation and an indispensable part of the gachimuchi music genre. This was
              taken when I was very young and in my full "performance" attire. That part of me now
              "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).
            </p>
          </div>
        </div>
      </div>
      <div className="creator-cards container">
        <div className="creator-cards__tabs">
          <p className="creator-cards__text">Created</p>
          <p className="creator-cards__text creator-cards__text_chosen">Collected</p>
        </div>
        <AuthorCards></AuthorCards>
      </div>
      <ModalsTemplate
        className={"follow"}
        visible={followForm}
        setVisible={setFollowForm}
        titleBlock={
          <div className="follow__tabs-wr">
            <p className="follow__tab">Following</p>
            <p className="follow__tab">Followers</p>
          </div>
        }>
        <FollowBody></FollowBody>
      </ModalsTemplate>
    </div>
  );
};

export default CreatorPage;
