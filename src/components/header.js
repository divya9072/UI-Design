import React from "react";
import styled from "styled-components";
import Headerup from "./headerup";

const Headers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12rem;
  border-bottom: 2px solid #ddd;
`;

const Header_left = styled.div`
  display: flex;
  flex: 1;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
`;

const Logo = styled.h1`
  font-family: robutu;
  color: rgb(36, 36, 36);
`;
const Header_right = styled.div``;

const Lists = styled.ul`
  display: flex;
  list-style-type: none;
`;

const List = styled.li`
  padding: 15px;
  color: rgb(36, 36, 36);
  font-weight: 700;
  font-size: 15px;

  :hover {
    background-color: rgb(59, 194, 183);
    cursor: pointer;
  }
`;

const Search=styled.i`
color: rgb(36, 36, 36);
 cursor: "pointer";
`;
const Header = () => {
  return (
    <>
      <Headerup />
      <Headers>
        <Header_left>
          <Image
            src="https://media.istockphoto.com/vectors/triangle-logo-upside-down-flipped-abstract-prism-geometric-shape-vector-id1279136583?b=1&k=20&m=1279136583&s=612x612&w=0&h=jmXIsQCcOe-23uv2_FH19AeNK6YHiS_mY7arNgPs_Bc="
            alt="logo img"
          />
          <Logo>STARTUPRR</Logo>
        </Header_left>
        <Header_right>
          <Lists>
            <List>HOME</List>
            <List>PORTFOLIO</List>
            <List>BLOG</List>
            <List>PAGES</List>
            <List>FEATURES</List>
            <List>MEGA MENU</List>
            <List>CONTACT</List>
            <List>
              <Search>
              <i class="fa fa-search"></i>
              </Search>
            </List>
          </Lists>
        </Header_right>
      </Headers>
    </>
  );
};

export default Header;
