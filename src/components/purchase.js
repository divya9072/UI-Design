import { faCartShopping,faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "../styles/purchase.css"
import thumb from "../images/thumbsup.png"

const Purchase = () => {
  return (
    <div className='purchase'>
        <img src={thumb}/>
        <h1>STARTUPRR! We Do <FontAwesomeIcon icon={faHeart} className='h1icon'/> It And Hope You Too</h1>
<button>PURCHASE IT NOW <FontAwesomeIcon icon={faCartShopping} className='shopicon'/></button>
    </div>
  )
}

export default Purchase