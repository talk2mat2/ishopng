import React from "react";
import styled from "styled-components";

const SweetButton = styled.button`
  background-color: orange;
  border: 1px solid grey;
  color: #ffff;

  height: ${(props) => props.height};
  width: ${(props) => props.width || "17rem"};
  border-radius: 4px;
  margin: 5px;
`;
const SweetButtons = (props) => {
  return (
    <SweetButton
      width={props.width}
      height={props.height}
      onClick={() => {
        props.handleClick();
      }}
    >
      {props.name}
    </SweetButton>
  );
};

export default SweetButtons;
