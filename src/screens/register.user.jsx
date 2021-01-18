import React, { useState } from "react";
import styled from "styled-components";
import SweetButtons from "./components/SweetButtons";
import firebase from "../firebase/firebase";
import {
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
  useLocation,
} from "react-router-dom";
import { PinDropSharp } from "@material-ui/icons";

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
  min-height: 350px;
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
const Inpute = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;

  padding: 2px;
  height: 30px;
  width: 98%;
  border-width: 2px;
  border-color: ${({ borderColor }) => borderColor};
  border-radius: 3px;
  margin-bottom: 3rem;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${({ borderColor }) => borderColor};
  }
`;

const RegisterUser = (props) => {
  const [borderColor, setBorderColor] = useState("silver");
  const [form, setForm] = useState({
    email: "",
    emailBorderColor: "silver",
    password: "",
    passwordBorderColor: "silver",
    password2: "",
    password2BorderColor: "silver",
    firstName: "",
    firstNameBorderColor: "silver",
    lastName: "",
    lastNameBorderColor: "silver",
  });
  const { match, history } = props;
  const location = useLocation();

  // const signInWithEmailPassword = (email, password) => {
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then((user) => {
  //       // Signed in
  //       // ...
  //       console.log("loggged in success");
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //     });
  // };
  const handleSignup = () => {
    let userdata;
    const { email, password, password2, firstName, lastName } = form;
    if (!email) {
      setForm({
        ...form,
        emailBorderColor: "red",
        password2BorderColor: "silver",
        lastNameBorderColor: "silver",
        passwordBorderColor: "silver",
        firstNameBorderColor: "silver",
      });
      return alert("provide a valid email");
    }
    if (!password) {
      setForm({
        ...form,
        emailBorderColor: "silver",
        password2BorderColor: "silver",
        lastNameBorderColor: "silver",
        passwordBorderColor: "red",
        firstNameBorderColor: "silver",
      });
      return alert("password can not be empty");
    }

    if (!password2) {
      setForm({
        ...form,
        emailBorderColor: "silver",
        password2BorderColor: "red",
        lastNameBorderColor: "silver",
        passwordBorderColor: "silver",
        firstNameBorderColor: "silver",
      });
      return alert("re type your password");
    }
    if (password !== password2) {
      setForm({
        ...form,
        emailBorderColor: "silver",
        password2BorderColor: "red",
        lastNameBorderColor: "silver",
        passwordBorderColor: "red",
        firstNameBorderColor: "silver",
      });
      return alert("both password dont match");
    }
    if (!firstName) {
      setForm({
        ...form,
        emailBorderColor: "silver",
        password2BorderColor: "silver",
        lastNameBorderColor: "silver",
        passwordBorderColor: "silver",
        firstNameBorderColor: "red",
      });
      return alert("provide a first name");
    }
    if (!lastName) {
      setForm({
        ...form,
        emailBorderColor: "silver",
        password2BorderColor: "silver",
        lastNameBorderColor: "red",
        passwordBorderColor: "silver",
        firstNameBorderColor: "silver",
      });
      return alert("provide a last name");
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        // Signed in
        // ...
        console.log(response.user.uid);
        userdata = response.user.uid;
        firebase
          .firestore()
          .collection("users")
          .doc(response.user.uid)
          .set({
            firstName: firstName,
            lastName: lastName,
            userid: response.user.uid,
            email: email,
          })
          .then(function (docRef) {
            console.log("Document written with ID: ", docRef);
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
        // ..
      });
    firebase
      .firestore()
      .collection("users")
      .doc(userdata)
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot.data());
      });
  };

  return (
    <Container>
      <Div>
        <InnerDiv>
          <div style={{ width: "100%", height: "70px", lineHeight: "8px" }}>
            <H3>Sign Up </H3>
          </div>
          <Inpute
            placeholder="Email"
            borderColor={form.emailBorderColor}
            type="email"
            value={form.email}
            name="email"
            onChange={(e) => {
              // setInputeValue(e.target.value);
              setForm({
                ...form,
                email: e.target.value,
              });
            }}
          />
          <Inpute
            placeholder="Password"
            borderColor={form.passwordBorderColor}
            type="password"
            value={form.password}
            name="password"
            onChange={(e) => {
              // setInputeValue(e.target.value);
              setForm({ ...form, password: e.target.value });
            }}
          />
          <Inpute
            placeholder="Retype-Password"
            borderColor={form.password2BorderColor}
            type="password"
            value={form.password2}
            name="password2"
            onChange={(e) => {
              // setInputeValue(e.target.value);
              setForm({ ...form, password2: e.target.value });
            }}
          />
          <Inpute
            placeholder="First name"
            borderColor={form.firstNameBorderColor}
            type="text"
            value={form.firstName}
            name="firstName"
            onChange={(e) => {
              // setInputeValue(e.target.value);
              setForm({ ...form, firstName: e.target.value });
            }}
          />
          <Inpute
            placeholder="Last name"
            borderColor={form.lastNameBorderColor}
            type="text"
            value={form.lastName}
            name="lastName"
            onChange={(e) => {
              // setInputeValue(e.target.value);
              setForm({ ...form, lastName: e.target.value });
            }}
          />

          <SweetButtons
            name="Continue"
            width="98%"
            height="30px"
            handleClick={() => {
              handleSignup();
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
        </InnerDiv>
      </Div>
    </Container>
  );
};

export default RegisterUser;
