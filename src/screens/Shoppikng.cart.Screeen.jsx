import React, { useState } from "react";
import styled from "styled-components";
import SweetButtons from "./components/SweetButtons";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import MoreToLove from "./components/MoreToLove";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const Container = styled.div`
  min-height: 80vh;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 1px;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
`;

const Header = styled.div`
  height: 100px;
  width: 800px;
  border-radius: 10px;
  background-color: #ffff;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
}
`;
const PaymentChanels = styled.div`
  height: 180px;
  width: 800px;
  border-radius: 10px;
  background-color: #ffff;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;
const EmptyCart = styled.div`
  min-height: 80vh;
  width: 98%;
  border-radius: 10px;
  background-color: #ffff;
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
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CartSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
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
  background-color: #ffff;
  flex-direction: column;
  justify-content: center;
  display: flex;
  margin-bottom: 10px;
`;
const Productsection = styled.div`
  min-height: 80%;
  width: 99%;
  display: flex;
  flex-direction: row;
  padding: 1px;
  align-items: flex-start;

  justify-content: space-between;
`;
const SummeryItems = styled.div`
  min-height: 50%;
  width: 70%;
  display: flex;
  flex-direction: row;
  padding: 1px;
  justify-content: space-between;

  justify-content: space-between;
`;
const Cards = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 40%;
`;
const CartPeoduct = (props) => {
  const [itemNumber, setItemNumber] = useState(0);
  const { stock } = props;
  const handleIncrement = () => {
    itemNumber < stock && setItemNumber(itemNumber + 1);
  };
  const handleDecrement = () => {
    itemNumber && setItemNumber(itemNumber - 1);
  };
  const ImageDetail = {
    height: "80px",
  };
  return (
    <ProductContainer>
      <Productsection>
        <img src="/shirt.jpg" style={ImageDetail} alt="pic" />
        <div style={{ width: "70%" }}>
          <HeaderText2>Mens Mopi Shirts</HeaderText2>
          <MediumText>
            Also entitled to free returns if products dont match
          </MediumText>
          <MediumText> available stock:{stock}</MediumText>
          <HeaderText2>Price: =N=17.98</HeaderText2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            alignItems: "flex-end",
          }}
        >
          <DeleteForeverIcon
            style={{ color: "grey", cursor: "pointer" }}
            fontSize="medium"
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
              onClick={handleDecrement.bind(this, "")}
            />
            <p style={{ color: "grey" }}>{itemNumber}</p>
            <ControlPointIcon
              onClick={handleIncrement.bind(this, "")}
              style={{ color: "grey", cursor: "pointer" }}
              fontSize="medium"
            />
          </div>
        </div>
      </Productsection>
    </ProductContainer>
  );
};
const ShoppingCart = () => {
  const cartIsEmty = true;
  const Cardimg = {
    height: "50px",
  };
  return (
    <Container>
      {cartIsEmty ? (
        <EmptyCart>
          <ShoppingCartOutlinedIcon
            fontSize="large"
            style={{ color: "grey", fontSize: "90px" }}
          />
          <HeaderText2>Your Shopping Cart is empty :)</HeaderText2>
          <div style={{ height: "100px" }}></div>
          <MoreToLove />
        </EmptyCart>
      ) : (
        <React.Fragment>
          <CartSection>
            <Header>
              <HeaderText>Shoping cart - 2 items</HeaderText>
            </Header>
            <CartPeoduct stock={8} />
            <CartPeoduct stock={2} />
            <CartPeoduct stock={5} />
            <PaymentChanels>
              <HeaderText2>Accepted Payment Channels</HeaderText2>
              <Cards>
                <img src="/Quickteller.png" alt="quickteller" style={Cardimg} />
                <img src="/paystack.png" alt="quickteller" style={Cardimg} />
                <img src="/Visa.png" alt="quickteller" style={Cardimg} />
                <img src="/Mastercard.png" alt="quickteller" style={Cardimg} />
              </Cards>
            </PaymentChanels>
            <MoreToLove />
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
                <MediumText>=N= 29.90</MediumText>
                <MediumText>=N= 29.90</MediumText>
                <HeaderText>=N= 29.90</HeaderText>
              </div>
            </SummeryItems>

            <SweetButtons height="40px" name="Check Out Now"></SweetButtons>
          </Summery>
        </React.Fragment>
      )}
    </Container>
  );
};

export default ShoppingCart;
