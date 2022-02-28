import React from "react";
import "../styles/header.css";
import Headerup from "./headerup";

const Header = () => {
  return (
    <>
    <Headerup/>
    <div className="header">
      <div className="header_left">
        <img
          style={{ width: "80px", height: "80px" }}
          src="https://media.istockphoto.com/vectors/triangle-logo-upside-down-flipped-abstract-prism-geometric-shape-vector-id1279136583?b=1&k=20&m=1279136583&s=612x612&w=0&h=jmXIsQCcOe-23uv2_FH19AeNK6YHiS_mY7arNgPs_Bc="
          alt="logo img"
        />
        <h1>STARTUPRR</h1>
      </div>
      <div className="header_right">
        <ul>
          <li>HOME</li>
          <li>PORTFOLIO</li>
          <li>BLOG</li>
          <li>PAGES</li>
          <li>FEATURES</li>
          <li>MEGA MENU</li>
          <li>CONTACT</li>
          <li>
            <i
              style={{ color: " rgb(36, 36, 36)", cursor: "pointer" }}
              class="fa fa-search"
            ></i>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Header;
