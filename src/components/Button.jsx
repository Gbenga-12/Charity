import React from "react";
import "../Css/Button.css";

const Button = (props) => {
  return (
    <div>
      <button className={props.className ? props.className : "Fasho"}>
        {props.text}
        {props.img}
      </button>
    </div>
  );
};

export default Button;
