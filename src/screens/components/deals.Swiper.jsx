import React from "react";
import styled from "styled-components";
import CardProductLanding from "./CardProductLanding";
import { useHistory } from "react-router-dom";
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

// const Div = styled.div`
//   background-color: #fffaf0;
//   height: 310px;
//   padding: 2px;
//   margin-top: 15px;
// `;

// const slideSWiper = {
//   width: "100%",
//   alignItems: "center",
//   textAlign: "center",
//   backgroundColor: "#Ffff",
// };
const Div = styled.div`
  min-height: 250px;
  width: 100%;
  border-radius: 10px;
  background-color: #ffff;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const slideSWiper = {
  width: "100%",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "#Ffff",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
};

const TopText = styled.div`
  min-height: 18%;
  display: flex;
`;

const DealsSwiper = (props) => {
  const { dealname, dealDescription } = props;
  const history = useHistory();
  const handleClick = () => {
    history.push("/item_Detail");
  };
  return (
    <Div>
      <TopText>
        <p style={{ color: "black" }}>
          {dealname}- {dealDescription}
        </p>
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
          <CardProductLanding
            onClick={handleClick.bind(this, "")}
            imagesrc="/shirt2.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
          <CardProductLanding
            imagesrc="/shirt3.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
          <CardProductLanding
            imagesrc="/shirt3.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
          <CardProductLanding
            imagesrc="/shirt4.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
          <CardProductLanding
            imagesrc="/shirt4.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
        </SwiperSlide>
        <SwiperSlide style={slideSWiper}>
          <CardProductLanding
            imagesrc="/shirt3.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
          <CardProductLanding
            imagesrc="/shirt4.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
          <CardProductLanding
            imagesrc="/shirt4.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
          <CardProductLanding
            imagesrc="/shirt3.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
        </SwiperSlide>
        <SwiperSlide style={slideSWiper}>
          <CardProductLanding
            imagesrc="/shirt4.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
          <CardProductLanding
            imagesrc="/shirt3.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
          <CardProductLanding
            imagesrc="/shirt3.jpg"
            description="mens heavy wear"
          />
          <CardProductLanding imagesrc="/shirt4.jpg" price="=N=20.90" />
        </SwiperSlide>
        <SwiperSlide style={slideSWiper}>
          <CardProductLanding
            imagesrc="/shirt3.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
          <CardProductLanding
            imagesrc="/shirt4.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
        </SwiperSlide>
      </Swiper>
    </Div>
  );
};

export default DealsSwiper;
