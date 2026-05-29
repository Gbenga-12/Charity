import React from "react";
import girl from "../assets/GIRL tapping water.png"
import water from "../assets/Childwater.png"
import SafeWater from "../assets/SafeWater.jpg"
import { Link } from "react-router-dom";

const Healthpage = () => {
    const Healthpage = [
      {
        id: 1,
        title: "Clean Water Changes Everything, ",
        subtitle: "Our Vision For Community Health",
        image:girl,
        text: "we believe clean water is the foundation of good health. Our programs focus on preventing waterborne diseases by providing safe, reliable water sources to communities in need. By reducing exposure to contaminated water, we help improve hygiene, strengthen immune health, and create safer environments where families—especially children—can thrive.",
      },
      {
        id: 2,
        title: "Community Health",
        subtitle:"Improving Community Health Together",
        image:water,
        text: "We work with local experts and community members to find the best sustainable solution in each place where we work, whether it’s a well, a piped system, a BioSand Filter, or a system for harvesting rainwater. And with every water point we fund, our partners coordinate sanitation and hygiene training, and establish a local Water Committee to help keep water flowing for years to come.",
      },
      {
        id: 3,
        title: "Safe Drinking Water for All",
        subtitle: "Clean Water Projects",
        image: SafeWater,
        text: "The majority live in isolated rural areas and spend hours every day walking to collect water for their family. Not only does walking for water keep children out of school or take up time that parents could be using to earn money, but the water often carries diseases that can make everyone sick.",
      },
    ];
  
    return (
      <div className="projects-page">
        <div className="sidebar">
          <div className="filter-section">
            <h3>Filter by: Categories</h3>
            <h4>All</h4>
  
            <button></button>
            <button>Health Programs</button>
            <Link to="/health">
              <button>Education Initiative</button>
            </Link>
          </div>
  
          <div className="line"></div>
  
          <div className="filter-section">
            <h3>Sort by: Region</h3>
            <h4>All</h4>
  
            <button>Africa</button>
            <button>Asia</button>
            <button>Latin America</button>
          </div>
        </div>
  
        <div className="content">
          <h2>SHOWING HEALTH PROGRAMS</h2>
  
          {Healthpage.map((Healthpage) => (
            <div className="project-card" key={Healthpage.id}>
              <img src={Healthpage.image} alt={Healthpage.title} />
  
              <div className="project-info">
                <h1>{Healthpage.title}</h1>
                <h3>{Healthpage.subtitle}</h3>
                <p>{Healthpage.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Healthpage;
  