import React from "react";
// import Home from "./Pages/Home";
// import Volunteer from "./Pages/Volunteer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Fundraiser from "./Pages/Fundraiser";
import Partners from "./Pages/Partners";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Volunteer from "./Pages/Volunteer";
import Fundraiser from "./Pages/Fundraiser";
import Home from "./Pages/Home";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from "./Pages/Education";
import Health from "./Pages/Health";
// import Services from "./components/Services";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteer" element={<Volunteer />} />
        {/* <Route path="/fundraiser" element={<Fundraiser />} /> */}
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/fundraiser" element={<Fundraiser />} />
        <Route path="/education" element={<Education />} />
        <Route path="/health" element={<Health />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
