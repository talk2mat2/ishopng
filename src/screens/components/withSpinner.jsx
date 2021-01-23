import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

const Loader = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  position absolute;
  z-index:2;
  opacity:0.6;
`;

const Loadericon = styled.div`
  width: 30px;
  margin: 40vh auto;
  @media (max-width: 768px) {
    margin: 40vh auto;
  }
`;
const WithSpinner = (WrappedComponnent) => {
  return class WithSpinner extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <div style={{ height: "100%", width: "100%" }}>
          {this.props.loading ? (
            <Loader>
              <Loadericon>
                {" "}
                <CircularProgress size={20} color="secondary" />
              </Loadericon>
            </Loader>
          ) : null}
          <WrappedComponnent {...this.props} />
        </div>
      );
    }
  };
};

export default WithSpinner;

// export default WithSpinner;
