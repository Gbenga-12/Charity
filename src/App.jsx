import Services from "./Pages/Services";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
