import React, { useState } from "react";
import { IconRenderer as Icon } from "./../utils/IconRenderer.js";
import Timer from "../Timer.js";
import ProfileComp from "../UI/ProfileComp.js";
import AuthorCards from "../AuthorCards.js";
import ModalBid from "../UI/modals/ModalBid.js";
import { useNavigate } from "react-router";

const ArtworkPage = () => {
  const [modal, setModal] = useState(false);
  const navigation = useNavigate();

  return (
    <div className="artWorkPage">
      <div className="artwork concrete-slide container">
        <img
          src={require("../../assets/img/artWork/artWork.png")}
          alt="artwork"
          className="artwork__img"
        />
        <div className="artwork__descr-wr">
          <div className="artwork__descr_1">
            <p className="artwork__descr_text">Current Bid:</p>
            <div className="artwork__descr_1_sub-descr">
              <Icon id={"tongue"} className="tongue artwork-tongue"></Icon>
              <p className="artwork__descr_price_num">1.5M</p>
              <p className="artwork__descr_price">(1308.54$)</p>
            </div>
          </div>
          <div className="artwork__descr_2">
            <p className="artwork__descr_text">Auction ending in:</p>
            <Timer date={"May 22 2023"}></Timer>
          </div>
          <div className="artwork__descr_3">
            <button className="common-btn artwork__btn" onClick={() => setModal(true)}>
              Place a bid
            </button>
          </div>
        </div>
      </div>
      <div className="art-descr container">
        <div>
          <ProfileComp></ProfileComp>
          <p
            style={{ cursor: "pointer" }}
            className="art__title"
            onClick={() => navigation("../creator")}>
            WFH - art name
          </p>
          <div className="art__copy">
            <p className="art__copy_text">Сopy: </p>
            <p className="art__copy_num">2 of 10</p>
          </div>
          <div className="art__descr-wr">
            <p className="art__descr_text">
              <span className="art__descr_f-word">Description:</span>
              The iconic meme that became a viral Internet sensation and an indispensable part of
              the gachimuchi music genre. This was taken when I was very young and in my full
              "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube,
              and Bilibili (B 站). The iconic meme that became a viral Internet sensation and an
              indispensable part of the gachimuchi music genre. This was taken when I was very young
              and in my full "performance" attire. That part of me now "lives" on platforms like
              Twitch, YouTube, VK (ВКонта́кте), and Bilibili (B 站).
            </p>
          </div>
          <div className="authorPr__icon-wr art">
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
        <div>
          <p className="art-descr__title">Activity</p>
          <div className="art-descr__bids-wr">
            <div className="art-descr__bid-wr">
              <div className="art__bid-1">
                <img
                  src={require("../../assets/img/avatar-big.png")}
                  className="art__bid_img"
                  alt="logo"
                />
                <dir className="art__etc-wr">
                  <p className="art__etc_title">Bid placed by 0x6FC0...14A4</p>
                  <p className="art__etc_etc">May 19, 2021 at 2:27pm</p>
                </dir>
              </div>
              <div className="art__bid-2">
                <div className="artwork__descr_1_sub-descr">
                  <Icon id={"tongue"} className="tongue artwork-tongue"></Icon>
                  <p className="artwork__descr_price_num">1.5M</p>
                  <p className="artwork__descr_price">(1308.54$)</p>
                </div>
                <button className="common-btn art__bid_btn authorPr__icon">
                  <Icon id="externalLink" className="externalLink"></Icon>
                </button>
              </div>
            </div>
            <div className="art-descr__bid-wr">
              <div className="art__bid-1">
                <img
                  src={require("../../assets/img/avatar-big.png")}
                  className="art__bid_img"
                  alt="logo"
                />
                <dir className="art__etc-wr">
                  <p className="art__etc_title">Bid placed by 0x6FC0...14A4</p>
                  <p className="art__etc_etc">May 19, 2021 at 2:27pm</p>
                </dir>
              </div>
              <div className="art__bid-2">
                <div className="artwork__descr_1_sub-descr">
                  <Icon id={"tongue"} className="tongue artwork-tongue"></Icon>
                  <p className="artwork__descr_price_num">1.5M</p>
                  <p className="artwork__descr_price">(1308.54$)</p>
                </div>
                <button className="common-btn art__bid_btn authorPr__icon">
                  <Icon id="externalLink" className="externalLink"></Icon>
                </button>
              </div>
            </div>
            <div className="art-descr__bid-wr">
              <div className="art__bid-1">
                <img
                  src={require("../../assets/img/avatar-big.png")}
                  className="art__bid_img"
                  alt="logo"
                />
                <dir className="art__etc-wr">
                  <p className="art__etc_title">Bid placed by 0x6FC0...14A4</p>
                  <p className="art__etc_etc">May 19, 2021 at 2:27pm</p>
                </dir>
              </div>
              <div className="art__bid-2">
                <div className="artwork__descr_1_sub-descr">
                  <Icon id={"tongue"} className="tongue artwork-tongue"></Icon>
                  <p className="artwork__descr_price_num">1.5M</p>
                  <p className="artwork__descr_price">(1308.54$)</p>
                </div>
                <button className="common-btn art__bid_btn authorPr__icon">
                  <Icon id="externalLink" className="externalLink"></Icon>
                </button>
              </div>
            </div>
            <div className="art-descr__bid-wr">
              <div className="art__bid-1">
                <img
                  src={require("../../assets/img/avatar-big.png")}
                  className="art__bid_img"
                  alt="logo"
                />
                <dir className="art__etc-wr">
                  <p className="art__etc_title">Bid placed by 0x6FC0...14A4</p>
                  <p className="art__etc_etc">May 19, 2021 at 2:27pm</p>
                </dir>
              </div>
              <div className="art__bid-2">
                <div className="artwork__descr_1_sub-descr">
                  <Icon id={"tongue"} className="tongue artwork-tongue"></Icon>
                  <p className="artwork__descr_price_num">1.5M</p>
                  <p className="artwork__descr_price">(1308.54$)</p>
                </div>
                <button className="common-btn art__bid_btn authorPr__icon">
                  <Icon id="externalLink" className="externalLink"></Icon>
                </button>
              </div>
            </div>
            <div className="art-descr__bid-wr">
              <div className="art__bid-1">
                <img
                  src={require("../../assets/img/avatar-big.png")}
                  className="art__bid_img"
                  alt="logo"
                />
                <dir className="art__etc-wr">
                  <p className="art__etc_title">Bid placed by 0x6FC0...14A4</p>
                  <p className="art__etc_etc">May 19, 2021 at 2:27pm</p>
                </dir>
              </div>
              <div className="art__bid-2">
                <div className="artwork__descr_1_sub-descr">
                  <Icon id={"tongue"} className="tongue artwork-tongue"></Icon>
                  <p className="artwork__descr_price_num">1.5M</p>
                  <p className="artwork__descr_price">(1308.54$)</p>
                </div>
                <button className="common-btn art__bid_btn authorPr__icon">
                  <Icon id="externalLink" className="externalLink"></Icon>
                </button>
              </div>
            </div>
            <div className="art-descr__bid-wr">
              <div className="art__bid-1">
                <img
                  src={require("../../assets/img/avatar-big.png")}
                  className="art__bid_img"
                  alt="logo"
                />
                <dir className="art__etc-wr">
                  <p className="art__etc_title">Bid placed by 0x6FC0...14A4</p>
                  <p className="art__etc_etc">May 19, 2021 at 2:27pm</p>
                </dir>
              </div>
              <div className="art__bid-2">
                <div className="artwork__descr_1_sub-descr">
                  <Icon id={"tongue"} className="tongue artwork-tongue"></Icon>
                  <p className="artwork__descr_price_num">1.5M</p>
                  <p className="artwork__descr_price">(1308.54$)</p>
                </div>
                <button className="common-btn art__bid_btn authorPr__icon">
                  <Icon id="externalLink" className="externalLink"></Icon>
                </button>
              </div>
            </div>
            <div className="art-descr__bid-wr">
              <div className="art__bid-1">
                <img
                  src={require("../../assets/img/avatar-big.png")}
                  className="art__bid_img"
                  alt="logo"
                />
                <dir className="art__etc-wr">
                  <p className="art__etc_title">Bid placed by 0x6FC0...14A4</p>
                  <p className="art__etc_etc">May 19, 2021 at 2:27pm</p>
                </dir>
              </div>
              <div className="art__bid-2">
                <div className="artwork__descr_1_sub-descr">
                  <Icon id={"tongue"} className="tongue artwork-tongue"></Icon>
                  <p className="artwork__descr_price_num">1.5M</p>
                  <p className="artwork__descr_price">(1308.54$)</p>
                </div>
                <button className="common-btn art__bid_btn authorPr__icon">
                  <Icon id="externalLink" className="externalLink"></Icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="art__authors container">
        <p className="art__authors_title">Feature works</p>
        <AuthorCards></AuthorCards>
      </div>
      <ModalBid modal={modal} setModal={setModal}></ModalBid>
    </div>
  );
};

export default ArtworkPage;
