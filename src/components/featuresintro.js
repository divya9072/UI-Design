import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faLifeRing } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 90px;
`;
const Wrapper = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;
const Cardcontainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  row-gap: 40px;
`;
const Card = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 300px;
  flex: 1;

  &:hover {
    transform: scale(1.05);
  }
`;
const Cardicon = styled.div`
  flex: 1;
`;
const Icon = styled.div`
  font-size: 25px;
  margin-top: 5px;

  &:hover {
    color: rgb(59, 194, 183);
  }
`;
const Cardcontent = styled.div`
  flex: 4;
`;

const Title = styled.h4`
  font-size: 15px;
  margin: 0;
  color: rgb(102, 99, 99);
`;
const SubTitle = styled.span`
  font-size: 11px;
  color: rgb(180, 175, 175);
`;

const Desc = styled.p`
  font-size: 14px;
  color: rgb(112 112 112);
`;

const FeaturesIntro = () => {
  return (
    <Container>
      <Wrapper>
        <Cardcontainer>
          <Card>
            <Cardicon>
              <Icon>
                <FontAwesomeIcon icon={faDesktop}></FontAwesomeIcon>
              </Icon>
            </Cardicon>
            <Cardcontent>
              <Title>RESPONSIVE & MULTIPURPOSE</Title>
              <SubTitle>Desktops,Tablets & Phones</SubTitle>
              <Desc>
                This is one of the best technology in the market which one can
                use
              </Desc>
            </Cardcontent>
          </Card>

          <Card>
            <Cardicon>
              <Icon>
                <FontAwesomeIcon icon={faLifeRing}></FontAwesomeIcon>
              </Icon>
            </Cardicon>
            <Cardcontent>
              <Title>RESPONSIVE & MULTIPURPOSE</Title>
              <SubTitle>Desktops,Tablets & Phones</SubTitle>
              <Desc>
                This is one of the best technology in the market which one can
                use
              </Desc>
            </Cardcontent>
          </Card>

          <Card>
            <Cardicon>
              <Icon>
                <FontAwesomeIcon
                  icon={faPuzzlePiece}
                ></FontAwesomeIcon>
              </Icon>
            </Cardicon>
            <Cardcontent>
              <Title>RESPONSIVE & MULTIPURPOSE</Title>
              <SubTitle>Desktops,Tablets & Phones</SubTitle>
              <Desc>
                This is one of the best technology in the market which one can
                use
              </Desc>
            </Cardcontent>
          </Card>

          <Card>
            <Cardicon>
              <Icon>
                <FontAwesomeIcon
                  icon={faStar}
                ></FontAwesomeIcon>
              </Icon>
            </Cardicon>
            <Cardcontent>
              <Title>RESPONSIVE & MULTIPURPOSE</Title>
              <SubTitle>Desktops,Tablets & Phones</SubTitle>
              <Desc>
                This is one of the best technology in the market which one can
                use
              </Desc>
            </Cardcontent>
          </Card>

          <Card>
            <Cardicon>
              <Icon>
                <FontAwesomeIcon
                  icon={faList}
                ></FontAwesomeIcon>
              </Icon>
            </Cardicon>
            <Cardcontent>
              <Title>RESPONSIVE & MULTIPURPOSE</Title>
              <SubTitle>Desktops,Tablets & Phones</SubTitle>
              <Desc>
                This is one of the best technology in the market which one can
                use
              </Desc>
            </Cardcontent>
          </Card>

          <Card>
            <Cardicon>
              <Icon>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                ></FontAwesomeIcon>
              </Icon>
            </Cardicon>
            <Cardcontent>
              <Title>RESPONSIVE & MULTIPURPOSE</Title>
              <SubTitle>Desktops,Tablets & Phones</SubTitle>
              <Desc>
                This is one of the best technology in the market which one can
                use
              </Desc>
            </Cardcontent>
          </Card>
        </Cardcontainer>
      </Wrapper>
    </Container>
  );
};

export default FeaturesIntro;
