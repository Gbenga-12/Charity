import React from "react";
// import Home from "./Pages/Home";
 import Volunteer from "./Pages/Volunteer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Volunteer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
