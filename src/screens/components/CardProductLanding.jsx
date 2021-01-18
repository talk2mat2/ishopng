import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div`
  width: 250px;
  height: 300px;
  background-color: grey;
  cursor: pointer;
  margin: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  position: relative;

  @media (max-width: 768px) {
    // width: 200px;
    // height: 250px;
    width: 180px;
    height: 220px;
  }
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
  font-size: 14px;
  margin-bottom: 0.3px;
  font-weight: 600;
`;

export const CardProductLanding = (props) => {
  const { onClick } = props;
  return (
    <Div onClick={onClick}>
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

export default CardProductLanding;
