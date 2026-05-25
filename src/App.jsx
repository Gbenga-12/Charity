import React from "react";
// import Home from "./Pages/Home";
 import Volunteer from "./Pages/Volunteer";
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
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Volunteer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
