import styled from "styled-components";
import React from "react";

const Headerup = styled.div`
  width: auto;
  height: 600px;
  position: relative;

  @media(max-width: 1050px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Test = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  margin-left: 13rem;
  margin-top: 6rem;
  color: rgb(36, 36, 36);

  @media (max-width: 1050px) {
    margin-left: 5rem;
    font-size: 12px;
  }
`;
const Title = styled.h1`
  letter-spacing: 5px;
  font-weight: 700;
  font-size: 3rem;
  line-height: 4px;

  @media (max-width:1050px) {
    font-size: 28px;
    letter-spacing: 1px;
  }
`;

const Desc = styled.p`
  border-radius: 5px;
  background-color: rgb(36, 36, 36);
  color: #ddd;
  padding: 10px;
  letter-spacing: 0.5px;
`;
const Span = styled.span`
  color: rgb(59, 194, 183);
`;

const Subtitle = styled.h6`
  text-align: center;
  font-weight: 500;
  font-size: 15px;
  line-height: 2px;

  @media (max-width: 1050px) {
    font-size: 12px;
  }
`;

const Bottom = styled.h3`
  text-align: center;
  line-height: 4rem;
  font-family: robutu;
  color: rgb(36, 36, 36);
`;

const ArrowLeft = styled.i`
  top: 195px;
  left: 155px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  position: absolute;

  @media(max-width:1050px){
    top: 174px;
    left: 120px;
  }
`;

const ArroRight = styled.i`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  position: absolute;
  top: 195px;
  left: 377px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  position: absolute;

  @media(max-width: 1050px){
    top: 174px;
    left: 274px;
  }
`;

const Headerupp = () => {
  return (
    <div>
      <Headerup>
        <Image src="https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </Headerup>
      <Test>
        <Subtitle>WHAT YOU ARE WAITING FOR ?</Subtitle>
        <Title>LET'S BE CREATIVE !</Title>
        <Desc>
          <Span>U</Span>nique , NEXT GENERATION & HIGHLY FLEXIBLE WORDPRESS
          THEME
        </Desc>
        <Bottom>
          <ArrowLeft>
          </ArrowLeft>
          <Span>START </Span>DOING THAT
          <ArroRight>
          </ArroRight>
        </Bottom>
      </Test>
    </div>
  );
};

export default Headerupp;
