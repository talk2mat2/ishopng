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
import { FETCH_CART_SUCCESS } from "../redux/action";
import WithSpinner from "./components/withSpinner";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

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
  width: 800px;
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
const EmptyCart = styled.div`
  min-height: 80vh;
  width: 98%;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
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
const CartPeoduct = (props) => {
  const Dispatch = useDispatch();
  const { stock, item, handlesetOpen } = props;
  const [itemNumber, setItemNumber] = useState(item.quantity);

  const history = useHistory();
  const handleIncrement = (item_id) => {
    try {
      props.setLoading(true);
      itemNumber < stock && setItemNumber(itemNumber + 1);
      itemNumber &&
        commerce.cart
          .update(item_id, { quantity: itemNumber + 1 })
          .then((response) => {
            props.setLoading(false);
            handlesetOpen(true, " your shopping cart has been updated");
            Dispatch(FETCH_CART_SUCCESS({ cart: response.cart }));
          });
    } catch (err) {
      console.log(err);
      props.setLoading(false);
    }
  };
  const handleDecrement = (item_id) => {
    props.setLoading(true);
    try {
      itemNumber && setItemNumber(itemNumber - 1);
      itemNumber &&
        commerce.cart
          .update(item_id, { quantity: itemNumber - 1 })
          .then((response) => {
            props.setLoading(false);
            handlesetOpen(true, "item(s) was removed from cart");
            Dispatch(FETCH_CART_SUCCESS({ cart: response.cart }));
          });
    } catch (err) {
      console.log(err);
      props.setLoading(false);
    }
  };
  const handleClick = (item) => {
    history.push({ pathname: "/item_Detail", state: item });
  };
  const handleDelete = (id) => {
    props.setLoading(true);
    try {
      commerce.cart.remove(id).then((response) => {
        props.setLoading(false);
        handlesetOpen(true, "item(s) was removed from cart");
        Dispatch(FETCH_CART_SUCCESS({ cart: response.cart }));
      });
    } catch (err) {
      console.log(err);
      props.setLoading(false);
    }
  };
  const ImageDetail = {
    height: "80px",
  };
  useEffect(() => console.log(props));

  return (
    <ProductContainer>
      {item ? (
        <Productsection>
          <img src={item["media"]["source"]} style={ImageDetail} alt="pic" />
          <div style={{ width: "50%" }} onClick={handleClick.bind(this, item)}>
            <HeaderText2>{item.name.slice(0, 100)}...</HeaderText2>
            <MediumText>
              Also entitled to free returns if products dont match
            </MediumText>
            {/* <MediumText> available stock:{stock}</MediumText> */}
            <HeaderText2>
              Price: {item.price["formatted_with_symbol"]}
            </HeaderText2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100px",
              width: "20%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <DeleteForeverIcon
              onClick={handleDelete.bind(this, item.id)}
              style={{ color: "grey", cursor: "pointer" }}
              fontSize="large"
            />
            <div
              style={{
                justifySelf: "flex-end",
                display: "flex",
                flexDirection: "row",

                width: "60px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <RemoveCircleOutlineIcon
                style={{ color: "grey", cursor: "pointer" }}
                fontSize="medium"
                onClick={handleDecrement.bind(this, item.id)}
              />
              <p style={{ color: "grey" }}>{itemNumber}</p>
              <ControlPointIcon
                onClick={handleIncrement.bind(this, item.id)}
                style={{ color: "grey", cursor: "pointer" }}
                fontSize="medium"
              />
            </div>
          </div>
        </Productsection>
      ) : null}
    </ProductContainer>
  );
};
const ShoppingCart = (props) => {
  const [cartState, setCartState] = useState([]);
  const cart = useSelector((state) => state.cart);
  const Dispatch = useDispatch();
  const [open, setOpen] = useState({ status: false, message: "" });

  const Cardimg = {
    height: "50px",
  };
  useEffect(() => {
    cart.cart && console.log(cart);
    commerce.cart
      .retrieve()
      .then((cart) => {
        Dispatch(FETCH_CART_SUCCESS({ cart }));
      })
      .catch((error) => {
        console.error("There was an error fetching the cart", error);
      });
  }, []);
  const handlesetOpen = (status, message) => {
    setOpen({ ...open, status, message });
  };
  const ListCartItems = () => {
    return (
      cart.cart &&
      cart.cart["line_items"].map((item) => {
        return (
          <CartPeoduct
            setLoading={props.setLoading}
            handlesetOpen={handlesetOpen}
            key={item.id}
            item={item}
            stock={8}
          />
        );
      })
    );
  };

  function Alert(props) {
    return <MuiAlert elevation={10} variant="filled" {...props} />;
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
      {!cart.cart || !cart.cart["line_items"].length ? (
        <EmptyCart>
          <ShoppingCartOutlinedIcon
            fontSize="large"
            style={{ color: "grey", fontSize: "90px" }}
          />
          <HeaderText2>Your Shopping Cart is empty :)</HeaderText2>
          <div style={{ height: "100px" }}></div>
          <MoreToLove title="Many More To Explore" Description="" />
        </EmptyCart>
      ) : (
        <React.Fragment>
          <CartSection>
            <Header>
              <HeaderText>
                Shoping cart - ({cart.cart["total_items"]}) items
              </HeaderText>
              <MediumText>
                ({cart.cart["total_unique_items"]}) products
              </MediumText>
            </Header>
            {/* <CartPeoduct stock={8} />
            <CartPeoduct stock={2} />
            <CartPeoduct stock={5} /> */}
            {ListCartItems()}
            <PaymentChanels>
              <HeaderText2>Accepted Payment Channels</HeaderText2>
              <Cards>
                <img src="/Quickteller.png" alt="quickteller" style={Cardimg} />
                <img src="/paystack.png" alt="quickteller" style={Cardimg} />
                <img src="/Visa.png" alt="quickteller" style={Cardimg} />
                <img src="/Mastercard.png" alt="quickteller" style={Cardimg} />
              </Cards>
            </PaymentChanels>
            {/* <div style={{ width: " 800px" }}>
              <MoreToLove />
            </div> */}
          </CartSection>
          <Summery>
            <HeaderText>Order Summary</HeaderText>
            <SummeryItems>
              <div>
                <MediumText>Subtotal</MediumText>
                <MediumText>Shipping</MediumText>

                <HeaderText>total</HeaderText>
              </div>
              <div>
                <MediumText>
                  {cart.cart["subtotal"]["formatted_with_symbol"]}
                </MediumText>
                <MediumText>$00.00</MediumText>
                <HeaderText>
                  {cart.cart["subtotal"]["formatted_with_symbol"]}
                </HeaderText>
              </div>
            </SummeryItems>

            <SweetButtons height="40px" name="Check Out Now"></SweetButtons>
          </Summery>
        </React.Fragment>
      )}
    </Container>
  );
};

export default WithSpinner(ShoppingCart);
