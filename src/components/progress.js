import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import "../styles/progress.css";
import ProgressCard from "./progresscard";

const Progress = () => {
  return (
    <>
      <div className="features_progress">
        <div className="features_title">
          <div className="keyiconbg_skill">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="keyicon_2"
            ></FontAwesomeIcon>
          </div>
          <h1>
            OUR POWERFULL <span>SKILLS</span>
          </h1>
          <span>
            We are good and experienced at different things and areas where we
            promise about quality of our works!
          </span>
        </div>
        <div className="center-skills">
          <ProgressCard score={75} title="WEB DESIGN" />
          <ProgressCard title="WEB DEVELOPMENT" score={92} />
          <ProgressCard score={68} title="SPEED OPTIMIZATION" />
          <ProgressCard title="CUSTOMER SUPPORT" score={100} />
          <ProgressCard score={83} title="MARKETING" />
          <ProgressCard title="ADVERTISEMENT" score={50} />
        </div>
      </div>
    </>
  );
};

export default Progress;
