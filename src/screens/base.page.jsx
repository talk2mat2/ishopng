import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SweetButtons from "./components/SweetButtons";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import MoreToLove from "./components/MoreToLove";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { FETCH_CART_SUCCESS } from "../redux/action";
import { commerce } from "../libs/commerce";
import { useLocation } from "react-router-dom";

import WithSpinner from "./components/withSpinner";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import CardProductLanding from "./components/CardProductLanding";

const Container = styled.div`
  min-height: 80vh;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1px;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
`;

const Header = styled.div`
  height: 100px;
  width: 95vw;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 95vw;
  }
}
`;
const PaymentChanels = styled.div`
  height: 180px;
  width: 800px;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 95vw;
  }
`;
const ContentSection = styled.div`
  min-height: 80vh;
  width: 98%;
  border-radius: 10px;
  // background-color: white;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding-top: 30px;
`;
const Summery = styled.div`
  height: 300px;
  width: 400px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 95vw;
  }
`;
const CartSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    margin-right: 20px;
  }
`;
const HeaderText = styled.h1`
  color: grey;
  font-size: 19px;
`;
const HeaderText2 = styled.h2`
  color: grey;
  font-size: 16px;
`;
const MediumText = styled.p`
  color: grey;
  font-size: 13px;
  margin-bottom: 1px;
`;
const ProductContainer = styled.div`
  min-height: 150px;
  width: 800px;
  border-radius: 10px;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  display: flex;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    width: 95vw;
  }
`;
const Productsection = styled.div`
  min-height: 80%;
  width: 99%;
  display: flex;
  flex-direction: row;
  padding: 1px;
  align-items: center;
  justify-content: space-around;
`;
const SummeryItems = styled.div`
  min-height: 50%;
  width: 70%;
  display: flex;
  flex-direction: row;
  padding: 1px;

  justify-content: space-between;
`;
const Cards = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  flex-wrap: wrap;
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

const BasePage = (props) => {
  const products = useSelector((state) => state.products["products"]);
  const [cartState, setCartState] = useState([]);
  const [DealsItems, setDealsItems] = useState([]);
  const cart = useSelector((state) => state.cart);
  const Dispatch = useDispatch();
  const [open, setOpen] = useState({ status: false, message: "" });
  const location = useLocation();
  const history = useHistory();

  const { state } = location;

  const product_deals = [];
  const Cardimg = {
    height: "50px",
  };

  const handlesetOpen = (status, message) => {
    setOpen({ ...open, status, message });
  };

  const getDealsItems = (products) => {
    let temp = [];
    products.length &&
      state.deal_id &&
      products.map((items) =>
        items.categories.map(async (category) =>
          category.name === state.deal_id ? temp.push(items) : null
        )
      );
    setDealsItems(temp);
  };

  useEffect(() => {
    console.log(state);
    getDealsItems(products);
  }, []);
  const handleClick = (items) => {
    history.push({
      pathname: "/item_Detail",
      state: items,
      search: `?query=${items.id}`,
    });
  };
  const ListItems = () => {
    return DealsItems ? (
      DealsItems.map((items) => (
        <CardProductLanding
          key={items.id}
          onClick={handleClick.bind(this, items)}
          imagesrc={items["media"]["source"]}
          description={items.name}
          price={items["price"]["formatted_with_symbol"]}
        />
      ))
    ) : (
      <ProductContainer>jjjjj</ProductContainer>
    );
  };

  return (
    <Container>
      <ContentSection>
        <Header>
          <HeaderText>{state && state.dealname}</HeaderText>
        </Header>
        <ItemsContainer>{ListItems()}</ItemsContainer>

        <MoreToLove title="Many More To Explore" Description="" />
      </ContentSection>
    </Container>
  );
};

export default BasePage;
