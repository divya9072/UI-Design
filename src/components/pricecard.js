import React from "react";
import styled from "styled-components";

const Priceboxcontainer=styled.div`

`
const Pbutton=styled.button`
font-size: 15px;
padding: 10px;
border-radius: 5px;
border: none;
color: #FFFFFF;
background-color: rgb(36, 36, 36);;
margin-top: -60px;
`
const Pricebox=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 10px;
width: 270px;
height: 470px;
padding: 20px 25px;
box-sizing: border-box;
margin: 18px;
position: relative;
gap: 25px;
border: 1px solid #ddd;

&:hover{
  
 { box-shadow: 5px 5px 60px rgba(0, 0, 0, 0.1);
  transition: all ease 0.3s;
  }
  
  ${Pbutton}{
    background-color:rgb(59, 194, 183);
  }
}
`
const Strong=styled.strong`
`
const Title=styled.h4`
margin-top: -10px;
margin-bottom: 8px;
color: rgb(102, 99, 99);
font-weight: 500;
font-size: 14px;
 ${Strong}{
  font-size: 40px;
  font-weight: 1000;
  font-family: "Garamond Premier Pro Display";
  font-feature-settings: "onum"; /* Activate oldstyle figures */
  src: url("https://use.typekit.net/af/6abdec/00000000000000003b9ade3b/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2");
    color: black;
 }
`
const Hr=styled.hr`
height: 1px;
border: 0;
visibility:visible;
position: absolute;
background-color: rgb(34, 33, 33);
margin-top: 10px;
margin-bottom: 10px;
`
const Pricedetails=styled.div`
border-top: solid 0.5px #ddd;
    border-bottom: solid 0.5px #ddd;
    width: 97%;
`
const Desc=styled.p`
text-align: center;
margin-top: 20px;
margin-bottom: 20px;
color: rgb(112 112 112);
`
const Button=styled.button`
width: 140px;
    height: 40px;
    margin-top: 20px;
    border-radius: 5px;
    border: none;
    background-color: rgb(59, 194, 183);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    &:hover{
      background-color: rgb(36, 36, 36);
    color: #FFFFFF;
    transition: all ease 0.3s;
    }
`

const PriceCard = ({planName,cost,desc1,desc2,desc3,desc4,desc5}) => {
  return (
    <Priceboxcontainer>
    <Pricebox>
      <Pbutton>{planName}</Pbutton>
      <Title>$ <Strong>{cost}</Strong> Monthly</Title>
      <Hr/>
      <Pricedetails>
      <Desc>{desc1}</Desc>
      <Desc>{desc2}</Desc>
      <Desc>{desc3}</Desc>
      <Desc>{desc4}</Desc>
      <Desc>{desc5}</Desc>
      </Pricedetails>
      <Hr/>
      <Button>SIGN UP NOW</Button>
    </Pricebox>
  </Priceboxcontainer>
  )
}

export default PriceCard