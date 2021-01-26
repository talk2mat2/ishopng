import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Ratings from "./components/ratings";
import SweetButtons from "./components/SweetButtons";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShopIcon from "@material-ui/icons/Shop";
import MoreToLove from "./components/MoreToLove";
import CustomersReview from "./components/CustomerRatings";
import { useHistory } from "react-router-dom";
import { commerce } from "../libs/commerce";
import { useDispatch } from "react-redux";
import { FETCH_CART_SUCCESS, ADD_RECENTVIEWD_ITEM } from "../redux/action";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import WithSpinner from "./components/withSpinner";

const Container = styled.div`
  min-height: 80vh;
  width: 100%;
  padding-top: 3px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 1px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: white;
  min-height: 400px;
  align-items: flex-start;

  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const Description = styled.div`
  width: 400px;
  padding: 4px;
  min-height: 500px;
  pading: 6px;
  background-color: white;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Discription = styled.div`
  p {
    color: grey;
  }
`;
const HeaderText = styled.h1`
  color: grey;
  font-size: 18px;
`;
const MediuText = styled.p`
  color: grey;
  font-size: 13px;
  margin-bottom: 1px;
`;
const Divider = styled.div`
  background-color: silver;
  width: 90%;
  height: 1px;
`;
const Inline = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;
const ProductAction = styled.div`
  background-color: white;
  border: 1px solid silver;
  width: 300px;
  border-radius: 9px;
  margin: 2px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: none;
  }
`;
const ProductActionMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    position: fixed;
    bottom: 1px;
    display: flex;
    height: 90px;
    flex-direction: row;
    z-index: 2;
    width: 98%;
    background-color: white;
  }
`;

const ImageDetail = styled.img`
  height: 400px;
  @media (max-width: 768px) {
    // width: 200px;
    // height: 250px;
    height: 70vw;
  } ;
`;
const ProductDetail = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState({});
  const [open, setOpen] = useState({ status: false, message: "" });

  useEffect(() => {
    console.log(props);
    history.location.state
      ? setState(history.location.state)
      : history.push("/");
    console.log(history.location.state);
    history.location.state &&
      dispatch(ADD_RECENTVIEWD_ITEM(history.location.state));
  }, [history.location.state, history]);

  const handlesetOpen = (status, message) => {
    setOpen({ ...open, status, message });
  };

  function handleAddToCart(productId, quantity) {
    props.setLoading(true);
    commerce.cart
      .add(productId, quantity)
      .then((item) => {
        console.log(item.cart);
        props.setLoading(false);
        handlesetOpen(true, "this item was added to cart");
        dispatch(FETCH_CART_SUCCESS({ cart: item.cart }));
        // this.setState({ cart: item.cart });
      })
      .catch((error) => {
        props.setLoading(false);
        console.error("There was an error adding the item to the cart", error);
      });
  }

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  return (
    <Container>
      <Snackbar
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        open={open.status}
        autoHideDuration={6000}
        onClose={() => {
          handlesetOpen(false, "");
        }}
      >
        <Alert
          onClose={() => {
            handlesetOpen(false, "");
          }}
          severity="success"
        >
          {open.message}
        </Alert>
      </Snackbar>
      {/* <h3 style={{ color: "grey" ,}}>PRODUCT DETAIL</h3> */}

      <Section>
        <div>
          <ImageDetail src={state.media && state.media.source} alt="pic" />
        </div>
        <Description>
          <HeaderText>{state.name && state.name}</HeaderText>
          <Inline>
            <Ratings rating={3} />
            <MediuText>162 ratings</MediuText>
          </Inline>
          <Divider></Divider>
          <MediuText>price:</MediuText>
          <HeaderText>
            {state["price"] && state["price"]["formatted_with_symbol"]}
          </HeaderText>
          <MediuText>
            Also entitled to ishop free returns if products dont match
          </MediuText>
          {/* <HeaderText>
            <MediuText>fits:</MediuText>Adults
          </HeaderText> */}
          <MediuText>
            Available Stock: {state["quantity"] && state["quantity"]}
          </MediuText>
          <div style={{ lineHeight: "1%", marginTop: "10px" }}>
            <HeaderText>
              <MediuText>Variants:</MediuText>
            </HeaderText>
            <select
              name="variants"
              id="variants"
              defaultValue="select"
              style={{ height: "30px" }}
            >
              {" "}
              <option value="Select">Select</option>
              {state["variants"] &&
                state.variants.length &&
                state.variants.map((values) => (
                  <option key={values.id} value={values.name}>
                    {values.name}
                  </option>
                ))}
            </select>
          </div>

          {/* 
          <option value="Select">Select</option>
              <option value="l">Saab</option>
              <option value="m">M</option>
              <option value="xxl">xxl</option> */}

          {state.description && (
            <Discription
              dangerouslySetInnerHTML={{
                __html: state.description,
              }}
            />
          )}
        </Description>
        <ProductAction>
          <MediuText>price:</MediuText>
          <HeaderText>
            {state["price"] && state["price"]["formatted_with_symbol"]}
          </HeaderText>
          <MediuText>
            Also entitled to ishop free returns if products dont match
          </MediuText>
          <MediuText>Arrives: Wednesday, Jan 27</MediuText>
          <MediuText>Fastest delivery: Monday, Jan 25</MediuText>

          <HeaderText>
            <MediuText>
              Stock: {state["quantity"] && state["quantity"]}
            </MediuText>
          </HeaderText>
          <SweetButtons
            height="30px"
            name="Add To Cart"
            handleClick={() => {
              handleAddToCart(state["id"], 1);
            }}
          >
            <AddShoppingCartIcon
              style={{ color: "#2f4f4f", position: "absolute", left: 10 }}
              fontSize="medium"
            />
          </SweetButtons>
          <SweetButtons height="30px" name="Buy Now">
            <ShopIcon
              style={{ color: "#2f4f4f", position: "absolute", left: 10 }}
              fontSize="medium"
            />
          </SweetButtons>
        </ProductAction>

        <ProductActionMobile>
          <SweetButtons
            width="48%"
            height="50px"
            name="Buy Now"
            fontSize="17px"
          >
            <ShopIcon
              style={{ color: "#2f4f4f", position: "absolute", left: 10 }}
              fontSize="large"
            />
          </SweetButtons>
          <SweetButtons
            width="48%"
            height="50px"
            name="Add To Cart"
            fontSize="17px"
            handleClick={() => {
              handleAddToCart(state["id"], 1);
            }}
          >
            <AddShoppingCartIcon
              style={{ color: "#2f4f4f", position: "absolute", left: 10 }}
              fontSize="large"
            />
          </SweetButtons>
        </ProductActionMobile>
      </Section>
      <MoreToLove title="You Might Love These Also" Description="" />
      <CustomersReview />
      <MoreToLove
        title="Check these"
        Description="Customers also bought these items.."
      />
    </Container>
  );
};

export default WithSpinner(ProductDetail);
