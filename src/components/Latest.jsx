import Keg from "../assets/Keg.png";
import Old from "../assets/Old.png";
import React from "react";
import "../Css/Latest.css";

const Latest = () => {
  const containerref = React.useRef(null);
  const LatestData = [
    {
      id: 1,
      toptitle: "Field story",
      title: "Do the Water Walk",
      descrption:
        "Millions of kids around the world walk hours every day to find and collect dirty water for their families. This takes up time they could be spending at school or at home doing their homework. By doing a water walk, you can experience what it's like to walk just a fraction of this distance while carrying a 40 pound Jerry Can of water. ",
      button: "Learn more",
      img: Keg,
    },
    {
      id: 2,
      toptitle: "Field story",
      title: "Clean Water Changes Everything",
      descrption:
        "696 million people in the world live without clean water. The majority live in isolated rural areas and spend hours every day walking to collect water for their family. Not only does walking for water keep children out of school or take up time that parents could be using to earn money, but the water often carries diseases.",
      button: "Learn more",
      img: Old,
    },
  ];
  return (
    <div>
      <div className="Latest_container">
        <div className="Latest_text">
          <p>Features</p>
          <h2> Latest Stories</h2>
        </div>
        <div className="LatestCard" ref={containerref}>
          {LatestData.map((data) => (
            <div key={data.id} className="Latest_Card">
              <img src={data.img} alt="impact image" className="blok" />

              <div className="Latest_info">
                <p className="Topy"> {data.toptitle}</p>
                <h2>{data.title}</h2>
                <p>{data.descrption}</p>
                <button>{data.button}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;
