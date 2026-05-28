import React from "react";
import Header from "../components/Header";
import Heros from "../components/Heros";
import Funds from "../components/Funds";
import Corporatepartners from "../components/Corporatepartners";
import Footer from "../components/Footer";
import partnersimg from "../assets/partnersimg.png";

const Partners = () => {
  return (
    <main>
      <section>
        <Header />
        <Heros />
        <Funds title="Partner With Us" image={partnersimg} />
        <Corporatepartners />
        <Footer />
      </section>
    </main>
  );
};

export default Partners;
