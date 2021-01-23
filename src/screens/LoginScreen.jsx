import React, { useState } from "react";
import styled from "styled-components";
import SweetButtons from "./components/SweetButtons";
import firebase from "../firebase/firebase";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import WithSpinner from "./components/withSpinner";
import {
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
  useLocation,
} from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
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

const LoginScreen = (props) => {
  const [open, setOpen] = React.useState(false);
  const [inputeValue, setInputeValue] = useState("");
  const [isError, setError] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const [borderColor, setBorderColor] = useState("silver");
  const { match, history } = props;
  const location = useLocation();

  const HandleuserLogin = (value) => {
    setInputeValue(value);
    console.log(inputeValue, value);
    firebase
      .auth()
      .fetchSignInMethodsForEmail(value)
      .then((result) => {
        if (result.length < 1) {
          setBorderColor("red");
          setError(true);
        } else {
          setBorderColor("blue");

          setError(false);
        }
      })
      .catch((error) => {
        setBorderColor("red");

        setError(true);
        if (error.code === "auth/network-request-failed") {
          seterrorMessage("network error occred");
        } else {
          seterrorMessage("user not registered or network error, try again");
        }
      });
  };
  const signInWithEmailPassword = (email, password) => {
    props.setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        props.setLoading(false);
        // ...
        console.log("loggged in success");
        console.log(user);
        history.push("/");
      })
      .catch((error) => {
        // console.log(error.code);
        // var errorCode = error.code;
        // var errorMessage = error.message;
        props.setLoading(false);
        seterrorMessage(error.code);
        return setOpen(true);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSignIn = () => {
    if (!inputeValue) {
      seterrorMessage("you left the field empty!");
      return setOpen(true);
    }
    location.pathname === "/signin" && isError && setOpen(true);

    location.pathname === "/signin" &&
      !isError &&
      history.push(`${match.url}/password`);
    location.pathname === "/signin/password" &&
      signInWithEmailPassword(inputeValue, passwordValue);
    console.log(location);
  };

  return (
    <Container>
      <Div>
        <InnerDiv>
          <Switch>
            <Route exact path={match.url}>
              <React.Fragment>
                <div
                  style={{ width: "100%", height: "70px", lineHeight: "8px" }}
                >
                  <H3>Login </H3>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "11px",
                    }}
                  >
                    enter your email or mobile number to contnue
                  </p>
                </div>
                <Inpute
                  borderColor={borderColor}
                  type="email"
                  value={inputeValue}
                  onChange={(e) => {
                    // setInputeValue(e.target.value);
                    HandleuserLogin(e.target.value);
                  }}
                />
              </React.Fragment>
            </Route>
            <Route exact path={`${match.url}/password`}>
              <React.Fragment>
                <div
                  style={{ width: "100%", height: "70px", lineHeight: "8px" }}
                >
                  <H3>
                    Enter Password<small> to finish</small>{" "}
                  </H3>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "11px",
                    }}
                  >
                    Welcome {inputeValue} !
                  </p>
                </div>
                <Inpute
                  borderColor={borderColor}
                  type="password"
                  value={passwordValue}
                  onChange={(e) => {
                    // setInputeValue(e.target.value);
                    setBorderColor("silver");
                    setPasswordValue(e.target.value);
                  }}
                />
              </React.Fragment>
            </Route>
          </Switch>
          <Dialog
            open={open}
            // TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                {errorMessage}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
          <SweetButtons
            name="Continue"
            width="98%"
            height="30px"
            handleClick={() => {
              handleSignIn();
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
            handleClick={() => {}}
            color="grey"
          />
        </InnerDiv>
      </Div>
    </Container>
  );
};

export default WithSpinner(LoginScreen);
