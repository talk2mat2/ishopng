import React from "react";
import styled from "styled-components";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

const Container = styled.div`
  flex-direction: row;
  display: flex;
  margin-right: 10px;
`;
const Ratings = (props) => {
  const { rating } = props;
  return (
    <Container>
      {rating > 0 ? (
        <StarIcon style={{ color: "orange" }} fontSize="small" />
      ) : (
        <StarBorderIcon style={{ color: "orange" }} fontSize="small" />
      )}
      {rating > 1 ? (
        <StarIcon style={{ color: "orange" }} fontSize="small" />
      ) : (
        <StarBorderIcon style={{ color: "orange" }} fontSize="small" />
      )}
      {rating > 2 ? (
        <StarIcon style={{ color: "orange" }} fontSize="small" />
      ) : (
        <StarBorderIcon style={{ color: "orange" }} fontSize="small" />
      )}
      {rating > 3 ? (
        <StarIcon style={{ color: "orange" }} fontSize="small" />
      ) : (
        <StarBorderIcon style={{ color: "orange" }} fontSize="small" />
      )}
      {rating > 4 ? (
        <StarIcon style={{ color: "orange" }} fontSize="small" />
      ) : (
        <StarBorderIcon style={{ color: "orange" }} fontSize="small" />
      )}
    </Container>
  );
};

export default Ratings;
