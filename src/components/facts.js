import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Facts = () => {
  return (
    <div className="features_progress">
        <div className="features_title">
          <div className="keyiconbg_2">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="keyicon_2"
            ></FontAwesomeIcon>
          </div>
          <h1>
          COMPANY <span>FACTS</span>
          </h1>
          <span>
          We do love to work and increase our counter numbers, this is what we've done till now
          </span>
          </div>
          </div>
  )
}

export default Facts