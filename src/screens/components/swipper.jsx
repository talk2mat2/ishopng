import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
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
  // background-color: white;
  height: 400px;
  width: 100%;

  background-color: white;
  padding: 10px;

  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 180px;
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

const Loader = styled.div`
  width: 30px;
  margin: 200px auto;
  @media (max-width: 768px) {
    margin: 100px auto;
  }
`;

const Swipper = () => {
  const products = useSelector((state) => state.products);
  const [HeaderSwiper, setHeaderSwiper] = useState([]);

  const getHeaderswiperItems = (products) => {
    let temp = [];
    products.length &&
      products.map((items) =>
        items.categories.map(async (category) =>
          category.name === "HeaderSwiper" ? temp.push(items) : null
        )
      );
    setHeaderSwiper(temp);
  };

  // name === "HeaderSwiper"
  // ? console.log(items)
  // : console.log("no such items")
  // items.categories.map(category=>category.name="HeaderSwiper"?console.log(items):nulls)));
  const ListSlides = () => {
    return HeaderSwiper.map((items) => (
      <SwiperSlide style={slideSWiper}>
        <img
          src={items["media"]["source"]}
          style={{
            height: "100%",
          }}
          alt="img"
        />
      </SwiperSlide>
    ));
  };

  useEffect(() => {
    getHeaderswiperItems(products);
    console.log("how far");
  }, [products]);

  return (
    <Div>
      {products.length ? (
        <Swiper
          autoplay={true}
          loop={true}
          spaceBetween={100}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => {}}
          onSlideChange={() => {}}
          style={{ height: "100%" }}
        >
          {ListSlides()}
          <SwiperSlide style={slideSWiper}>
            <img
              src="./fridge.jpg"
              style={{
                height: "100%",
              }}
              alt="img"
            />
          </SwiperSlide>
        </Swiper>
      ) : (
        <Loader>
          <CircularProgress size={20} color="secondary" />
        </Loader>
      )}
    </Div>
  );
};

export default Swipper;
