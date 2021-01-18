import React, { useState } from "react";
import styled from "styled-components";
import Ratings from "./components/ratings";
import SweetButtons from "./components/SweetButtons";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShopIcon from "@material-ui/icons/Shop";
import MoreToLove from "./components/MoreToLove";

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
  background-color: #ffff;
  min-height: 400px;
  padding: 10px;
  justify-content: space-between;
`;
const Description = styled.div`
  width: 400px;
  padding: 4px;
  min-height: 500px;
  pading: 6px;
  background-color: #ffff;
  @media (max-width: 768px) {
    width: 100%;
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
  background-color: #ffff;
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
    background-color: #ffff;
  }
`;

const ImageDetail = {
  height: "400px",
};
const ProductDetail = () => {
  return (
    <Container>
      {/* <h3 style={{ color: "grey" ,}}>PRODUCT DETAIL</h3> */}

      <Section>
        <div>
          <img src="/shirt.jpg" style={ImageDetail} alt="pic" />
        </div>
        <Description>
          <HeaderText>Mens Mopi Shirts</HeaderText>
          <Inline>
            <Ratings rating={3} />
            <MediuText>162 ratings</MediuText>
          </Inline>
          <Divider></Divider>
          <MediuText>price:</MediuText>
          <HeaderText>=N=16 - =N= 34 </HeaderText>
          <MediuText>
            Also entitled to free returns if products dont match
          </MediuText>
          <HeaderText>
            <MediuText>fits:</MediuText>Adults
          </HeaderText>
          <div style={{ lineHeight: "1%", marginTop: "10px" }}>
            <HeaderText>
              <MediuText>Size:</MediuText>
            </HeaderText>
            <select
              name="cars"
              id="cars"
              defaultValue="xl"
              style={{ height: "30px" }}
            >
              <option value="Select">Select</option>
              <option value="l">Saab</option>
              <option value="m">M</option>
              <option value="xxl">xxl</option>
            </select>
          </div>
          <ul style={{ alignSelf: "center" }}>
            <li>
              <MediuText>Fabric loop</MediuText>
            </li>
            <li>
              <MediuText>100% Cotton</MediuText>
            </li>
            <li>
              <MediuText>Machine Wash</MediuText>
            </li>
            <li>
              <MediuText>Collar Style</MediuText>
            </li>
            <li>
              <MediuText>Fabric loop</MediuText>
            </li>
            <li>
              <MediuText>egular Fit</MediuText>
            </li>
          </ul>
        </Description>
        <ProductAction>
          <MediuText>price:</MediuText>
          <HeaderText>=N=16 - =N= 34 </HeaderText>
          <MediuText>
            Also entitled to free returns if products dont match
          </MediuText>
          <MediuText>Arrives: Wednesday, Jan 27</MediuText>
          <MediuText>Fastest delivery: Monday, Jan 25</MediuText>

          <HeaderText>
            <MediuText>Stock:</MediuText>3
          </HeaderText>
          <SweetButtons height="30px" name="Add To Cart">
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
          >
            <AddShoppingCartIcon
              style={{ color: "#2f4f4f", position: "absolute", left: 10 }}
              fontSize="large"
            />
          </SweetButtons>
        </ProductActionMobile>
      </Section>
      <MoreToLove />
    </Container>
  );
};

export default ProductDetail;
