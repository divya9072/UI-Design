import React from "react";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/slider.css";

const Slider = () => {
  return (
    <div className="slider_container">
      <div className="features_title">
        <div className="keyiconbg_2">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="keyicon_2"
          ></FontAwesomeIcon>
        </div>
      </div>
      <div className="slider_content">
      <button><strong>ALEXIS SIMPSON -</strong><em> CEO & Developer</em></button>
      <p>
        "Lorem ipsum dolor sit amet, laudantium, totam rem. Morbi sagittis,
        sem quis lacinia faucibus, orci ipsum gravida tortor, vel intardum
        micanian ut iucta concauat maana id malactio incumn valutnat auie"
      </p>
      <div className="slider_icon">
          <FontAwesomeIcon
            icon={faSquareCaretLeft}
            className="fa_slide" 
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faSquareCaretRight}
            className="fa_slide"
          ></FontAwesomeIcon>
        </div>
      </div>
   
    </div>
  );
};

export default Slider;
