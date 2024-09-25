import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import bedImage from "../../assets/img/collectionImg3.png";

const Quality3 = () => {
  AOS.init({
    duration: 500,
    easing: "ease-in-out",
    once: false,
  });
  return (
    <div
      style={{ background: "linear-gradient(90deg, #21474e, #207945)" }}
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
        <button className="quality_btn3">COLLECTION</button>
      </div>
    </div>
  );
};

export default Quality3;
