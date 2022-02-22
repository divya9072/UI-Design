import React from "react";
import "../styles/features.css";

const FeatureCard = ({ img, title, desc }) => {
  return (
    <div className="featurecard">
      <div className="feature_left">
        <div className="feature_img">
          <img src="logo512.png" />
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
