import { React, useState, useEffect } from "react";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
// import "../styles/slider.css";
import { quotes } from "../data";
import styled from "styled-components";
import { Icon } from "@material-ui/core";

const Features_title = styled.div`
  align-items: center;
  justify-self: center;
  text-align: center;
`;
const Keyiconbg_2 = styled.div`
  background-color: rgb(36, 36, 36);
  width: 30px;
  height: 30px;
  transform: rotateZ(45deg);
  position: relative;
  bottom: 14px;
  border-radius: 3px;
  margin-left: auto;
  margin-right: auto;
`;
const Keyicon_2 = styled.div`
  color: #fff;

  height: 30px;
  -webkit-transform: rotateZ(45deg);
  -ms-transform: rotateZ(45deg);
  transform: rotateZ(-45deg);
  position: relative;
`;
const Slider_container = styled.div`
  background-color: rgb(59, 194, 183);
  width: 100%;
  margin-top: 4rem;
  height: 19rem;
`;
const Slider_content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;
  text-align: center;

  @media (max-width: 1050px) {
    margin-top: 1rem;
  }
`;
const Strong = styled.strong``;
const Em = styled.em``;
const Button = styled.button`
  height: 2.9rem;
  width: 16rem;
  border: none;
  border-radius: 4px;

  ${Strong} {
    font-weight: 800;
    color: rgb(59, 194, 183);
  }

  ${Em} {
    font-size: 12px;
    color: rgb(102, 99, 99);
  }
`;
const Desc = styled.p`
  color: #ddd;
  font-size: 18px;
  width: 63rem;
  margin-top: 2rem;
  line-height: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 1050px) {
    width: 30rem;
    font-size: 14px;
  }
`;
const Slider_icon = styled.div`
  display: flex;
`;
const Fa_slide = styled.div`
  font-size: 32px;
  color: rgb(36, 36, 36);
  margin-left: 7px;

  &:hover {
    color: #ddd;
  }
`;
const Slider = () => {
  const [count, setCount] = useState(0);
  const [para, setPara] = useState(quotes[count]);

  useEffect(() => {
    setPara(quotes[count]);
  }, [count]);
  const lefticon = () => {
    if (count === 0) {
      setCount(quotes.length - 1);
    } else {
      setCount(count - 1);
    }
  };

  const righticon = () => {
    if (count === quotes.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };
  return (
    <Slider_container>
      <Features_title>
        <Keyiconbg_2>
          <Keyicon_2>
            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
          </Keyicon_2>
        </Keyiconbg_2>
      </Features_title>
      <Slider_content>
        <Button>
          <Strong>{para?.name} -</Strong>
          <Em>{para?.desig}</Em>
        </Button>
        <Desc>{para?.quote} </Desc>
        <Slider_icon>
          <Fa_slide>
            <FontAwesomeIcon
              icon={faSquareCaretLeft}
              onClick={lefticon}
            ></FontAwesomeIcon>
          </Fa_slide>
          <Fa_slide>
            <FontAwesomeIcon
              icon={faSquareCaretRight}
              onClick={righticon}
            ></FontAwesomeIcon>
          </Fa_slide>
        </Slider_icon>
      </Slider_content>
    </Slider_container>
  );
};

export default Slider;
