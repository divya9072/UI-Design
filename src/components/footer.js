import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faSort, faSortUp } from "@fortawesome/free-solid-svg-icons";

import "../styles/footer.css"
const Footer = () => {
  return (
    <div className="footer">
    <div className="features_title">
      <div className="keyiconbg_23">
        <FontAwesomeIcon
          icon={faSortUp}
          className="keyicon_2"
        ></FontAwesomeIcon>
      </div>
      <span style={{fontWeight:'700',fontSize:"15px"}}>
      Copyright @ 2014 Startuprr, All Rights Reserved.
      </span>
    </div>
</div>

  )
}

export default Footer