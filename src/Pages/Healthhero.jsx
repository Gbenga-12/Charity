import React from "react";
import Health from "../assets/Heath pics.png";
import Header from "../components/Header";

const Healthhero = () => {
  return (
    <div className="Health_container_img">
      <Header />
      <div className="Image_Container">
        <img className="childrenImg" src={Health} alt="Health"></img>
      </div>
      <div className="Health_Con">
        <div className="another_con_tst"></div>
      </div>
    </div>
  );
};

export default Healthhero;
