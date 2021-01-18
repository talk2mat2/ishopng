import React from "react";
import styled from "styled-components";
import SweetButtons from "./SweetButtons";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Firebase from "../../firebase/firebase";

const P = styled.p`
  color: grey;
  padding: 3px;
  font-size: 13px;
  padding-left: 4px;
  padding: 3px;
`;

const H3 = styled.h3`
  color: grey;
  font-weight: bold;
  font-size: 15px;
  padding-bottom: 10px;
`;

const Dealsresponsive1 = styled.p`
  color: grey;
  margin-top: 8px;
  cursor: pointer;
  @media (min-width: 1086px) {
    display: none;
  }
`;
const Dealsresponsive2 = styled.p`
  color: grey;
  cursor: pointer;
  margin-top: 8px;
  @media (min-width: 886px) {
    display: none;
  }
`;
const Dealsresponsive3 = styled.p`
  color: grey;
  margin-top: 8px;
  cursor: pointer;
  @media (min-width: 600px) {
    display: none;
  }
`;

export default function Menudrawercontent(props) {
  const currentUser = useSelector((state) => state.user.currentUser);
  const history = useHistory();
  const handleSighin = () => {
    props.handlemenuvisibility();
    !currentUser && history.push("/signin");
    currentUser && Firebase.auth().signOut();
  };
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "20px",
      }}
    >
      <div>
        <SweetButtons
          name={currentUser ? "log out" : "Sign In"}
          height="2rem"
          handleClick={handleSighin}
        />
      </div>
      {!currentUser && (
        <P style={{ color: "grey", fontSize: 13 }}>
          dont have accounts yet,{" "}
          <Link
            onClick={() => {
              props.handlemenuvisibility();
            }}
            to="/signup"
          >
            sign up here
          </Link>
        </P>
      )}
      {currentUser && (
        <P style={{ color: "grey", fontSize: 13 }}>{currentUser.email}</P>
      )}
      <div
        style={{ height: "1px", width: "90%", backgroundColor: "silver" }}
      ></div>
      <div
        style={{
          height: "80%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "49%" }}>
          <H3>Your Services</H3>
          <P>Your Orders</P>
          <P>Your Lists</P>
          <P>Your Recommendation</P>
          <P>Your Subscribe & Save Items</P>
          <P>Your Gift Card Balance</P>
          <P>Your Pets</P>
          <P>Memberships & Subscriptions</P>
          <P>Your Unlimited</P>
          <P>Your Music Subscriptions</P>
          <P>Your Unlimited</P>
          <P>Memberships & Subscriptions</P>
          <H3> Deals</H3>
          <Dealsresponsive3>last Minute</Dealsresponsive3>
          <Dealsresponsive3>Gift cards and top-ups</Dealsresponsive3>
          <Dealsresponsive2>best sellers</Dealsresponsive2>
          <Dealsresponsive1>Gift cards and top-ups</Dealsresponsive1>
          <Dealsresponsive1>last Minute Deals</Dealsresponsive1>
          <Dealsresponsive2>Gift cards and top-ups</Dealsresponsive2>
          <div id="offer">
            <p style={{ fontSize: 15, fontWeight: "bold", color: "grey" }}>
              ishop 23 days free trial
            </p>
          </div>
        </div>

        <div
          style={{ height: "80%", width: "1px", backgroundColor: "silver" }}
        ></div>
        <div style={{ width: "49%" }}>
          <H3>Your Accounts</H3>

          <P>Your Orders</P>
          <P>Your Lists</P>
          <P>Your Recommendations</P>
          <P>Your Subscribe & Save Items</P>
          <P>Your Gift Card Balance</P>
          <P>Your Pets</P>
          <P>Memberships & Subscriptions</P>
          <P>Your Unlimited</P>
          <P>Your Music Subscriptions</P>
          <P>Your Unlimited</P>
          <P>Memberships & Subscriptions</P>
          <P>Your Unlimited</P>
          <P>Your Music Subscriptions</P>
          <P>Your Unlimited</P>
          <P>Your Music Subscriptions</P>
          <P>Your Unlimited</P>
          <P>Your Music Subscriptions</P>
        </div>
      </div>
    </div>
  );
}
