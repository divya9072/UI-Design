import React from "react";
import "../styles/offer.css";
import OfferCard from "./offercard";
import {faDesktop} from '@fortawesome/free-solid-svg-icons';
import {faPuzzlePiece} from '@fortawesome/free-solid-svg-icons';
import {faGear} from '@fortawesome/free-solid-svg-icons';

const Offer = () => {
  return (
    <>
      <div className="offer">
        <div className="offertext">
          <h1>
            WHAT WE <span>OFFER</span>
          </h1>
          <span>
            We offer our customers the best services & solutions, this is our
            main service list
          </span>
        </div>
        <div className="offer-card">
          <OfferCard
          img={faDesktop}
            title="RESPONSIVE & MULTIPURPOSE"
            description="Proin in magna a ipsum viverra scelerisq enec turp. Nunc
        vestibulum fringilla accumsan ornare quis"
          />
          <OfferCard
            img={faPuzzlePiece}
            title="EASY CUSTOMIZATION"
            description="Proin in magna a ipsum viverra scelerisq enec turp. Nunc
        vestibulum fringilla accumsan ornare quis."
          />
          <OfferCard
            img={faGear}
            title="AWESOME FRIENDLY SUPPORT"
            description="Proin in magna a ipsum viverra scelerisq enec turp, Nunc
             vestibulum fringilla accumsan ornare quis."
          />
        </div>
      </div>
    </>
  );
};

export default Offer;
