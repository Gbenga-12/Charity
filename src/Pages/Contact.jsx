import React from "react";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

import telephoneIcon from "../assets/telephoneIcon.png";
import officeIcon from "../assets/officeIcon.png";
import Header from "../Components/Header";
import Boyglass from "../assets/Boyglass.png";
import contblack from "../assets/contblack.png";
import "./styles/Contact.css";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div className="contact-container">
      <Header />
      <div className="hero-section">
        <img src={Boyglass} alt="contact hero image" />

        <button className="contact-btn">Contact Us</button>
      </div>

      <div className="contact-content">
        <div className="left-side">
          <p className="small-title">Send a Message</p>

          <h1>Contact Form</h1>

          <div className="line"></div>

          <form className="contact-form">
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
              <input type="checkbox" />

              <p>
                I agree to the terms and conditions and understand I can be
                contacted for future correspondence and initiatives from the
                organization.
              </p>
            </div>

            <button className="send-btn">Send us a message</button>
          </form>
        </div>

        <div className="right-side">
          <p className="small-title">Other Ways To Reach Us</p>

          <h1>Social Media Channels</h1>

          <div className="line"></div>

          <h2 className="follow-text">Follow Us</h2>

          <div className="social-icons">
            <FaXTwitter />
            <FaFacebook />
            <FaInstagram />
            <FaSnapchat />
            <FaYoutube />
            <FaLinkedin />
          </div>

          <div className="right-image">
            <img src={contblack} alt="contact image" />
          </div>

          <div className="contact-info">
            <div className="info-box">
              <img src={telephoneIcon} className="info-icon" />
              <p>
                Tel: 1 (646) 688-2323
                <br />
                Fax: 1 (929) 367-4827
              </p>
            </div>

            <div className="info-box">
              <img src={officeIcon} className="info-icon" />

              <p>
                Donation Processing Center
                <br />
                230 Franklin Rd., Ste. 11-II
                <br />
                Franklin, TN
                <br />
                37064
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
