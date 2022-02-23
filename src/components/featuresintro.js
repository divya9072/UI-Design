import React from "react";
// import "../styles/features.css";
import "../styles/featuresintro.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece} from '@fortawesome/free-solid-svg-icons';
import {faDesktop} from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {faList} from '@fortawesome/free-solid-svg-icons';
import {faLifeRing} from '@fortawesome/free-solid-svg-icons';

const FeaturesIntro = () => {
  return (
    <div className='container'>
    <div className='wrapper'>
    <div className='cardcontainer'>

         <div className='card'>
         <div className='cardicon'>
         <FontAwesomeIcon icon={faDesktop} className='desktopicon'></FontAwesomeIcon> 
         </div>
         <div className='cardcontent'>
             <h4>RESPONSIVE & MULTIPURPOSE</h4>
             <span>Desktops,Tablets & Phones</span>
             <p>This is one of the best technology in the market which one can use</p>
         </div>
         </div>

         <div className='card'>
         <div className='cardicon'>
         <FontAwesomeIcon icon={faLifeRing} className='desktopicon'></FontAwesomeIcon> 
         </div>
         <div className='cardcontent'>
             <h4>RESPONSIVE & MULTIPURPOSE</h4>
             <span>Desktops,Tablets & Phones</span>
             <p>This is one of the best technology in the market which one can use</p>
         </div>
         </div>

         <div className='card'>
         <div className='cardicon'>
         <FontAwesomeIcon icon={faPuzzlePiece} className='desktopicon'></FontAwesomeIcon> 
         </div>
         <div className='cardcontent'>
             <h4>RESPONSIVE & MULTIPURPOSE</h4>
             <span>Desktops,Tablets & Phones</span>
             <p>This is one of the best technology in the market which one can use</p>
         </div>
         </div>

         <div className='card'>
         <div className='cardicon'>
         <FontAwesomeIcon icon={faStar} className='desktopicon'></FontAwesomeIcon> 
         </div>
         <div className='cardcontent'>
             <h4>RESPONSIVE & MULTIPURPOSE</h4>
             <span>Desktops,Tablets & Phones</span>
             <p>This is one of the best technology in the market which one can use</p>
         </div>
         </div>

         <div className='card'>
         <div className='cardicon'>
         <FontAwesomeIcon icon={faList} className='desktopicon'></FontAwesomeIcon> 
         </div>
         <div className='cardcontent'>
             <h4>RESPONSIVE & MULTIPURPOSE</h4>
             <span>Desktops,Tablets & Phones</span>
             <p>This is one of the best technology in the market which one can use</p>
         </div>
         </div>

         <div className='card'>
         <div className='cardicon'>
         <FontAwesomeIcon icon={faShoppingCart} className='desktopicon'></FontAwesomeIcon> 
         </div>
         <div className='cardcontent'>
             <h4>RESPONSIVE & MULTIPURPOSE</h4>
             <span>Desktops,Tablets & Phones</span>
             <p>This is one of the best technology in the market which one can use</p>
         </div>
         </div>
         

    </div>
    </div>
    
</div>
  );
};

export default FeaturesIntro;
