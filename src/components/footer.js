import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faSort,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const FooterSection = styled.div`
  background-color: rgb(36, 36, 36);
  width: 100%;
  height: 6rem;
  margin-top: 0px;
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

const Keyicon_2 = styled.div`
  color: rgb(36, 36, 36);
  width: 33px;
  height: 30px;
  padding-top: 3px;
  -webkit-transform: rotateZ(45deg);
  -ms-transform: rotateZ(45deg);
  transform: rotateZ(-45deg);
  position: relative;
  bottom: 0px;
`;
const Desc = styled.span`
  color: rgb(102, 99, 99);
`;


const Footer = () => {
  return (
    <FooterSection>
      <Features_title>
        <Keyiconbg_23>
          <Keyicon_2>
            <FontAwesomeIcon icon={faSortUp}></FontAwesomeIcon>
          </Keyicon_2>
        </Keyiconbg_23>

        <Desc style={{ fontWeight: "700", fontSize: "15px" }}>
          Copyright @ 2014 Startuprr, All Rights Reserved.
        </Desc>
      </Features_title>
    </FooterSection>
  );
};

export default Footer;
