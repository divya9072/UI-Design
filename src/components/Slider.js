import {React,useState,useEffect} from "react";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/slider.css";
import {quotes} from '../data';

const Slider = () => {
  const [count, setCount] = useState(0)
  const [para,setPara] = useState(quotes[count]);
  
  useEffect(()=>{
    setPara(quotes[count])
},[count])
const lefticon = () => {
      if(count === 0) {
          setCount(quotes.length-1)
      }
      else {
          setCount(count-1)
      }
}

const righticon = () => {
  if(count === quotes.length-1) {
      setCount(0)
  }
  else {
      setCount(count+1)
  }
 }
  return (
    <div className="slider_container">
      <div className="features_title">
        <div className="keyiconbg_2">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="keyicon_2"
          ></FontAwesomeIcon>
        </div>
      </div>
      <div className="slider_content">
      <button><strong>{para?.name} -</strong><em>{para?.desig}</em></button>
      <p>{para?.quote } </p>
      <div className="slider_icon">
          <FontAwesomeIcon
            icon={faSquareCaretLeft}
            className="fa_slide" 
            onClick={lefticon}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faSquareCaretRight}
            className="fa_slide"
            onClick={righticon}
          ></FontAwesomeIcon>
        </div>
      </div>
   
    </div>
  );
};

export default Slider;
