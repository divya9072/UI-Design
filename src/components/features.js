import React from "react";
import "../styles/features.css";
import FeatureCard from "./featurecard";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import {faDesktop} from '@fortawesome/free-solid-svg-icons';
import{faPuzzlePiece} from '@fortawesome/free-solid-svg-icons';
import{faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faKey} from '@fortawesome/free-solid-svg-icons';
const Features = () => {
  return (
    <div className="features">
      <div className="features_title">
      <div className='keyiconbg'>
              <FontAwesomeIcon icon={faKey} className='keyicon'></FontAwesomeIcon>
              </div>
        <h1>
          AMAZING <span>FEATURES</span>
        </h1>
        <span>
          With unlimited features that we offer, we promise it's possible to
          make everything that was impossible for you !
        </span>
      </div>
      <div className="features_des">
        <div className="des_left">
          <FeatureCard
          icon={faDesktop}
            title="RESPONSIVE & MULTIPURPOSE"
            desc="Proin in magna a ipsum viverra scelerisq enec turp. Nunc
        vestibulum fringilla accumsan ornare quis"
          />
          <FeatureCard
          icon={faPuzzlePiece}
            title="EASY CUSTOMIZATION"
            desc="Proin in magna a ipsum viverra scelerisq enec turp. Nunc
     vestibulum fringilla accumsan ornare quis."
          />
          <FeatureCard
          icon={faStar}
            title="AWESOME FRIENDLY SUPPORT"
            desc="Proin in magna a ipsum viverra scelerisq enec turp, Nunc
           vestibulum fringilla accumsan ornare quis."
          />
        </div>

        <div className="des_right">
          <div style={{ width: "60%" }}>
            <img src={img1} className="des_img1"></img>
            <img src={img2} className="des_img2"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
