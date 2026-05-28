import React from "react";
import Girl from "../assets/Girl.png";
import Boy from "../assets/Boy.png";
import Women from "../assets/Women.png";
import "../Css/Program.css";

const Programs = () => {
  const containerref = React.useRef(null);
  const ProgramData = [
    {
      id: 1,
      img: Girl,
      text: "We deploy your donations to the field, where these partners go to work rehabilitating old water systems, building new ones, or completing sanitation and hygiene training.",
      button: "Water Projects",
    },
    {
      id: 2,
      img: Boy,
      text: "Safe drinking water is much more than a basic human need. It is the foundation for improved health, education, and economic opportunity. Where clean water flows, communities flourish.",
      button: "Health Programs",
    },
    {
      id: 3,
      img: Women,
      text: "We are on a mission to end the water crisis and it all starts with a generation who believes in a better world. With kids who are going to lead the charge. It starts with you.",
      button: "Education Initiatives",
    },
  ];
  return (
    <div>
      <div className="Program_container">
        <div className="Program_text">
          <p>Impact Numbers</p>
          <h2> Programs Overview</h2>
        </div>
        <div className="ProgramCard" ref={containerref}>
          {ProgramData.map((data) => (
            <div key={data.id} className="Program_Card">
              <img src={data.img} alt="impact image" className="blok" />

              <div className="Program_info">
                <p>{data.text}</p>
                <button>{data.button}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
