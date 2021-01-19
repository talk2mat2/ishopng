import React from "react";
import styled from "styled-components";
import Ratings from "./ratings";

// import { Slide } from "@material-ui/core";

const Div = styled.div`
  min-height: 250px;
  width: 100%;
  border-radius: 10px;
  background-color: #ffff;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;
const MediuText = styled.p`
  color: grey;
  font-size: 13px;
  margin-bottom: 1px;
`;

const slideSWiper = {
  width: "100%",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "#Ffff",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
};

const HeaderText2 = styled.h2`
  color: grey;
  font-size: 16px;
`;
// const MediumText = styled.p`
//   color: grey;
//   font-size: 13px;
//   margin-bottom: 1px;
// `;
// const CardProduct = () => {
//   return (
//     <img
//       src="./iphone12.jpg"
//       style={{
//         height: "100%",
//       }}
//       alt="img"
//     />
//   );
// };

const Review = (props) => {
  const { rating, Name, Message } = props;
  return (
    <div>
      <MediuText>{Name}</MediuText>
      <Ratings rating={rating} />
      <MediuText>{Message}</MediuText>
    </div>
  );
};
const CustomersReview = () => {
  return (
    <Div>
      {" "}
      <HeaderText2>Customers Reviews (4)</HeaderText2>
      <MediuText>162 ratings</MediuText>
      <Review
        rating={4}
        Name="Lanre"
        Message="this is one one the product i love in my life because it makes me happy
        anything i think of it"
      />
      <Review rating={2} Name="emeka" Message="nice" />
      <Review rating={4} Name="george" Message="i love this" />
      <Review rating={5} Name="ken" Message="this item was delivered on time" />
    </Div>
  );
};

export default CustomersReview;
