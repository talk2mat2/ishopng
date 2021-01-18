import React from "react";
import styled from "styled-components";
import Cardsflash from "./cards.flasj";

const Div = styled.div`
  width: 100%;
  min-height: 400px;
  background-color: tomato;
  margin-top: 2;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const FlashDeals = () => {
  return (
    <Div>
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
    </Div>
  );
};

export default FlashDeals;
