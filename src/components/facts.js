import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import "../styles/facts.css";
const Facts = () => {
  return (
    <>
      <div className="fact_progress">
        <div className="features_title">
          <div className="keyiconbg_23">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="keyicon_2"
            ></FontAwesomeIcon>
          </div>
          <h1>
            COMPANY <span>FACTS</span>
          </h1>
          <span>
            We do love to work and increase our counter numbers, this is what
            we've done till now
          </span>
        </div>
    


      <div className='company-center'>
        <div className='batch-numbers'>
          <h1>218</h1>
          <h1>360</h1>
          <h1>175</h1>
          <h1>167</h1>
        </div>
        <div className='batch-icons'>
         
        <FontAwesomeIcon icon={faCheckSquare}/>
        <FontAwesomeIcon icon={faFileUpload}/>
        <FontAwesomeIcon icon={faTicket}/>
        <FontAwesomeIcon icon={faThumbsUp} />
        </div>
        <div className='batch-title'>
          <h6>COMPLETED PROJECT</h6>
          <h6>HOUSE OF WORKS/<i>MONTH</i></h6>
          <h6>SOLVED TICKETS</h6>
          <h6 style={{marginLeft:'30px'}}>SATISFIED CLIENTS</h6>
        </div>
      </div>
      </div>







      <div className="sample_bottom">
        <h4>ARE YOU SATISFIED WITH UNLIMITED FEATURES THAT WE OFFER?</h4>
        <div className="sample_bottom_btn">
          <button>PURCHASE IT NOW</button>
          <button>CONTACT US NOW</button>
        </div>
      </div>
    </>
  );
};

export default Facts;
