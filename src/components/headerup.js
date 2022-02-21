import React from "react";
import "../styles/headerup.css";
const Headerup = () => {
  return (
    <div className="headerup_main">
      <div className="headerup">
        <img src="https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
      </div>
      <div className="headerup_test">
        <h6>WHAT YOU ARE WAITING FOR ?</h6>
        <h1>LET'S BE CREATIVE !</h1>
        <p>Unique , NEXT GENERATION & HIGHLY FLEXIBLE WORDPRESS THEME</p>
        <h3>
          <i className="arrow left"></i>START DOING THAT
          <i className="arrow right"></i>
        </h3>
      </div>
    </div>
  );
};

export default Headerup;
