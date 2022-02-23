import React, { useState } from "react";
import "../styles/sample.css";
import { images } from "../components/imgdata";
import { allImages } from "../components/imgdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Sample = () => {
  const [click, setClick] = useState(true);
  const clicked = () => {
    setClick(!click);
    console.log(click);
  };

  return (
    <div className="container">
      <div className="sample_offertext">
        <h1>
          SAMPLE <span>WORKS</span>
        </h1>
        <span>
          Let's take a look at some of the best of our works here , we love them
          and hope you too
        </span>
      </div>
      <div className="photosection">
        <div className="photocontainer">
          {click
            ? images.map((item) => (
                <div className="photo">
                  <div className="bgcontainer">
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="topicon"
                    ></FontAwesomeIcon>
                    <h6>Corporate Brochure</h6>
                    <p>Illustration/Print</p>
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="bottomicon"
                    ></FontAwesomeIcon>
                  </div>
                  <img
                    className="onephoto"
                    src={`/Images/${item.img}`}
                    alt="not available"
                  ></img>
                </div>
              ))
            : allImages.map((item) => (
                <div className="photo">
                  <div className="bgcontainer">
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="topicon"
                    ></FontAwesomeIcon>
                    <h6>Corporate Brochure</h6>
                    <p>Illustration/Print</p>
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="bottomicon"
                    ></FontAwesomeIcon>
                  </div>
                  <img
                    className="onephoto"
                    src={`/Images/${item.img}`}
                    alt="not available"
                  ></img>
                </div>
              ))}
        </div>
      </div>
      <div className="longbutton">
        {click ? (
          <button onClick={clicked}>VIEW ALL WORKS</button>
        ) : (
          <button onClick={clicked}>MINIMIZE</button>
        )}
      </div>
    </div>
  );
};
export default Sample;
