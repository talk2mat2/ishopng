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
  Scrollbar,
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

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Div = styled.div`
  background-color: #fffaf0;
  height: 310px;
  padding: 2px;
  margin-top: 15px;
`;

const slideSWiper = {
  width: "100%",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "#Ffff",
};

const TopText = styled.div`
  min-height: 18%;
  display: flex;
`;

const DealsSwiper = () => {
  return (
    <Div>
      <TopText>
        <p style={{ color: "black" }}>FlashDeals- Discover more this summer</p>
        <p
          style={{
            marginLeft: "8px",
            fontSize: "small",
            color: "grey",
            cursor: "pointer",
          }}
        >
          see details
        </p>
      </TopText>
      <Swiper
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{ height: "80%" }}
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

export default DealsSwiper;
