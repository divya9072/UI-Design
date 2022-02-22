import React from "react";
import "../styles/offer.css";

const OfferCard = ({ img,title, description }) => {
  return (
    <div>
      <div className="offercard_container">
        <div className="offercard_box">
          <img src={img} />
          <h4>{title}</h4>
          <p>{description}</p>
          <button className="offercard_button">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
