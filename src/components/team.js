import React from "react";
import "../styles/teams.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import TeamMemberCard from "./teamcard";
const Team = () => {
  return (
    <div className="team_container" style={{ overflow: "hidden !important" }}>
      <div className="team_offertext">
        <div className="team_top">
          <FontAwesomeIcon
            icon={faSquareCaretLeft}
            className="fa_left"
          ></FontAwesomeIcon>
          <h1>
            TEAM <span>MEMBERS</span>
          </h1>
          <FontAwesomeIcon
            icon={faSquareCaretRight}
            className="fa_left"
          ></FontAwesomeIcon>
        </div>

        <span>
          We're some creative people with powerful knowledge & awesome skills
          behind the scene bringing you the bests
        </span>
      </div>

      <div className=".body">
        <div class="teamcontain">
          <input type="radio" name="dot" id="one" />
          <input type="radio" name="dot" id="two" />
          <div class="main-card">
            <div class="cards">
              <TeamMemberCard
                name="ALEXIS SIMPSON"
                post="CEO & Developer"
                email="abc@gmail.com"
                phone="+91 123456789"
                img="./Images/member1.jpg"
              />
              <TeamMemberCard
                name="FRANKIL BRAR"
                post="User Interface Designer"
                email="abc@gmail.com"
                phone="+1 911 (77)3456"
                img="./Images/member5.jpg"
              />
              <TeamMemberCard
                name="RAHUL JAIN"
                post="IT Specialist"
                email="abc@gmail.com"
                phone="+1 911 (77)3456"
                img="./images/member4.jpg"
              />
              <TeamMemberCard
                name="ASHLIY LENNON"
                post="Sales Manager"
                email="abc@gmail.com"
                phone="+1 911 (77)3456"
                img="./images/member3.jpg"
              />
            </div>

            <div class="cards">
              <TeamMemberCard
                name="ALEXIS SIMPSON"
                post="WEB DEVELOPER"
                email="abc@gmail.com"
                phone="+1 911 (77)3456"
                img="./images/member2.jpg"
              />
              <TeamMemberCard
                name="ALEXIS SIMPSON"
                post="WEB DEVELOPER"
                email="abc@gmail.com"
                phone="+1 911 (77)3456"
                img="./images/member1.jpg"
              />
              <TeamMemberCard
                name="ALEXIS SIMPSON"
                post="WEB DEVELOPER"
                email="abc@gmail.com"
                phone="+1 911 (77)3456"
                img="./images/member5.jpg"
              />
              <TeamMemberCard
                name="ALEXIS SIMPSON"
                post="WEB DEVELOPER"
                email="abc@gmail.com"
                phone="123456789"
                img="./images/member4.jpg"
              />
            </div>
          </div>
          <div class="button">
            <label for="one" class=" active one"></label>
            <label for="two" class="two"></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
