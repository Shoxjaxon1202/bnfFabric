import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Router from "../../Router/Router";
import BottomFooter from "../Footer/BottomFooter";

const Loyout = () => {
  return (
    <div>
      <Navbar />
      <div className="routes">
        <Router />
      </div>
      <Footer />
      <BottomFooter />
    </div>
  );
};

export default Loyout;
