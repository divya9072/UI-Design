import React, { useState } from "react";
import { images } from "../components/imgdata";
import { allImages } from "../components/imgdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Longbutton = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
const Button = styled.button`
  background-color: rgb(59, 194, 183);
  border: none;
  height: 20px;
  font-size: 11px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
  padding-top: 13px;
  padding-bottom: 27px;
  padding-left: 380px;
  padding-right: 380px;
  letter-spacing: 1px;

  @media (max-width: 1050px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 58px;
  margin-bottom: 110px;
`;
const Sample_offertext = styled.div`
  text-align: center;
  padding-top: 1rem;
`;
const Heading = styled.h1`
  line-height: 15px;
  font-weight: 700;
  color: rgb(36, 36, 36);
  font-size: 1.8rem;
`;

const Desc = styled.span`
  color: rgb(102, 99, 99);
`;
const Span = styled.span`
  color: rgb(59, 194, 183);
`;
const Photosection = styled.div`
  margin-top: 50px;
  flex: 3;
`;
const Photocontainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3px;
  margin: 2px;
  margin-left: auto;
  margin-right: auto;
`;

const Bgcontainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  visibility: hidden;
`;

const Photo = styled.div`
  width: 250px;
  height: 225px;
  position: relative;

  &:hover {
    ${Bgcontainer} {
      visibility: visible;
      background: rgb(59, 194, 183);
      opacity: 0.8;
    }
  }
`;

const Topicon = styled.div`
  margin-top: 50px;
`;
const Title = styled.h6`
  margin-bottom: 0;
`;

const SubTitle = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
`;
const Bottomicon = styled.div``;

const Onephoto = styled.img`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const Sample = () => {
  const [click, setClick] = useState(true);
  const clicked = () => {
    setClick(!click);
    console.log(click);
  };

  return (
    <Container>
      <Sample_offertext>
        <Heading>
          SAMPLE <Span>WORKS</Span>
        </Heading>
        <Desc>
          Let's take a look at some of the best of our works here , we love them
          and hope you too
        </Desc>
      </Sample_offertext>
      <Photosection>
        <Photocontainer>
          {click
            ? images.map((item) => (
                <Photo>
                  <Bgcontainer>
                    <Topicon>
                      <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </Topicon>
                    <Title>Corporate Brochure</Title>
                    <SubTitle>Illustration/Print</SubTitle>
                    <Bottomicon>
                      <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                    </Bottomicon>
                  </Bgcontainer>
                  <Onephoto
                    src={`/Images/${item.img}`}
                    alt="not available"
                  ></Onephoto>
                </Photo>
              ))
            : allImages.map((item) => (
                <Photo>
                  <Bgcontainer>
                    <Topicon>
                      <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </Topicon>
                    <Title>Corporate Brochure</Title>
                    <SubTitle>Illustration/Print</SubTitle>
                    <Bottomicon>
                      <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                    </Bottomicon>
                  </Bgcontainer>
                  <Onephoto
                    src={`/Images/${item.img}`}
                    alt="not available"
                  ></Onephoto>
                </Photo>
              ))}
        </Photocontainer>
      </Photosection>
      <Longbutton>
        {click ? (
          <Button onClick={clicked}>VIEW ALL WORKS</Button>
        ) : (
          <Button onClick={clicked}>MINIMIZE</Button>
        )}
      </Longbutton>
    </Container>
  );
};
export default Sample;
