import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import bedImage from "../../assets/img/collectionImg2.png";

const Quality2 = () => {
  AOS.init({
    duration: 500,
    easing: "ease-in-out",
    once: false,
  });
  return (
    <div
      style={{ background: "linear-gradient(to right, #59407F, #433060)" }}
      className="quality-container">
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
        <button className="quality_btn2">COLLECTION</button>
      </div>
    </div>
  );
};

export default Quality2;
