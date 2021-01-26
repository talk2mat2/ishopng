import styled from "styled-components";
import React from "react";
const Div = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px grey;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
`;

const P = styled.p`
  color: grey;
  padding: 3px;
  font-size: 13px;
  padding-left: 4px;
  padding: 3px;
`;
const H3 = styled.h3`
  color: grey;
`;
const FLagContent = () => {
  return (
    <Div>
      <H3>USA</H3>
      <P>you are shopping with -USD- $</P>
      <P>happy shopping on our platform :)</P>
    </Div>
  );
};

export default FLagContent;
