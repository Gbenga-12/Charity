import Services from "./Pages/Services";
import Volunteer from "./Pages/Volunteer";
import Fundraiser from "./Pages/Fundraiser";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from "./Pages/Education";
import Health from "./Pages/Health";
// import Services from "./components/Services";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/services" element={<Services />} />
        <Route path="/fundraiser" element={<Fundraiser />} />
        <Route path="/education" element={<Education />} />
        <Route path="/health" element={<Health />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
