import React from 'react'
import '../styles/logo.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChrome, faDribbble, faFacebookF, faLinkedin, faPinterestP, faStumbleupon, faTwitter, faVimeo, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faRss } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
const Logo = () => {
  return (
    <div className='logo'>
        <div className='logo_heading'>
        <img
          style={{ width: "40px", height: "40px" }}
          src="https://media.istockphoto.com/vectors/triangle-logo-upside-down-flipped-abstract-prism-geometric-shape-vector-id1279136583?b=1&k=20&m=1279136583&s=612x612&w=0&h=jmXIsQCcOe-23uv2_FH19AeNK6YHiS_mY7arNgPs_Bc="
          alt="logo img"
        />
        <h1>STARTUPRR</h1>
        </div>
        <div className='logo_logo'>
            <div className='logo_key'>
            <FontAwesomeIcon
              icon={faFacebookF}
              className="logoicon"
            ></FontAwesomeIcon>
            </div>

            <div className='logo_key'>
            <FontAwesomeIcon
              icon={faTwitter}
              className="logoicon"
            ></FontAwesomeIcon>
            </div>

            <div className='logo_key'>
            <FontAwesomeIcon
              icon={faPinterestP}
              className="logoicon"
            ></FontAwesomeIcon>
            </div>

            <div className='logo_key'>
            <FontAwesomeIcon
              icon={faRss}
              className="logoicon"
            ></FontAwesomeIcon>
            </div>

            <div className='logo_key'>
            <FontAwesomeIcon
              icon={faVimeo}
              className="logoicon"
            ></FontAwesomeIcon>
            </div>

            <div className='logo_key'>
            <FontAwesomeIcon
              icon={faYoutube}
              className="logoicon"
            ></FontAwesomeIcon>
            </div>

            <div className='logo_key'>
            <FontAwesomeIcon
              icon={faLinkedin}
              className="logoicon"
            ></FontAwesomeIcon>
            </div>

            
            <div className='logo_key'>
            <FontAwesomeIcon
              icon={faChrome}
              className="logoicon"
            ></FontAwesomeIcon>
            </div>

            <div className='logo_key'>
            <FontAwesomeIcon
              icon={faYoutube}
              className="logoicon"
            ></FontAwesomeIcon>
            </div>

            
            <div className='logo_key'>
            <FontAwesomeIcon
              icon={faDribbble}
              className="logoicon"
            ></FontAwesomeIcon>
            </div>

            <div className='logo_key'>
            <FontAwesomeIcon
              icon={faStumbleupon}
              className="logoicon"
            ></FontAwesomeIcon>
            </div>

        </div>
    </div>
  )
}

export default Logo