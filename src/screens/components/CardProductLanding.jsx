import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 250px;
  height: 300px;
  background-color: white;
  cursor: pointer;
  margin: 5px;
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
  height: 50%;
  width: 90%;

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
      {props.discount && (
        <div
          style={{
            borderRadius: "20%",
            position: "absolute",
            height: "15px",
            Width: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "orange",
            top: "1px",
            left: 1,

            zIndex: 1,
          }}
        >
          <p
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "13px",
            }}
          >
            -{props.discount}%
          </p>
        </div>
      )}
      <ImgDiv>
        <img
          src={props.imagesrc}
          style={{
            height: "140px",

            borderRadius: 10,
          }}
          alt="img"
        />
      </ImgDiv>
      <P>{props.description.slice(0, 25)}...</P>
      <P>{props.price}</P>
    </Div>
  );
};

export default CardProductLanding;
