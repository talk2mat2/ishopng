import React from "react";
import styled from "styled-components";

const Div = styled.div`
  min-height: 400px;
  background-color: #1d2727;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  marging-top: 5px;
  marging-bottom: 5px;
`;
const List = styled.div`
  min-height: 150px;
  width: 250px;
  display: grid;

  margin: 3px;
  background-color: white;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3px;
  flex-wrap: wrap;
  justify-content: center;
`;
const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3px;
  justify-content: space-between;

  min-width: 60%;
  &p #kid {
    color: white;
  }
`;

const NiceFooter = () => {
  return (
    <Div>
      <ListContainer>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
      </ListContainer>
      <FooterContainer>
        <p style={{ color: "#FFFF" }}>all right reserved</p>
        <p style={{ color: "#FFFF" }}>Martins.c</p>
        <p style={{ color: "#FFFF" }}>Terms and Condition</p>
        <p style={{ color: "#FFFF" }}>2020 IShop.ng</p>

        <p style={{ color: "#FFFF" }}>Privacy Policy</p>
      </FooterContainer>
    </Div>
  );
};

export default NiceFooter;
