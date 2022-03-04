import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import ProgressCard from "./progresscard";
import styled from "styled-components";


const Container=styled.div`
background-color: rgb(36, 36, 36);
width: 100%;
margin-top: 4rem;
height: 28rem;
`
const SubContainer=styled.div`
align-items: center;
justify-self: center;
text-align: center;
`

const Keyiconbg_skill=styled.div`
background-color: rgb(59, 194, 183);
width: 30px;
height: 30px;
transform: rotateZ(45deg);
position:relative;
bottom:14px;
border-radius: 3px;
margin-left: 46rem;
`
const Icon=styled.div`
color:white;
font-size: 14px;
transform: rotateZ(-45deg);
align-items: center;
justify-content: center;
margin-top: 9px;
`
const Title=styled.h1`
color:white;
`
const Span=styled.span`
color: rgb(59, 194, 183);
`
const Desc=styled.span`
color:#ddd
`
const Centerskills=styled.div`
margin-top: 45px;
display: flex;
flex-grow: 1;
position: absolute;
left: 280px;
`
const Progress = () => {
  return (
    <>
      <Container>
        <SubContainer>
          <Keyiconbg_skill>
            <Icon>
            <FontAwesomeIcon
              icon={faBriefcase}
            ></FontAwesomeIcon>
            </Icon>
          </Keyiconbg_skill>
          <Title>
            OUR POWERFULL <Span>SKILLS</Span>
          </Title>
          <Desc>
            We are good and experienced at different things and areas where we
            promise about quality of our works!
          </Desc>
        </SubContainer>
        <Centerskills>
          <ProgressCard score={75} title="WEB DESIGN" />
          <ProgressCard title="WEB DEVELOPMENT" score={92} />
          <ProgressCard score={68} title="SPEED OPTIMIZATION" />
          <ProgressCard title="CUSTOMER SUPPORT" score={100} />
          <ProgressCard score={83} title="MARKETING" />
          <ProgressCard title="ADVERTISEMENT" score={50} />
        </Centerskills>
      </Container>
    </>
  );
};

export default Progress;
