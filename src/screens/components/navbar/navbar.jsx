import React, { useState } from "react";
// import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
// import ThreeDRotation from "@material-ui/icons/ThreeDRotation";

import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { useHistory } from "react-router-dom";
import "./navbar.css";
import SingInMenuContent from "../singInmenu";
import FlagContent from "../FlagContent";
import styled from "styled-components";
import Menudrawercontent from "../menudrawercontent";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Drawer = styled.div`
  animation: ease-in 0.2s mymove;
  animation-iteration-count: 1;

  @keyframes mymove {
    from {
      transform: translateX(-400px);
    }
    to {
      transform: translateX(0);
    }
  }
`;
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(97, 84, 84, 0.713);
  position: absolute;
  z-index: 2;
`;

const Navbar = (props) => {
  const [signMenuvisible, setSignMenuvisible] = useState(false);
  const [flagMenuvisible, setflagMenuvisible] = useState(false);
  const [Menuvisible, setMenuvisible] = useState(false);
  const [searchValue, setsearchValue] = useState("");

  const currentUser = useSelector((state) => state.user.currentUser);
  const handlemenuvisibility = () => {
    setMenuvisible(!Menuvisible);
  };
  const history = useHistory();
  return (
    <div className="nav">
      {Menuvisible && (
        <Drawer id="menuDrawer">
          <div
            style={{
              position: "absolute",
              right: "9px",
              top: "2px",
              borderColor: "grey",
              borderRadius: "100%",
              borderWidth: "4px",
              cursor: " pointer",
              width: "60px",
              height: "60px",
              justifyContent: "center",
              alignItems: "cwenter",
              display: "flex",
            }}
            onClick={handlemenuvisibility.bind(this, "")}
          >
            <p style={{ fontSize: "30px", color: "grey" }}>x</p>
          </div>
          <Menudrawercontent handlemenuvisibility={handlemenuvisibility} />
        </Drawer>
      )}
      {Menuvisible && (
        <Wrapper onClick={handlemenuvisibility.bind(this, "")}></Wrapper>
      )}
      <div id="navHeader">
        <section
          id="section1"
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "2px",
            justifyContent: "space-around",
          }}
        >
          {" "}
          <Link to="/">
            <div>
              <img src="./logo.png" id="logoImg" alt="img" />
              {/* <p style={{ fontSize: "12px", fontWeight: "bold" }}>Ishop.ng</p> */}
            </div>
          </Link>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
            }}
          >
            <LocationOnOutlinedIcon
              id="locationpin"
              style={{ color: "white" }}
              fontSize="default"
            />
            <div id="hello-section">
              <h4>Select address</h4>
            </div>
          </div>
        </section>
        <section id="inputBlock">
          <input
            type="text"
            id="headerInput"
            value={searchValue}
            onChange={(e) => {
              setsearchValue(e.target.value);
            }}
          />
          <div
            style={{
              height: "100%",
              width: "10%",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {searchValue && (
              <h2
                style={{ color: "grey", fontSize: 18, cursor: "pointer" }}
                onClick={() => {
                  setsearchValue("");
                }}
              >
                x
              </h2>
            )}
          </div>
          <div id="searchBlock">
            <SearchOutlinedIcon style={{ color: "#FFFF" }} fontSize="large" />
          </div>
        </section>
        <section
          id="section1"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div
            onMouseEnter={() => {
              setflagMenuvisible(true);
            }}
            onMouseLeave={() => {
              setflagMenuvisible(false);
            }}
            id="flag"
          >
            <img
              src="./flag.png"
              style={{
                height: "20px",
              }}
              alt="img"
            />
            {flagMenuvisible && (
              <div id="flagMenu">
                <FlagContent />
              </div>
            )}
            <ArrowDropDownOutlinedIcon style={{ color: "#ffff" }} />
          </div>
          <div
            onMouseEnter={() => {
              setSignMenuvisible(true);
            }}
            id="accounts"
            onMouseLeave={() => {
              setSignMenuvisible(false);
            }}
          >
            <div>
              <h4 id="signin" style={{ fontWeight: "200" }}>
                {!currentUser && " Hello,sign in"}
                {currentUser && `hello ${currentUser.firstName}`}
              </h4>
              <h3>Account</h3>
            </div>
            {signMenuvisible && (
              <div id="signInMenu">
                <SingInMenuContent handlemenuvisibility={setSignMenuvisible} />
              </div>
            )}
            <ArrowDropDownOutlinedIcon style={{ color: "#ffff" }} />
          </div>
          <div id="orders-section">
            <h3>returns</h3>
            <h3>& Orders</h3>
          </div>
          <div>
            <div
              style={{
                borderRadius: "100%",
                position: "absolute",
                height: "16px",
                width: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ffff",
                top: "8px",
              }}
            >
              <p
                style={{
                  color: "green",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                2
              </p>
            </div>
            <h3>
              <ShoppingCartOutlinedIcon
                onClick={() => {
                  history.push("/cart");
                }}
                style={{ color: " #ffff", cursor: "pointer" }}
                fontSize="large"
              />
            </h3>
          </div>
        </section>
      </div>
      <div id="navbottom">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // position: "absolute",
            left: 2,
          }}
          onClick={handlemenuvisibility.bind(this, "")}
        >
          <MenuOutlinedIcon
            style={{ color: "white", fontWeight: "bold", marginRight: "4px" }}
            fontSize="default"
          />
          <h4 style={{ fontWeight: "bold" }}>All</h4>
        </div>
        <div id="deals">
          <p id="deals-responsive3">last Minute </p>
          <p id="deals-responsive3">Gift cards and top-ups</p>
          <p id="deals-responsive2">best sellers</p>
          <p id="deals-responsive1">Gift cards and top-ups</p>
          <p id="deals-responsive1">last Minute Deals</p>
          <p id="deals-responsive2">Gift cards and top-ups</p>
          <div id="offer">
            <h3 style={{ fontSize: 19, fontWeight: "bold" }}>
              ishop offer|23 days free trial
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
