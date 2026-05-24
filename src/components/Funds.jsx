import React from "react";
import "../Css/Funds.css";
// import glass from "../assets/glass.png";
import vol from "../assets/vol.png";

const Funds = ({ text, subText, image }) => {
    const dataProps = {
     text: text,
     subText: subText,
     image: image,
    };

  return (
    <div className="fundraiser-container">
      <div className="fundraiser-form-section">
        <p className="quick-start">Quick Start</p>

        <h1> Volunteer</h1>

        <div className="line"></div>

        <form className="fundraiser-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Type here" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Type here" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Type here"></textarea>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="agree" />

            <label htmlFor="agree">
              I agree to the terms and conditions and understand I can be
              contacted for future correspondence and initiatives from the
              organization.
            </label>
          </div>

          <button type="submit">Send us a message</button>
        </form>
      </div>

     
      <div className="fundraiser-image-section">
        <img src={vol} alt="fundraiser"/>
      </div>
    </div>
  );
};

export default Funds;