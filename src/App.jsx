import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Educationpage from "./Pages/Educationpage";
import Educationdetails from "./Pages/Education details";
import Services from "./components/Services";

const App = () => {
  return (
    <BrowserRouter>
    {/* < Educationpage /> */}
    {/* <Educationdetails /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        {/* < Educationpage /> */}
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
