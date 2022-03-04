import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChrome, faDribbble, faFacebookF, faLinkedin, faPinterestP, faStumbleupon, faTwitter, faVimeo, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faRss } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';


const Logos=styled.div`
background-color: rgb(36, 36, 36);
width: 100%;
height: 15rem
`
const Logo_heading=styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4rem;
`
const Image=styled.img`
margin-top: 3rem;
`
const Logo_logo=styled.div`
display: flex;
    align-items: center;
    justify-content: center;
`
const Logokey=styled.div`
border: 1px solid #ddd;
width: 30px;
height: 30px;
border-radius: 5px;
align-items: center;
justify-content: center;
margin-left: 8px;

&:hover{
  background-color: rgb(59, 194, 183);
}
`
const Icon=styled.div`
align-items: center;
justify-content: center;
color: #ddd;

margin-top: 6px;
    margin-left: 7px;
`
const Title=styled.h1`
font-family: robutu;
    color: #ddd;
    font-size: 15px;
    margin-left: 12px;
    margin-top: 3rem;
`
const Logo = () => {
  return (
    <Logos>
        <Logo_heading>
        <Image
          style={{ width: "40px", height: "40px" }}
          src="https://media.istockphoto.com/vectors/triangle-logo-upside-down-flipped-abstract-prism-geometric-shape-vector-id1279136583?b=1&k=20&m=1279136583&s=612x612&w=0&h=jmXIsQCcOe-23uv2_FH19AeNK6YHiS_mY7arNgPs_Bc="
          alt="logo img"
        />
        <Title>STARTUPRR</Title>
        </Logo_heading>
        <Logo_logo>
            <Logokey>
            <Icon>
            <FontAwesomeIcon
              icon={faFacebookF}
            ></FontAwesomeIcon>
            </Icon>
        
            </Logokey>

            <Logokey>
              <Icon>
              <FontAwesomeIcon
              icon={faTwitter}
            ></FontAwesomeIcon>
              </Icon>
            
            </Logokey>

            <Logokey>
              <Icon>
              <FontAwesomeIcon
              icon={faPinterestP}
            ></FontAwesomeIcon>
              </Icon>
           
            </Logokey>

            <Logokey>
              <Icon>
              <FontAwesomeIcon
              icon={faRss}
            ></FontAwesomeIcon>
              </Icon>
           
            </Logokey>

            <Logokey>
              <Icon>
              <FontAwesomeIcon
              icon={faVimeo}
            ></FontAwesomeIcon>
              </Icon>
         
            </Logokey>

            <Logokey>
              <Icon>
              <FontAwesomeIcon
              icon={faYoutube}
            ></FontAwesomeIcon>
              </Icon>
         
            </Logokey>

            <Logokey>
              <Icon> <FontAwesomeIcon
              icon={faLinkedin}
            ></FontAwesomeIcon>
            </Icon>
           
            </Logokey>

            
            <Logokey>
              <Icon>
              <FontAwesomeIcon
              icon={faChrome}
            ></FontAwesomeIcon>
              </Icon>
         
            </Logokey>

            <Logokey>
              <Icon>
              <FontAwesomeIcon
              icon={faYoutube}
            ></FontAwesomeIcon>
              </Icon>
           
            </Logokey>

            
            <Logokey>
              <Icon>
              <FontAwesomeIcon
              icon={faDribbble}
            ></FontAwesomeIcon>
              </Icon>
            
            </Logokey>

            <Logokey>
              <Icon>
              <FontAwesomeIcon
              icon={faStumbleupon}
            ></FontAwesomeIcon>
              </Icon>
         
            </Logokey>

        </Logo_logo>
    </Logos>
  )
}

export default Logo