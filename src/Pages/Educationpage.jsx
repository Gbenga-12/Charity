import React from "react";
import "../Css/Educationpage.css";
import EducationImg from "../assets/Education.pic.png";
import Header from "../components/Header";

const Educationpage = () => {
  return (
    <div className="EDucation_container_img">
      <Header />
      <div className="Image_Container">
        <img className="childrenImg" src={EducationImg} alt="Education"></img>
      </div>
      <div className="Education_Con">
        <div className="another_con_tst"></div>
      </div>
    </div>
  );
};

export default Educationpage;
