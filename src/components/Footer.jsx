import React from "react";
import "../Css/Footer.css";
import Blok from "../assets/Blok.png";
import Donate from "../assets/Donate button.png";
import Frame from "../assets/Frame 60.png";
import Horse from "../assets/horse.png";
import Dollar from "../assets/dollar.png";

const Footer = () => {
  return (
    <div className="Footer">
      <section className="Seventy">
        <article className="Footer_Logo">
          <img src={Blok} alt="WaterAid Logo" />

          <img src={Donate} alt="Donate" className="Donate" />
        </article>
        <article className="Footer_Text">
          <div className="Footer_Text1">
            <ul>
              <h2>Quick Links</h2>
              <li>Water Projects</li>
              <li>Health</li>
              <li>Education</li>
              <li>Become a Volunteer</li>
              <li>Start Fundraiser</li>
              <li>Partner with Us</li>
            </ul>
            <ul>
              <h2>Site Map</h2>
              <li>Home</li>
              <li>About</li>
              <li> Our Service</li>
              <li> Get Involved</li>
            </ul>
            <ul>
              <h2>Policies</h2>
              <li>Privacy Policy</li>
              <li>Responsible Disclosure Process</li>
              <li>100% Model</li>
              <li>
                <img src={Frame} alt="Frame" />
              </li>
            </ul>
          </div>
          <div className="Footer_Text2">
            <h2>Safe water for all</h2>
            <h2>Bringing clean and safe water to every person on the planet</h2>

            <img src={Horse} alt="Horse" />
          </div>
        </article>
      </section>
      <section className="Thirty">
        <h2>
          © 2026 | charity: water Donation Processing Center, 230 Franklin Rd.,
          Ste. 11-II, Franklin, TN 37064 | c/o TC Citroen Wells Limited, 5th
          Floor, 3 Dorset Rise, London EC4Y 8EN | Charity Global, Inc., a US 501
          (c)(3) public charity, EIN 22-3936753 and an ANBI in the Netherlands,
          RSIN 826151656. Charity Global UK Limited is a dual-qualified charity
          registered in England and Wales, charity number 1169228. Charity
          Global UK Limited is wholly owned by Charity Global, Inc.
        </h2>
        <img src={Dollar} alt="Dollar" />
      </section>
    </div>
  );
};

export default Footer;
