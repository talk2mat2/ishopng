import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 290px;
  height: 400px;
  background-color: white;
  // box-shadow: 2px 3px grey;
  margin: 9px;
  display: flex;
  padding: 4px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  position: relative;
  @media (max-width: 768px) {
    width: 150px;
    height: 220px;
    margin: 6px;
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
const HeaderText2 = styled.h1`
  color: grey;
  font-size: 15px;
`;
const ImgDiv = styled.div`
  height: 90%;
  width: 90%;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const P = styled.p`
  color: grey;
  cursor: pointer;
  color: #add8e6;
`;
const Cardsflash = (props) => {
  return (
    <Div>
      <HeaderText2>{props.header}</HeaderText2>
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
    </Div>
  );
};

export default Cardsflash;
