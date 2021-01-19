import React from "react";
import styled from "styled-components";

const SweetButton = styled.button`
  background-color: ${({ color }) => (color ? color : "orange")};
  border: 1px solid grey;
  color: white;
  position: relative;
  align-self: center;

  height: ${(props) => props.height};
  width: ${(props) => props.width || "17rem"};
  border-radius: 4px;
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.fontSize || null};
`;
const SweetButtons = (props) => {
  return (
    <SweetButton
      fontSize={props.fontSize}
      color={props.color}
      width={props.width}
      height={props.height}
      onClick={() => {
        props.handleClick();
      }}
    >
      {props.children}
      {props.name}
    </SweetButton>
  );
};

export default SweetButtons;
