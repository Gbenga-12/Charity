import React from "react";
import "./styles/Fundraiser.css";
import Header from "../Components/Header";
import Heros from "../Components/Heros";
import Funds from "../Components/Funds";
import Corporatepartners from "../Components/Corporatepartners";
import Footer from "../Components/Footer";
import glass from "../assets/glass.png";

const Fundraiser = () => {
  return (
    <main className="fundraiser_container">
      <section className="fundraiser_herosection">
        <Header />
        <Heros />
        <Funds title="Start a Fundraiser" image={glass} />
        <Corporatepartners />
        <Footer />
      </section>
    </main>
  );
};

export default Fundraiser;
