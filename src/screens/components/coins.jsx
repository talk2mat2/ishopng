import React from "react";
import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { useHistory } from "react-router-dom";
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
    <CoinsContainer onClick={props.onClick}>
      <CircleItem Color={Color}>
        <Icon fontSize="large" style={{ color: "white" }} />
      </CircleItem>
      <MediumText>{Name}</MediumText>
    </CoinsContainer>
  );
};

const CoinsDeals = () => {
  const history = useHistory();
  function handleClick(dealname, deal_id) {
    history.push({
      pathname: "base_page",
      state: { deal_id: deal_id.length ? deal_id : null, dealname: dealname },
    });
  }
  return (
    <Container>
      <CoinsCard
        onClick={handleClick.bind(this, "Coins")}
        Icon={StarIcon}
        Color="orange"
        Name="Coins"
      />
      <CoinsCard
        onClick={handleClick.bind(this, "Freebies")}
        Icon={CardGiftcardIcon}
        Color="blue"
        Name="Freebies"
      />
      <CoinsCard
        onClick={handleClick.bind(this, "Splash It")}
        Icon={StarIcon}
        Color="yellow"
        Name="Splash It"
      />
      <CoinsCard
        onClick={handleClick.bind(this, "Coupons")}
        Icon={CardGiftcardIcon}
        Color="purple"
        Name="Coupons"
      />
      <CoinsCard
        onClick={handleClick.bind(this, "New Arrivals", "New Arrivals")}
        Icon={StarIcon}
        Color="orange"
        Name="New Arrivals"
      />
      <CoinsCard
        onClick={handleClick.bind(this, "Flash Deals", "Flash Deals")}
        Icon={FlashOnIcon}
        Color="green"
        Name="Flash Deals"
      />
      <CoinsCard
        onClick={handleClick.bind(this, "Splash It")}
        Icon={StarIcon}
        Color="yellow"
        Name="Splash It"
      />
      <CoinsCard
        onClick={handleClick.bind(this, "Coupons")}
        Icon={CardGiftcardIcon}
        Color="purple"
        Name="Coupons"
      />
      <CoinsCard
        onClick={handleClick.bind(this, "New Arrivals", "New Arrivals")}
        Icon={StarIcon}
        Color="orange"
        Name="New Arrivals"
      />
      <CoinsCard
        onClick={handleClick.bind(this, "TopDeals", "TopDeals")}
        Icon={FlashOnIcon}
        Color="green"
        Name="Top Deals"
      />
    </Container>
  );
};

export default CoinsDeals;
