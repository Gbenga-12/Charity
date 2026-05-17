import React from "react";
import "../Css/Header.css";
import Headerimg from "../assets/HeaderImg.png";
import Arrow from "../assets/arrow.png";
import Button from "../components/Button";
import Donate from "../assets/Donate button.png";

const Header = () => {
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  return (
    <div className="Header">
      <section className="Header_sec">
        <article className="Header_Img">
          <img src={Headerimg} alt="" />
        </article>
        <article className="Header_Text">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>
              <button onMouseEnter={() => setShow(true)} className="Clemp">
                Our Service
                <img src={Arrow} alt="arrow image" />
              </button>
            </li>
            {show && (
              <ul
                className="Header_Submenu"
                onMouseLeave={() => setShow(false)}
              >
                <li>Water Projects</li>
                <li>Health</li>
                <li>Education</li>
              </ul>
            )}
            <li>
              <button onMouseEnter={() => setShow1(true)} className="Clemp">
                Get Involved
                <img src={Arrow} alt="arrow image" />
              </button>
            </li>
            {show1 && (
              <ul className="Header_Subed" onMouseLeave={() => setShow1(false)}>
                <li>Volunteer</li>
                <li>Start Fundraiser</li>
                <li>Partner with Us</li>
              </ul>
            )}
          </ul>
        </article>
        <article className="Header_But">
          <Button img={<img src={Donate} alt="Donate" />} />
          <button className="Fasho">Sign Up</button>
        </article>
      </section>
    </div>
  );
};

export default Header;
