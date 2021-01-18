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
import CardProduct from "./CardProduct";
// import { Slide } from "@material-ui/core";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

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

const HeaderText2 = styled.h2`
  color: grey;
  font-size: 16px;
`;
// const MediumText = styled.p`
//   color: grey;
//   font-size: 13px;
//   margin-bottom: 1px;
// `;
// const CardProduct = () => {
//   return (
//     <img
//       src="./iphone12.jpg"
//       style={{
//         height: "100%",
//       }}
//       alt="img"
//     />
//   );
// };
const MoreToLove = () => {
  return (
    <Div>
      <HeaderText2>
        Discover More - People Also Bought Some Of These
      </HeaderText2>

      <Swiper
        loop={true}
        autoplay={true}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {}}
        onSlideChange={() => {}}
        style={{ height: "90%" }}
      >
        <SwiperSlide style={slideSWiper}>
          <CardProduct
            imagesrc="/shirt2.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
          <CardProduct
            imagesrc="/shirt3.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
          <CardProduct
            imagesrc="/shirt3.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
          <CardProduct
            imagesrc="/shirt4.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
          <CardProduct
            imagesrc="/shirt4.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
        </SwiperSlide>
        <SwiperSlide style={slideSWiper}>
          <CardProduct
            imagesrc="/shirt3.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
          <CardProduct
            imagesrc="/shirt4.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
          <CardProduct
            imagesrc="/shirt4.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
          <CardProduct
            imagesrc="/shirt3.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
        </SwiperSlide>
        <SwiperSlide style={slideSWiper}>
          <CardProduct
            imagesrc="/shirt4.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
          <CardProduct
            imagesrc="/shirt3.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
          <CardProduct imagesrc="/shirt3.jpg" description="mens heavy wear" />
          <CardProduct imagesrc="/shirt4.jpg" price="=N=20.90" />
        </SwiperSlide>
        <SwiperSlide style={slideSWiper}>
          <CardProduct
            imagesrc="/shirt3.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
          <CardProduct
            imagesrc="/shirt4.jpg"
            description="mens heavy wear"
            price="=N=20.90"
          />
        </SwiperSlide>
      </Swiper>
    </Div>
  );
};

export default MoreToLove;
