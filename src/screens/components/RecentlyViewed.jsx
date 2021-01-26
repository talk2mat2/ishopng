import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CardProduct from "./CardProduct";
import { useHistory } from "react-router-dom";

const Div = styled.div`
  min-height: 300px;
  background-color: #ffffff;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  marging-top: 5px;
  marging-bottom: 5px;
  padding: 2px;
`;
const Border = styled.div`
  min-height: 200px;
  margin: 5px;
  padding: 3px;
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
const HeaderText = styled.h1`
  color: grey;
  font-size: 19px;
`;
const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  // background-color: grey;
  align-items: center;
  max-width: 100%;
  flex-wrap: wrap;

  justify-content: center;
`;

const RecentlyViewed = () => {
  const history = useHistory();
  const [viewdItems, setViewdItems] = useState([]);

  const RecentlyViewedItems = useSelector((state) => state.viewdItems);

  const handleClick = (items) => {
    history.push({
      pathname: "/item_Detail",
      state: items,
      search: `?query=${items.id}`,
    });
  };

  const ListItems = () => {
    return viewdItems.length ? (
      viewdItems.map((items) => (
        <CardProduct
          imagesrc={items["media"]["source"]}
          onClick={handleClick.bind(this, items)}
          description={items.name}
          price={items["price"]["formatted_with_symbol"]}
        />
      ))
    ) : (
      <h6>empty :} try viewing from our stores</h6>
    );
  };

  useEffect(() => {
    setViewdItems(RecentlyViewedItems);
  }, []);

  return (
    <Div>
      <Border>
        <Header>
          <HeaderText>Last 5 Recently viewed items..</HeaderText>
        </Header>
        <ItemsContainer>{ListItems()}</ItemsContainer>
      </Border>
    </Div>
  );
};

export default RecentlyViewed;
