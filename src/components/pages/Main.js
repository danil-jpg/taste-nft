import React, { useEffect, useRef } from "react";
import "../../assets/styles/styles.scss";
import { register } from "swiper/element/bundle";
import AuthorPreview from "../AuthorPreview";
import Selects from "../UI/Selects";
import AuthorCards from "../AuthorCards";

const Main = () => {
  register();

  const params = {
    // array with CSS styles
    injectStyles: [
      `
		.swiper-pagination.swiper-pagination-progressbar.swiper-pagination-horizontal {
		  margin-top: 260px;
		  height: 5px;
		  background-color: transparent;
		  border: none;
		  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
		}
		.swiper-pagination-progressbar-fill{
		  background-color: rgba(255, 255, 255, 0.5) !important;
		  border-radius: 99px;
		}
		swiper-slide {
		  width: 245px !important;
		}
  
		`,
    ],
  };
  const authorSwiper = useRef("none ");

  useEffect(() => {
    Object.assign(authorSwiper.current, params);
    authorSwiper.current.initialize();
  }, []);

  return (
    <div className="MainPage">
      <AuthorPreview></AuthorPreview>
      <div className="main-page__author-block container">
        <Selects
          style={{ width: "170px" }}
          className="select1"
          options={["WFH - art name1", "WFH - art name2", "WFH - art name3"]}
          defOpt="Recently added"></Selects>
        <Selects
          style={{ width: " 121px" }}
          className="select2"
          options={["WFH - art name1", "WFH - art name2", "WFH - art name3"]}
          defOpt="Auctions"></Selects>
        <AuthorCards></AuthorCards>
      </div>
      <div className="main-page__author-slider container">
        <h2 className="author-slider__title">Featured creators</h2>
        <swiper-container
          init="false"
          ref={authorSwiper}
          slides-per-view="5"
          space-between="16"
          pagination-type="progressbar"
          class="author-swiper">
          <swiper-slide>
            <div className="author-slider-wr">
              <img
                className="author-slider_img"
                src={require("../../assets/img/avatar-big.png")}
                alt="img"
              />
              <p className="author-slider_name">User Name</p>
              <p className="author-slider_nick rainbow-text">@username</p>
              <p className="author-slider_etc">24 sales on 32ETH</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="author-slider-wr">
              <img
                className="author-slider_img"
                src={require("../../assets/img/avatar-big.png")}
                alt="img"
              />
              <p className="author-slider_name">User Name</p>
              <p className="author-slider_nick rainbow-text">@username</p>
              <p className="author-slider_etc">24 sales on 32ETH</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="author-slider-wr">
              <img
                className="author-slider_img"
                src={require("../../assets/img/avatar-big.png")}
                alt="img"
              />
              <p className="author-slider_name">User Name</p>
              <p className="author-slider_nick rainbow-text">@username</p>
              <p className="author-slider_etc">24 sales on 32ETH</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="author-slider-wr">
              <img
                className="author-slider_img"
                src={require("../../assets/img/avatar-big.png")}
                alt="img"
              />
              <p className="author-slider_name">User Name</p>
              <p className="author-slider_nick rainbow-text">@username</p>
              <p className="author-slider_etc">24 sales on 32ETH</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="author-slider-wr">
              <img
                className="author-slider_img"
                src={require("../../assets/img/avatar-big.png")}
                alt="img"
              />
              <p className="author-slider_name">User Name</p>
              <p className="author-slider_nick rainbow-text">@username</p>
              <p className="author-slider_etc">24 sales on 32ETH</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="author-slider-wr">
              <img
                className="author-slider_img"
                src={require("../../assets/img/avatar-big.png")}
                alt="img"
              />
              <p className="author-slider_name">User Name</p>
              <p className="author-slider_nick rainbow-text">@username</p>
              <p className="author-slider_etc">24 sales on 32ETH</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="author-slider-wr">
              <img
                className="author-slider_img"
                src={require("../../assets/img/avatar-big.png")}
                alt="img"
              />
              <p className="author-slider_name">User Name</p>
              <p className="author-slider_nick rainbow-text">@username</p>
              <p className="author-slider_etc">24 sales on 32ETH</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="author-slider-wr">
              <img
                className="author-slider_img"
                src={require("../../assets/img/avatar-big.png")}
                alt="img"
              />
              <p className="author-slider_name">User Name</p>
              <p className="author-slider_nick rainbow-text">@username</p>
              <p className="author-slider_etc">24 sales on 32ETH</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="author-slider-wr">
              <img
                className="author-slider_img"
                src={require("../../assets/img/avatar-big.png")}
                alt="img"
              />
              <p className="author-slider_name">User Name</p>
              <p className="author-slider_nick rainbow-text">@username</p>
              <p className="author-slider_etc">24 sales on 32ETH</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="author-slider-wr">
              <img
                className="author-slider_img"
                src={require("../../assets/img/avatar-big.png")}
                alt="img"
              />
              <p className="author-slider_name">User Name</p>
              <p className="author-slider_nick rainbow-text">@username</p>
              <p className="author-slider_etc">24 sales on 32ETH</p>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  );
};

export default Main;
