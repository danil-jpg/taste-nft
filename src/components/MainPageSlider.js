import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";

const MainPageSlider = () => {
  register();
  //   const params = {
  //     // array with CSS styles
  //     injectStyles: [
  //       `
  // 			.swiper-pagination.swiper-pagination-progressbar.swiper-pagination-horizontal {
  // 			  margin-top: 260px;
  // 			  height: 5px;
  // 			  background-color: transparent;
  // 			  border: none;
  // 			  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  // 			}
  // 			.swiper-pagination-progressbar-fill{
  // 			  background-color: rgba(255, 255, 255, 0.5) !important;
  // 			  border-radius: 99px;
  // 			}
  // 			swiper-slide {
  // 			  width: 245px !important;
  // 			}

  // 			`,
  //     ],
  //   };
  //   const authorSwiper = useRef("none ");

  useEffect(() => {
    //   Object.assign(authorSwiper.current, params);
    //   authorSwiper.current.initialize();
    // new Swiper(".main-swiper", {
    //   slidesPerView: 1,
    //   effect: "cards",
    //   cardsEffect: {
    //     rotate: 0,
    //   },
    // });
  }, []);

  return (
    <swiper-container
      // init="false"
      // ref={authorSwiper}
      slides-per-view="1"
      effect="cards"
      cards-effect-rotate="false"
      cards-effect-per-slide-offset="12"
      // space-between="16"
      //   pagination="bulets"

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
