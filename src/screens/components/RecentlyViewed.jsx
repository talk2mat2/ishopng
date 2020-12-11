import React from "react";
import styled from "styled-components";

const Div = styled.div`
  height: 300px;
  background-color: #ffffff;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  marging-top: 5px;
  marging-bottom: 5px;
`;
const Border = styled.div`
  height: 200px;

  width: 90%;
  border-radius: 6px;
  position: relative;
  border: 2px solid silver;
  text-align: center;
`;

const Header = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
`;

const RecentlyViewed = () => {
  return (
    <Div>
      <Border>
        <Header>
          <p style={{ color: "black" }}>Recently viewed and reommendation</p>
        </Header>
        <h6>empty :} try viewing from our stores</h6>
      </Border>
    </Div>
  );
};

export default RecentlyViewed;
