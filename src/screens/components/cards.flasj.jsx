import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 290px;
  height: 400px;
  background-color: #ffff;
  box-shadow: 2px 3px grey;
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
  cursor: pointer;
  color: #add8e6;
`;
const Cardsflash = (props) => {
  return (
    <Div>
      <H3>{props.header}</H3>
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
