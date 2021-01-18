import React from "react";
import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import FlashOnIcon from "@material-ui/icons/FlashOn";
const CoinsContainer = styled.div`
  //   width: 90px;
  //   min-height: 100px;

  min-width: 70px;
  margin: 2px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MediumText = styled.p`
  color: grey;
  font-size: 14px;
  font-weight: 800;
  margin-bottom: 1px;
`;
const Container = styled.div`
  //   height: 100px;
  //   width: 100%;
  display: flex;
  //   flex-direction: row;
  min-width: 100%;
  min-height: 100px;
  overflow-x: auto;

  background-color: white;
`;
const CircleItem = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background-color: ${({ Color }) => Color || "tomato"};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinsCard = (props) => {
  const { Icon, Color, Name } = props;
  return (
    <CoinsContainer>
      <CircleItem Color={Color}>
        <Icon fontSize="large" style={{ color: "white" }} />
      </CircleItem>
      <MediumText>{Name}</MediumText>
    </CoinsContainer>
  );
};

const CoinsDeals = () => {
  return (
    <Container>
      <CoinsCard Icon={StarIcon} Color="orange" Name="Coins" />
      <CoinsCard Icon={CardGiftcardIcon} Color="blue" Name="Freebies" />
      <CoinsCard Icon={StarIcon} Color="yellow" Name="Splash It" />
      <CoinsCard Icon={CardGiftcardIcon} Color="purple" Name="Coupons" />
      <CoinsCard Icon={StarIcon} Color="orange" Name="New Arrivals" />
      <CoinsCard Icon={FlashOnIcon} Color="green" Name="Flash Deals" />
      <CoinsCard Icon={StarIcon} Color="yellow" Name="Splash It" />
      <CoinsCard Icon={CardGiftcardIcon} Color="purple" Name="Coupons" />
      <CoinsCard Icon={StarIcon} Color="orange" Name="New Arrivals" />
      <CoinsCard Icon={FlashOnIcon} Color="green" Name="Flash Deals" />
    </Container>
  );
};

export default CoinsDeals;
