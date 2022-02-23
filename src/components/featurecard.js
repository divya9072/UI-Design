import React from "react";
import "../styles/features.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDesktop} from '@fortawesome/free-solid-svg-icons';


const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="featurecard">
      <div className="feature_left">
        <div className="feature_img">
        <FontAwesomeIcon className="features_icons"
        icon={icon}></FontAwesomeIcon>
        </div>
        <div className="feature_text">
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
