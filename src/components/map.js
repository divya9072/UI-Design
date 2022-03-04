import React from "react";
import styled from "styled-components";
// import "../styles/map.css";

const Mapsection = styled.div`
  overflow: hidden;
  position: relative;
`;
const Image = styled.p`
  position: relative;
  margin-top: 0;
  margin-bottom: -6px;
`;
const Form = styled.div`
  position: absolute;
  width: 21%;
  padding: 1.5rem;
  top: 50%;
  left: 0;
  transform: translate(10px, -50%);
  height: 45%;
  border-radius: 7px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  align-items: center;
  justify-content: center;

  @media (max-width: 1050px) {
    width: 35%;
  }
`;
const Input = styled.input`
  width: 80%;
  height: 100px;
  border-radius: 10px;
  border: 1px solid #ddd;
  margin-top: 1rem;
  padding: 10px;
  font-style: italic;
`;
const Button = styled.button`
  width: 85%;
  height: 46px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(59, 194, 183);
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  color: whitesmoke;
  font-size: 13.5px;
  font-weight: 700;
  letter-spacing: 1px;
  border: none;

  &:hover {
    background-color: rgb(36, 36, 36);
    color: #ddd;
  }
`;
const Map = () => {
  return (
    <Mapsection>
      <Image>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6009069.56808649!2d-80.25903546643882!3d42.658897159555785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1645905545266!5m2!1sen!2sin"
          style={{ width: "100%", height: "450px" }}
        ></iframe>
      </Image>

      <Form>
        <Input type="text"  placeholder="Name" />
        <Input type="email"  placeholder="Email Address" />
        <Input type="text"  placeholder="Message..." />
        <Button>SUBMIT MESSAGE</Button>
      </Form>
    </Mapsection>
  );
};

export default Map;
