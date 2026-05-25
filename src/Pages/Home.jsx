import React from "react";
import Header from "../components/Header";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Educationpage from "./Educationpage";

const Home = () => {
  return (
    <div>
      <Header />
       <Services /> 
      <Projects /> 
       <Educationpage /> 
    </div>
  );
};

export default Home;
