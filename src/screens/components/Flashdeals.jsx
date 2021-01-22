import React from "react";
import styled from "styled-components";
import Cardsflash from "./cards.flasj";
import { useSelector } from "react-redux";

const Div = styled.div`
  width: 100%;
  min-height: 10px;
  background-color: #f9f9f3;
  margin-top: 2;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const FlashDeals = (props) => {
  const products = useSelector((state) => state.products);
  return (
    <Div>
      {products.length ? (
        <>
          <Cardsflash
            description=" see deatils"
            header="last minute to christmas deals"
            imagesrc="./shirt3.jpg"
          />
          <Cardsflash
            description=" see deatils"
            header="last minute to christmas deals"
            imagesrc="./samsung.jpg"
          />
          <Cardsflash
            description=" see deatils"
            header="last minute to christmas deals"
            imagesrc="./shirt4.jpg"
          />
          <Cardsflash
            description=" see deatils"
            header="last minute to christmas deals"
            imagesrc="./samsung.jpg"
          />
          <Cardsflash
            description=" see deatils"
            header="last minute to christmas deals"
            imagesrc="./samsung.jpg"
          />
          <Cardsflash
            description=" see deatils"
            header="last minute to christmas deals"
            imagesrc="./samsung.jpg"
          />
          <Cardsflash
            description=" see deatils"
            header="last minute to christmas deals"
            imagesrc="./samsung.jpg"
          />
        </>
      ) : null}
    </Div>
  );
};

export default FlashDeals;
