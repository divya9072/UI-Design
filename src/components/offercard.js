import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Offercard_container = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1050px) {
    flex-wrap: wrap;
  }
`;

const Icon = styled.div`
  font-size: 40px;
  margin-bottom: 15px;
`;

const Offercard_box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 400px;
  height: auto;
  box-sizing: border-box;
  margin: 5px;
  padding: 20px;

  :hover {
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.2);
    transition: all ease 0.3s;
    cursor: pointer;

    ${Icon} {
      color: rgb(59, 194, 183);
    }
  }

  @media (max-width: 1050px) {
    flex-wrap: wrap;
  }
`;

const Title = styled.h4`
  letter-spacing: 0.5px;
  margin-bottom: 8px;
  color: rgb(102, 99, 99);
  font-weight: 700;
  line-height: 20px;

  @media (max-width: 1050px) {
    width: auto;
    height: auto;
  }
`;
const Desc = styled.span`
  font-size: 14px;
`;

const Offercard_button = styled.button`
  width: 110px;
  height: 40px;
  margin-top: 20px;
  border-radius: 6px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  font-size: 700;
  font-weight: 700;
  background-color: white;

  &:hover {
    background-color: rgb(59, 194, 183);
    color: white;
  }
`;

const OfferCard = ({ img, title, description }) => {
  return (
    <div>
      <Offercard_container>
        <Offercard_box>
          <Icon>
            <FontAwesomeIcon
              icon={img}
              // style={{ width: "15%", height: "100%", marginBottom: "1rem" }}
            ></FontAwesomeIcon>
          </Icon>
          <Title>{title}</Title>
          <Desc>{description}</Desc>
          <Offercard_button>READ MORE</Offercard_button>
        </Offercard_box>
      </Offercard_container>
    </div>
  );
};

export default OfferCard;
