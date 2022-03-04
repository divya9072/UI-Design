import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import "../styles/progresscard.css";
const { CircularProgress } = require("@material-ui/core");

const Progress_bar_title = styled.div`
  margin-top: 20px;
  margin-left: -20px;
  font-size: 22px;
  color: rgb(102, 99, 99);
`;
const Title = styled.h6``;
const Outer = styled.div`
  padding: 30px;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Number = styled.div`
  font-weight: 6000px;
  color: white;
  font-size: 22px;
  align-items: center;
  margin-right: -75px;
`;
const Icon = styled.div`
  color: rgb(59, 194, 183) !important;
`;
const ProgressCard = ({ score, title }) => {
  const [values, setValues] = useState(0);
  useEffect(() => {
    setValues(score);
  });

  return (
    <Outer>
      <Inner>
        <Number>{score}%</Number>
        <Icon>
          <CircularProgress
            size="100px"
            variant="determinate"
            value={values}
            color="rgb(59, 194, 183)!important"
          />
        </Icon>
      </Inner>
      <Progress_bar_title>
        <Title>{title}</Title>
      </Progress_bar_title>
    </Outer>
  );
};

export default ProgressCard;
