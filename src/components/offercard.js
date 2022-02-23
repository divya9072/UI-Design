import React from "react";
import "../styles/offer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const OfferCard = ({ img,title, description }) => {
  return (
    <div>
      <div className="offercard_container">
        <div className="offercard_box">
          <FontAwesomeIcon icon={img} className='offercard_icons'></FontAwesomeIcon>
          <h4>{title}</h4>
          <span>{description}</span>
          <button className="offercard_button">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
