import React from "react";
import Home from "./Pages/Home";
import Volunteer from "./Pages/Volunteer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fundraiser from "./Pages/Fundraiser";
import Partners from "./Pages/Partners";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Volunteer from "./Pages/Volunteer";
import Fundraiser from "./Pages/Fundraiser";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Educationpage from "./Pages/Educationpage";
import Educationdetails from "./Pages/Education details";
// import Services from "./components/Services";

const App = () => {
  return (
    <BrowserRouter>
    {/* < Educationpage /> */}
    {/* <Educationdetails /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/fundraiser" element={<Fundraiser />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/fundraiser" element={<Fundraiser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
