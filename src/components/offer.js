import React from "react";
import styled from "styled-components";

import OfferCard from "./offercard";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";


const Title=styled.h1`
line-height: 15px;
font-weight: 700;
color: rgb(36, 36, 36);
font-size: 1.8rem;
`;

const Span=styled.span`
color:  rgb(59, 194, 183);
`;

const Offertext=styled.div`
text-align: center;
padding-top: 4rem;
`;

const Desc=styled.span`
color: rgb(102, 99, 99);

@media (max-width:1050px){
  font-size: 15px;
}

`;

const Offercard=styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3.2rem;

    @media(max-width:1050px){
      flex-wrap:wrap;
    }
`;


const Offer = () => {
  return (
    <>
      <div>
        <Offertext>
          <Title>
            WHAT WE <Span>OFFER</Span>
          </Title>
          <Desc>
            We offer our customers the best services & solutions, this is our
            main service list
          </Desc>
        </Offertext>
        <Offercard>
          <OfferCard
            img={faDesktop}
            title="RESPONSIVE & MULTIPURPOSE"
            description="Proin in magna a ipsum viverra scelerisq enec turp. Nunc
        vestibulum fringilla accumsan ornare quis"
          />
          <OfferCard
            img={faPuzzlePiece}
            title="EASY CUSTOMIZATION"
            description="Proin in magna a ipsum viverra scelerisq enec turp. Nunc
        vestibulum fringilla accumsan ornare quis."
          />
          <OfferCard
            img={faGear}
            title="AWESOME FRIENDLY SUPPORT"
            description="Proin in magna a ipsum viverra scelerisq enec turp, Nunc
             vestibulum fringilla accumsan ornare quis."
          />
        </Offercard>
      </div>
    </>
  );
};

export default Offer;
