import React from "react";
// import "../styles/features.css";
import FeaturesIntroCard from "./featuresintrocard";

const FeaturesIntro = () => {
  return (
    <div className="features">
      <div className="features_des">
          <FeaturesIntroCard
            icon='faStar'
            title="RESPONSIVE & MULTIPURPOSE"
            desc="Proin in magna a ipsum viverra scelerisq enec turp. Nunc
        vestibulum fringilla accumsan ornare quis"
          />
          {/* <FeaturesIntroCard
            title="EASY CUSTOMIZATION"
            desc="Proin in magna a ipsum viverra scelerisq enec turp. Nunc
     vestibulum fringilla accumsan ornare quis."
          />
          <FeaturesIntroCard
            title="AWESOME FRIENDLY SUPPORT"
            desc="Proin in magna a ipsum viverra scelerisq enec turp, Nunc
           vestibulum fringilla accumsan ornare quis."
          /> */}
      </div>
    </div>
  );
};

export default FeaturesIntro;
