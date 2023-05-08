import React, { useState } from "react";
import ProfileComp from "../UI/ProfileComp";
import { IconRenderer as Icon } from "../utils/IconRenderer";
import AuthorCards from "../AuthorCards";
import ModalsTemplate from "../UI/modals/ModalsTemplate";
import Input from "../UI/Input";
import Timer from "../Timer";

const CreatorPage = ({ logedIn, setLogedIn }) => {
  const [followForm, setFollowForm] = useState(false);
  const [btn, setBtn] = useState(true);
  const [edit, setEdit] = useState(true);
  const [editTime, setEditTime] = useState(false);
  const FollowBody = () => {
    return (
      <div className="follow__items">
        <div className="follow__item">
          <ProfileComp></ProfileComp>
          <button
            className={btn ? "common-btn follow__btn " : "active common-btn follow__btn "}
            onClick={(e) => {
              setBtn(!btn);
            }}>
            {btn ? "Follow" : "Unfollow"}
          </button>
        </div>
        <div className="follow__item">
          <ProfileComp></ProfileComp>
          <button
            className={btn ? "common-btn follow__btn " : "active common-btn follow__btn "}
            onClick={(e) => {
              setBtn(!btn);
            }}>
            {btn ? "Follow" : "Unfollow"}
          </button>
        </div>
        <div className="follow__item">
          <ProfileComp></ProfileComp>
          <button
            className={btn ? "common-btn follow__btn " : "active common-btn follow__btn "}
            onClick={(e) => {
              setBtn(!btn);
            }}>
            {btn ? "Follow" : "Unfollow"}
          </button>
        </div>
        <div className="follow__item">
          <ProfileComp></ProfileComp>
          <button
            className={btn ? "common-btn follow__btn " : "active common-btn follow__btn "}
            onClick={(e) => {
              setBtn(!btn);
            }}>
            {btn ? "Follow" : "Unfollow"}
          </button>
        </div>
        <div className="follow__item">
          <ProfileComp></ProfileComp>
          <button
            className={btn ? "common-btn follow__btn " : "active common-btn follow__btn "}
            onClick={(e) => {
              setBtn(!btn);
            }}>
            {btn ? "Follow" : "Unfollow"}
          </button>
        </div>
        <div className="follow__item">
          <ProfileComp></ProfileComp>
          <button
            className={btn ? "common-btn follow__btn " : "active common-btn follow__btn "}
            onClick={(e) => {
              setBtn(!btn);
            }}>
            {btn ? "Follow" : "Unfollow"}
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
        <AuthorCards editTime={setEditTime} logedIn={logedIn} setLogedIn={setLogedIn}></AuthorCards>
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
      <ModalsTemplate
        className={"edit"}
        setVisible={setEdit}
        visible={edit}
        titleBlock={<p className="edit__title">Edit your Profile</p>}>
        <div className="edit__top-wr">
          <div className="edit__input-wr">
            <p className="edit__input_text">Name</p>
            <Input className={"edit__input"} placeholer={""}></Input>
          </div>
          <div className="edit__input-wr edit__input-wr_right">
            <p className="edit__input_text">Username</p>
            <div className="edit__input_unique">
              <span>@</span>
              <Input className={"edit__input"} placeholer={""}></Input>
            </div>
          </div>
          <div className="edit__input-wr">
            <p className="edit__input_text">Email</p>
            <Input className={"edit__input"} placeholer={""}></Input>
          </div>
          <div className="edit__input-wr-descr">
            <p className="edit__input_descr">
              Add your email address to receive notifications about your activity on Foundation.
              This will not be shown on your profile.
            </p>
          </div>
          <div className="edit__input-wr edit__input-wr-big">
            <p className="edit__input_text">BIO</p>
            <Input className={"edit__input"} placeholer={""}></Input>
          </div>
        </div>
        <div className="edit__center-wr">
          <p className="edit__center-title">Profile image</p>
          <div className="edit__profile">
            {/* <img src="" alt="" className="edit__profile_img" /> */}
          </div>
        </div>
        <div className="edit__bottom-wr">
          <p className="edit__bottom_title">Contacts</p>
          <div className="edit__bottom_item-wr">
            <div className="creator__services-wr">
              <div className="creator__service-wr">
                <Icon id={"twitch"} className="socials twitch"></Icon>
                <p className="creator__social-text">Twitch</p>
                <Input className={"edit__input"} placeholer={""}></Input>
              </div>
              <div className="creator__service-wr">
                <Icon id={"inst"} className="socials inst"></Icon>
                <p className="creator__social-text">Instagram</p>
                <Input className={"edit__input"} placeholer={""}></Input>
              </div>
              <div className="creator__service-wr">
                <Icon id={"twitter"} className="socials witter"></Icon>
                <p className="creator__social-text">Twitter</p>
                <Input className={"edit__input"} placeholer={""}></Input>
              </div>
              <div className="creator__service-wr">
                <Icon id={"onlyfans"} className="socials onlyfans"></Icon>
                <p className="creator__social-text">Onlyfans</p>
                <Input className={"edit__input"} placeholer={""}></Input>
              </div>
            </div>
          </div>
          <button className="common-btn edit__bottom_btn">Save changes</button>
        </div>
      </ModalsTemplate>
      <ModalsTemplate
        className={"changeTime"}
        titleBlock={<p className="changeTime__title">Changing ending time</p>}
        visible={editTime}
        setVisible={setEditTime}>
        <p className="changeTime__text">Selling will end</p>
        <div className="changeTime__body">
          <Input className={"changeTime__input changeTime__input_1"} placeholer={"1221"}></Input>
          <Input className={"changeTime__input changeTime__input_2"} placeholer={"2332"}></Input>
          <Timer date={"May 04 2023"}></Timer>
          <p className="changeTimer__del">x delete file</p>
        </div>
        <button className="common-btn changeTimer__btn">Change</button>
      </ModalsTemplate>
    </div>
  );
};

export default CreatorPage;
