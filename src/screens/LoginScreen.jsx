import React, { useState } from "react";
import styled from "styled-components";
import SweetButtons from "./components/SweetButtons";

const Container = styled.div`
  min-height: 80vh;
  width: 100%;
  background-color: #ffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1px;
`;
const Div = styled.div`
  margin-top: 30px;
  height: 350px;
  max-width: 300px;
  background-color: #ffff;
  border: 0.5px solid rgba(192, 192, 192, 0.795);
  padding: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 9px;
  position: relative;
`;
const InnerDiv = styled.div`
  min-height: 90%;
  width: 90%;

  display: flex;
  flex-direction: column;

  align-items: center;
  flex-wrap: wrap;

  line-height: 1px;
  padding: 3px;
`;
const H3 = styled.p`
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

const Inpute = {
  height: "30px",
  width: "98%",
  borderWidth: "1px",
  borderColor: "silver",
  borderRadius: "3px",
  marginBottom: "3rem",
};
const LoginScreen = () => {
  const [defaultMessage] = useState(
    " enter your email or mobile number to contnue"
  );
  const [inputeValue, setInputeValue] = useState("");
  return (
    <Container>
      <Div>
        <InnerDiv>
          <div style={{ width: "100%", height: "70px", lineHeight: "8px" }}>
            <H3>Login In</H3>
            <p style={{ color: "black", fontWeight: "bold", fontSize: "11px" }}>
              {defaultMessage}
            </p>
          </div>
          <input
            type="text"
            style={Inpute}
            value={inputeValue}
            onChange={(e) => {
              setInputeValue(e.target.value);
            }}
          />
          <SweetButtons
            name="Sign In"
            width="98%"
            height="30px"
            handleClick={() => {
              return;
            }}
          />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              minHeight: "90px",
              width: "99%",

              position: "relative",
              padding: "1px",
            }}
          >
            <h2
              style={{
                color: "grey",
                lineHeight: "1rem",
                fontSize: "9px",
                marginTop: "3rem",
              }}
            >
              Please see our Privacy Notice, our Cookies Notice and our
              Interest-Based Ads Notice. Plemmmmmmase see our Privacy Notice,
              our Cookies Notice and our Interest-Based Ads Notice.
            </h2>
          </div>
          <SweetButtons
            name="Sign Up"
            width="98%"
            height="30px"
            handleClick={() => {
              return;
            }}
            color="grey"
          />
        </InnerDiv>
      </Div>
    </Container>
  );
};

export default LoginScreen;
