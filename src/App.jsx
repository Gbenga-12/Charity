import React from "react";
import Home from "./Pages/Home";
import Volunteer from "./Pages/Volunteer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fundraiser from "./Pages/Fundraiser";
import Partners from "./Pages/Partners";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/fundraiser" element={<Fundraiser />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
