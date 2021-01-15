import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100px;
  height: 150px;
  background-color: #ffff;

  margin: 9px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  position: relative;
`;
const H3 = styled.p`
  color: black;
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
  position: absolute;
  top: 0;
  z-index: 1;
`;
const ImgDiv = styled.div`
  height: 80%;
  width: 80%;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const P = styled.p`
  color: grey;
  font-size: 12px;
  margin-bottom: 0.3px;
`;

const CardProduct = (props) => {
  return (
    <Div>
      <ImgDiv>
        <img
          src={props.imagesrc}
          style={{
            width: "100%",
            borderRadius: 10,
          }}
          alt="img"
        />
      </ImgDiv>
      <P>{props.description}</P>
      <P>{props.price}</P>
    </Div>
  );
};

export default CardProduct;
