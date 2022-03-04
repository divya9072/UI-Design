import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import thumb from "../images/thumbsup.png";

const Purchases = styled.div`
  background: url("https://ak.picdn.net/shutterstock/videos/23943748/thumb/1.jpg");
  width: 100%;
  height: 8rem;
  margin-top: 2.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 85px;
`;
const Button = styled.button`
  width: 148px;
  height: 38px;
  border-radius: 5px;
  margin-left: 17rem;
  border: none;
  font-size: 10px;
  font-weight: 800;
  background-color: rgb(59, 194, 183);
  color: #ddd;
  display: flex;
  padding-top: 11px;
  padding-left: 10px;

  &:hover {
    background-color: rgb(36, 36, 36);
    color: #ddd;
  }

  @media (max-width: 1050px) {
    margin-left: 1rem;
    font-size: 8px;
    margin-right: 1rem;
  }
`;

const Icon = styled.div``;

const Title = styled.h1`
  font-size: 25px;
  color: rgb(36, 36, 36);
  margin-left: 2rem;
  display: flex;
  @media (max-width: 1050px) {
    font-size: 15px;
  }
  ${Icon} {
    color: rgb(59, 194, 183);
    font-size: 25px;
    margin-left: 1rem;
    margin-right: 1rem;

    @media (max-width: 1050px) {
      font-size: 17px;
      margin-left: 1px;
      margin-right: 1px;
    }
  }
`;

const ShopIcon = styled.div`
  font-size: 15px;
  margin-left: 7px;
  color: #ddd;

  @media (max-width: 1050px) {
    font-size: 10px;
  }
`;
const Purchase = () => {
  return (
    <Purchases>
      <Image src={thumb} />
      <Title>
        STARTUPRR! We{" "}
        <Icon>
          <FontAwesomeIcon icon={faHeart} />
        </Icon>{" "}
        It And Hope You Too
      </Title>
      <Button>
        PURCHASE IT NOW
        <ShopIcon>
          <FontAwesomeIcon icon={faCartShopping} />
        </ShopIcon>
      </Button>
    </Purchases>
  );
};

export default Purchase;
