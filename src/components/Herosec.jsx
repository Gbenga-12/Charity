import Artist from "../assets/Artist.mp4";
import "../Css/Herosec.css";
import Donate from "../assets/Donate button.png";

const Herosec = () => {
  return (
    <div className="Hero_sec">
      <video src={Artist} className="Hero_Video" controls />
      <div className="Hero_Content">
        <div className="Hero_Content1">
          <h2>Safe water for all</h2>
          <h3>Bringing clean and safe water to every person on the planet</h3>
        </div>
        <div className="Hero_Content2">
          <button className="Donate_Button">
            <img src={Donate} alt="Donate" className="Donate_Image" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosec;
