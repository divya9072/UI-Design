import React from "react";
import "../styles/map.css";
const Map = () => {
  return (
    <div className="map">
      <p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6009069.56808649!2d-80.25903546643882!3d42.658897159555785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1645905545266!5m2!1sen!2sin"
          style={{ width: "100%", height: "450px" }}
        ></iframe>
      </p>
      <div className="form">
        <input type="text" className="name" placeholder="Name" />
        <input type="email" className="email" placeholder="Email Address" />
        <input type="text" className="message" placeholder="Message..." />
        <button>SUBMIT MESSAGE</button>
      </div>
    </div>
  );
};

export default Map;
