import React from "react";
import "../styles/offer.css";
import OfferCard from "./offercard";

const Offer = () => {
  return (
    <>
      <div className="offer">
        <div className="offertext">
          <h1>
            WHAT WE <span>OFFER</span>
          </h1>
          <p>
            We offer our customers the best services & solutions, this is our
            main service list
          </p>
        </div>
        <div className="offer-card">
          <OfferCard
            img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO8AAADTCAMAAABeFrRdAAAAaVBMVEX39/cAAAD////6+vrOzs7j4+Pq6upBQUF3d3ePj4/Z2dm0tLTn5+dra2vd3d17e3tdXV1GRkarq6uWlpaJiYk7OztYWFi6urrw8PDGxsZxcXGhoaErKyuDg4MdHR1PT08ODg4qKioXFxf98aFfAAADPUlEQVR4nO3dbXOiMBiFYXiipVbEFyqi1nZ3//+PXLXLU8eISBcScnqur0wL9wQFE2aIIiIiIiLqlzGCwpjmWkmnh8UyCd+yOKzGcr/YyLaIkSw394pNufB9gJ1LxlKbm/k+uF5sa4LN2PeR9WRUE/zu+8D6kt76DMvc92H15uPGAMOezSdbe4Dl4PugelTYA2x+6dbdKH0KX/pyMYKllfui21bH+zAIstWmzfUJbTbVpmXt9Tk4squi8usoyatNe5zer0GcW72TatO0+UdFKL4+pM/sZW/w2KvYC4C9ir0A2KvYC4C9ir0A2KvYC4C9ir0A2KvYC4C9ir0A2KvYC4C9ir0A2KvYC4C9ir0A2KvYC4C9ir0A2KvYC4C9ir0A2KvYC4C9ir0A2KvYC4C9ir0A2KvYC4C9ir0A2KvYC4C9ir0A2KvYC4C9ir0A2KvYC4C9ir0A2KvYC4C9ir0A2KvYC4C9ir0A2KvYC4C96gf3orw+xRjJHujNRzimD/RCYi97kbCXvUjYy14k7GVvn4q52zdJ++1dlCISPTvco9fe4vMd4i5fOOy1d1zNoLjbpc/epNq3zJzt02fvQntfne3TZ+/6h41vnH1+fk3pbpdee5fn72fjcHg9X3+T7Hj9TV3ecdi9efMfdWi9WDrdn/V+Z7Nyun/XXq3ebfMfBWxlLRI5/LL0ILN6pfB9TD16uz6dL9/dDmhv90by5vuo+mPXXi6WwtncXNKWve/j6ol18a2C3d5zuLKryT0GT5v/Ojh5be4x+MnhPbwTRXYn9/SjJc0/fB9jZ5JJJk1P3xiRKB0jSEtprP3XjOGhViIi+iGOF/SHAVxCWk2M2dNMwWk18WlNI4an1aLYAqC3zTLCjXm10MjvFr0xwOe3TW6chh5ssubIC7dn1gLSck6sfq4pFK1ygz+h5dCytwh6gKX9KmvAtxzmWxPacxNYsd78b9bfyI3j92kU0O8HU+53s5P/eWAhOf+HWZ4Ofqg7XnXbDn2EzZ9Oe+PSd9B9nT8GMvBfxJ0/5jMZ9ifYdL3CeG91bwBM2nHvaNjnc9fP+A5/wkP2HX5DTwY+uidi0q5Egx/dMy5oEhERERFh+AuT9nGppdE/IAAAAABJRU5ErkJggg=="
            title="RESPONSIVE & MULTIPURPOSE"
            description="Proin in magna a ipsum viverra scelerisq enec turp. Nunc
        vestibulum fringilla accumsan ornare quis"
          />
          <OfferCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGbE2iVEjAkOOAbzkdIaEbEpa0vkaoWPuxqNbkmh4tAcNrySPT33-L6oeFdfYQf9vLmU0&usqp=CAU
            "
            title="EASY CUSTOMIZATION"
            description="Proin in magna a ipsum viverra scelerisq enec turp. Nunc
        vestibulum fringilla accumsan ornare quis."
          />
          <OfferCard
            img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Sh3Eg_gcTK90zt28NJ57MSkM08jlSH9wUQ&usqp=CAU'
            title="AWESOME FRIENDLY SUPPORT"
            description="Proin in magna a ipsum viverra scelerisq enec turp, Nunc
             vestibulum fringilla accumsan ornare quis."
          />
        </div>
      </div>
    </>
  );
};

export default Offer;
