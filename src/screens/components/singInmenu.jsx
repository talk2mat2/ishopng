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

const SingInMenuContent = (props) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const history = useHistory();
  const handleSighin = () => {
    !currentUser && history.push("/signin");
    currentUser && Firebase.auth().signOut();
    props.handlemenuvisibility();
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
            to="/signup"
            onClick={() => {
              props.handlemenuvisibility();
            }}
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
          <P>Electronics</P>
          <P>Beauty And Health</P>
          <P>Computer And Office</P>
          <P>Mobile Phones</P>
          <P>Fashions</P>
          <P>Home And Garden</P>
          <P>Furniture</P>
          <P>Watches</P>
          <P>Wedding And Events</P>

          <P>Memberships & Subscriptions</P>
        </div>
        <div
          style={{ height: "80%", width: "1px", backgroundColor: "silver" }}
        ></div>
        <div style={{ width: "49%" }}>
          <H3>Your Accounts</H3>

          <P>Your Orders</P>
          <P>Yet To Be Reviewed</P>
          <P>Shiped</P>
          <P>Your Subscribe & Whish Items</P>
          <P>Your Coupons</P>
          <P>Your Invitations</P>
          <P>Followings </P>

          <P>Your Music Subscriptions</P>

          <P>Your Memberships </P>
          {/* <P>Your Unlimited</P>
          <P>Your Music Subscriptions</P>
          <P>Your Unlimited</P>
          <P>Your Music Subscriptions</P>
          <P>Your Unlimited</P>
          <P>Your Music Subscriptions</P> */}
        </div>
      </div>
    </div>
  );
};

export default SingInMenuContent;
