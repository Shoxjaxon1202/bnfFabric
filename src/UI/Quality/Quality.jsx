import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./quality.scss";
import bedImage from "../../assets/img/collectionImg.png";
import { NavLink } from "react-router-dom";

const Quality = () => {
  AOS.init({
    duration: 500,
    easing: "ease-in-out",
    once: false,
  });
  return (
    <div className="quality-container">
      <div data-aos="zoom-in-right" className="quality-text">
        <h1>100%</h1>
        <p>Material quality</p>
      </div>
      <div className="bed-image">
        <img data-aos="zoom-in-down" src={bedImage} alt="Bed" />
      </div>
      <div data-aos="zoom-in-down" className="quality-description">
        <h2>Buxoro tabiiy mahsuloti</h2>
        <p>
          has been a company that produces cotton fabrics for use all over the
          world for many years
        </p>
        <NavLink  to={"/collection"}>
          <button className="quality_btn">COLLECTION</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Quality;
