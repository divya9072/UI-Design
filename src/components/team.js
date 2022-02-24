import React from "react";
import "../styles/teams.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
const Team = () => {
  return (
    <div className="team_container">
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
      <div class="container">
        <input type="radio" name="dot" id="one" />
        <input type="radio" name="dot" id="two" />
        <div class="main-card">
          <div class="cards">
            <div class="card">
              <div class="content">
                <div class="img">
                  {/* <div className="bgcontainer">
                    <div className="diamond">
                      <FontAwesomeIcon
                        icon={faSearch}
                        className="topicon"
                      ></FontAwesomeIcon>

                      <FontAwesomeIcon
                        icon={faHeart}
                        className="bottomicon"
                      ></FontAwesomeIcon>
                    </div>
                  </div> */}

                  <img src="logo512.png" alt="" />
                </div>
                <div class="details">
                  <div class="name">
                    <button>ALEXIS SIMPSON</button>
                  </div>
                  <div class="job">Web Designer</div>
                </div>
                <div class="media-icons">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <div class="img">
                  {/* <!--- <img src="images/img2.jpg" alt="">---> */}
                </div>
                <div class="details">
                  <div class="name">
                    <button>ALEXIS SIMPSON</button>
                  </div>
                  <div class="job">UI Designer</div>
                </div>
                <div class="media-icons">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <div class="img">
                  {/* <!--<img src="images/img6.jpeg" alt="">---> */}
                </div>
                <div class="details">
                  <div class="name">
                    <button>ALEXIS SIMPSON</button>
                  </div>
                  <div class="job">Web Devloper</div>
                </div>
                <div class="media-icons">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <div class="img">
                  {/* <!-- <img src="images/img3.jpg" alt="">----> */}
                </div>
                <div class="details">
                  <div class="name">
                    <button>ALEXIS SIMPSON</button>
                  </div>
                  <div class="job">Web Devloper</div>
                </div>
                <div class="media-icons">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="cards">
            <div class="card">
              <div class="content">
                <div class="img">
                  {/* <!---<img src="images/img4.jpg" alt="">---> */}
                </div>
                <div class="details">
                  <div class="name">Appolo Reef</div>
                  <div class="job">Web Designer</div>
                </div>
                <div class="media-icons">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <div class="img">
                  {/* <!--<img src="images/img5.jpg" alt="">----> */}
                </div>
                <div class="details">
                  <div class="name">
                    <button>ALEXIS SIMPSON</button>
                  </div>
                  <div class="job">UI Designer</div>
                </div>
                <div class="media-icons">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <div class="img">
                  {/* <!--<img src="images/img6.jpeg" alt="">---> */}
                </div>
                <div class="details">
                  <div class="name">
                    <button>ALEXIS SIMPSON</button>
                  </div>
                  <div class="job">Web Devloper</div>
                </div>
                <div class="media-icons">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <div class="img">
                  {/* <!--<img src="images/img6.jpeg" alt="">---> */}
                </div>
                <div class="details">
                  <div class="name">
                    <button>ALEXIS SIMPSON</button>
                  </div>
                  <div class="job">Web Devloper</div>
                </div>
                <div class="media-icons">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
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