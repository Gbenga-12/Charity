import React from "react";
import "../Css/Header.css";
import Headerimg from "../assets/HeaderImg.png";
import Arrow from "../assets/arrow.png";
import Button from "../components/Button";
import Donate from "../assets/Donate button.png";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>About</li>
            <li>
              <Link
                to="/services"
                onClick={() => setShow(true)}
                className="Clemp"
              >
                Our Service
                <img src={Arrow} alt="arrow image" />
              </Link>
            </li>
            {show && (
              <ul className="Header_Submenu" onClick={() => setShow(false)}>
                <li Link to="/">
                  Water Projects
                </li>
                <li>Health</li>
                <li>Education</li>
              </ul>
            )}
            <li>
              <button onClick={() => setShow1(true)} className="Clemp">
                Get Involved
                <img src={Arrow} alt="arrow image" />
              </button>
            </li>
            {show1 && (
              <ul className="Header_Subed" onClick={() => setShow1(false)}>
                <Link to="/volunteer">
                  {" "}
                  <li>Volunteer</li>
                </Link>
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
        <FiAlignJustify className="Ham" />
      </section>
    </div>
  );
};

export default Header;
