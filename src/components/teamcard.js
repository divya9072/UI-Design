import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "../styles/teams.css";
import {
  faDribbble,
  faFacebookF,
  faTwitter,
  faVimeo,
} from "@fortawesome/free-brands-svg-icons";
const TeamMemberCard = ({ name, post, email, phone, img }) => {
  return (
    <div class="card">
      <div class="content">
        <div class="img">
          <div className="team-bgcontainer">
            <div class="team-media-icons">
              <a>
                <FontAwesomeIcon icon={faFacebookF} className="team-topicon" />
              </a>
              <a>
                <FontAwesomeIcon icon={faTwitter} className="team-topicon" />
              </a>
              <a>
                <FontAwesomeIcon icon={faDribbble} className="team-topicon" />
              </a>
              <a>
                <FontAwesomeIcon icon={faVimeo} className="team-topicon" />
              </a>
            </div>
          </div>

          <img src={img} className="imgage" alt="" />
        </div>
        <div class="details">
          <div class="name_team">
            <button>{name}</button>
          </div>
          <div class="job">{post}</div>
        </div>
        <hr />
        <div className="contact-icon">
          <div className="email-detail">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{
                marginTop: "5px",
                color: "rgb(102, 99, 99)",
                fontSize: "17px",
              }}
            />
            <b style={{ marginLeft: "10px", fontWeight: "normal" }}>{email}</b>
            <br />
          </div>
          <div className="phone-detail">
            <FontAwesomeIcon
              icon={faPhone}
              style={{
                marginTop: "5px",
                color: "rgb(102, 99, 99)",
                fontSize: "17px",
              }}
            />
            <b style={{ marginLeft: "10px", fontWeight: "normal" }}>{phone}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
