import React from "react";
import styled from "styled-components";
import PriceCard from "./pricecard";

const Team_container = styled.div`
  margin-top: 3rem;
  overflow: hidden;
`;
const Team_offertext = styled.div`
  text-align: center;
  padding-bottom: 3rem;
`;
const Team_top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Title = styled.h1`
line-height: 15px;
font-weight: 700;
color: rgb(36, 36, 36);
font-size: 1.8rem;
`;
const Span = styled.span`
  color: rgb(59, 194, 183);
`;
const Desc = styled.span`
  color: rgb(102, 99, 99);
`;
const Pcard = styled.div`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
`;
const Price = () => {
  return (
    <>
      <Team_container>
        <Team_offertext>
          <Team_top>
            <Title>
              REAL CHEAP <Span>PRICES</Span>
            </Title>
          </Team_top>
          <Desc>
            We offer all our services in real low prices in comparison with
            similar companies.
          </Desc>
        </Team_offertext>
        <Pcard>
          <PriceCard
            planName="STANDARD PLAN"
            cost="19.99"
            desc1="5 Projects"
            desc2="5 GB Storage"
            desc3="Unlimited Users"
            desc4="10 GB Bandwith"
            desc5="Enhanced Security"
          />
          <PriceCard
            planName="PREMIUM PLAN"
            cost="29.99"
            desc1="10 Projects"
            desc2="15 GB Storage"
            desc3="Unlimited Users"
            desc4="20 GB Bandwith"
            desc5="Enhanced Security"
          />
          <PriceCard
            planName="ADVANCED PLAN"
            cost="49.99"
            desc1="15 Projects"
            desc2="30 GB Storage"
            desc3="Unlimited Users"
            desc4="50 GB Bandwith"
            desc5="Enhanced Security"
          />
          <PriceCard
            planName="ULTIMATE PLAN"
            cost="99.99"
            desc1="Unlimited Projects"
            desc2="Unlimited GB Storage"
            desc3="Unlimited Users"
            desc4="Unlimted Bandwith"
            desc5="Enhanced Security"
          />
        </Pcard>
      </Team_container>
    </>
  );
};

export default Price;
