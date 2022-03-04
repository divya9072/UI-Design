import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
// import "../styles/facts.css";

const Fact_progress = styled.div`
  background-color: rgb(36, 36, 36);
  width: 100%;
  margin-top: 4rem;
  height: 30rem;
`;
const Features_title = styled.div`
  align-items: center;
  justify-self: center;
  text-align: center;
`;
const Keyiconbg_23 = styled.div`
  background-color: rgb(59, 194, 183);
  width: 30px;
  height: 30px;
  transform: rotateZ(45deg);
  position: relative;
  bottom: 14px;
  border-radius: 3px;
  margin-left: auto;
  margin-right: auto;
`;
const Keyicon = styled.div`
  color: white;
  font-size: 16px;
  transform: rotateZ(-45deg);
  align-items: center;
  justify-content: center;
  padding-right: 5px  ;
  margin-top: 9px;
`;

const Title = styled.h1`
    margin-bottom: 7px;
    color: white;
    font-weight: 600;
    font-size: 34px;
    margin-top: 0;
    padding-top: 2rem;
`

const Span = styled.span`
  color: rgb(59, 194, 183);
`;
const Desc = styled.span`
    color: rgb(102, 99, 99);`;

const Companycenter=styled.div`
align-items: center;
  justify-content: center;
  `
const Batchnumbers=styled.div`
display: flex;
  padding-left: 18rem;
  gap: 146px;
`
const Number=styled.h1`
margin-bottom: 30px;
margin-top: 35px;
font-size: 95px;
font-weight: 500;
font-family: "Garamond Premier Pro Display";
font-feature-settings: "onum";
src: url("https://use.typekit.net/af/6abdec/00000000000000003b9ade3b/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2");
color: #ddd;

&:hover{
  color: rgb(59, 194, 183);
  cursor:pointer
}
`
const Batchicons=styled.div`
display: flex;
gap: 255px;
margin-left: 21.5rem;
color: rgb(59, 194, 183);
font-size: 20px;
`
const Batchtitle=styled.div`
display: flex;
align-items: center;
position: absolute;
gap: 120px;
margin-left: 17.5rem;
color: rgb(102, 99, 99);
`
const Topic=styled.h6`
font-size: 14px;
`
const Sample_bottom=styled.div`
display: flex;
align-items: center;
justify-content: space-around;
background: rgb(59, 194, 183);
height: 5rem;
`
const Note=styled.h4`
font-size: 15px;
    color: #ddd;
`

const Sample_bottom_btn=styled.div`
align-items: center;
  justify-content: center;
`
const Button=styled.button`
width: 145px;
height: 35px;
border-radius: 5px;
margin-left: 1rem;
border: none;
font-size: 10px;
font-weight: 800;
background-color: #ddd;
color: rgb(102, 99, 99);

&:hover{
  background-color: rgb(36, 36, 36);
  color: #ddd;
}
`


const Facts = () => {
  return (
    <>
      <Fact_progress>
        <Features_title>
          <Keyiconbg_23>
            <Keyicon>
              <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
            </Keyicon>
          </Keyiconbg_23>
          <Title>
            COMPANY <Span>FACTS</Span>
          </Title>
          <Desc>
            We do love to work and increase our counter numbers, this is what
            we've done till now
          </Desc>
        </Features_title>

        <Companycenter>
          <Batchnumbers>
            <Number>218</Number>
            <Number>360</Number>
            <Number>175</Number>
            <Number>167</Number>
          </Batchnumbers>
          <Batchicons>
            <FontAwesomeIcon icon={faCheckSquare} />
            <FontAwesomeIcon icon={faFileUpload} />
            <FontAwesomeIcon icon={faTicket} />
            <FontAwesomeIcon icon={faThumbsUp} />
          </Batchicons>
          <Batchtitle>
            <Topic>COMPLETED PROJECT</Topic>
            <Topic>
              HOUSE OF WORKS/<i>MONTH</i>
            </Topic>
            <Topic>SOLVED TICKETS</Topic>
            <Topic style={{ marginLeft: "30px" }}>SATISFIED CLIENTS</Topic>
          </Batchtitle>
        </Companycenter>
      </Fact_progress>

      <Sample_bottom>
        <Note>ARE YOU SATISFIED WITH UNLIMITED FEATURES THAT WE OFFER?</Note>
        <Sample_bottom_btn>
          <Button>PURCHASE IT NOW</Button>
          <Button>CONTACT US NOW</Button>
        </Sample_bottom_btn>
      </Sample_bottom>
    </>
  );
};

export default Facts;
