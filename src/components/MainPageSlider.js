import React, { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

const MainPageSlider = () => {
  register();
  const params = {
    // array with CSS styles
    injectStyles: [
      `
        .swiper-pagination-bullets.swiper-pagination-horizontal{
          bottom: -28px;
          display: flex;
          margin-left: -3px;
        }

        .swiper-pagination-bullet{
          width: 95px;
          height: 5px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 99px;
        }


  			`,
    ],
  };
  const authorSwiper = useRef("none");

  useEffect(() => {
    Object.assign(authorSwiper.current, params);
    authorSwiper.current.initialize();
  }, []);

  return (
    <swiper-container
      init="false"
      ref={authorSwiper}
      slides-per-view="1"
      effect="cards"
      cards-effect-rotate="false"
      cards-effect-per-slide-offset="18"
      cards-effect-slide-shadows="false"
      pagination="true"
      class="main-swiper">
      <swiper-slide>
        <img className="" src={require("../assets/img/mainPage/img1.jpg")} alt="img" />
      </swiper-slide>
      <swiper-slide>
        <img className="" src={require("../assets/img/mainPage/img2.jpg")} alt="img" />
      </swiper-slide>
      <swiper-slide>
        <img className="" src={require("../assets/img/mainPage/img3.jpg")} alt="img" />
      </swiper-slide>
      <swiper-slide>
        <img className="" src={require("../assets/img/mainPage/img4.jpg")} alt="img" />
      </swiper-slide>
    </swiper-container>
  );
};

export default MainPageSlider;
