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
        <Route path="/services" element={<Services />} />
        <Route path="/fundraiser" element={<Fundraiser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
