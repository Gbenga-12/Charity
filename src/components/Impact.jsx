import "../Css/Impact.css";
import rain from "../assets/rain.png";
import boys from "../assets/boys.png";
import bucket from "../assets/bucket.png";
import cam from "../assets/cam.png";
import { useRef } from "react";

const Impact = () => {
  const impactData = [
    {
      id: 1,
      num: "29",
      text: "Countries Reached",
      img: rain,
    },
    {
      id: 2,
      num: "21,641,908",
      text: "People Served",
      img: boys,
    },
    {
      id: 3,
      num: "21,641,908",
      text: "Water Projects",
      img: bucket,
    },
    {
      id: 4,
      num: "$1B+",
      text: "Funds To Program",
      img: cam,
    },
  ];
  const containerref = useRef(null);
  const goLeft = () => {
    containerref.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };
  const goRight = () => {
    containerref.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="Impact_con">
      <div className="Implat">
        <p>Impact Numbers</p>
      </div>
      <div className="ImpactCard" ref={containerref}>
        {impactData.map((data) => (
          <div key={data.id} className="Impact_Card">
            <img src={data.img} alt="impact image" className="blok" />
            <p>{data.num}</p>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Impact;
