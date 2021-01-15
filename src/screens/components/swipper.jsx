import React from "react";
import styled from "styled-components";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// // Import Swiper styles
// import "swiper/swiper.scss";
// // import "components/pagination/pagination.scss";
import SwiperCore, {
  Navigation,
  Pagination,
  // Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Slide } from "@material-ui/core";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

const Div = styled.div`
  background-color: grey;
  height: 500px;

  @media (max-width: 768px) {
    height: 310px;
  }
`;

const slideSWiper = {
  width: "100%",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "#Ffff",
  display: "flex",

  justifyContent: "center",
};

const Swipper = () => {
  return (
    <Div>
      <Swiper
        autoplay={true}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{ height: "100%" }}
      >
        <SwiperSlide style={slideSWiper}>
          <img
            src="./iphone12.jpg"
            style={{
              height: "100%",
            }}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide style={slideSWiper}>
          <img
            src="./samsung.jpg"
            style={{
              height: "100%",
            }}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide style={slideSWiper}>
          <img
            src="./fridge.jpg"
            style={{
              height: "100%",
            }}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide style={slideSWiper}>
          <img
            src="./hp.jpg"
            style={{
              height: "100%",
            }}
            alt="img"
          />
        </SwiperSlide>
      </Swiper>
    </Div>
  );
};

export default Swipper;
