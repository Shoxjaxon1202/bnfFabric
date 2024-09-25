import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS faylini import qilish

import "./intro.scss";
import introImg from "../../assets/img/introImg.png";

const Intro = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
    });
  }, []);

  AOS.init({
    duration: 1400,
    easing: "ease-in-out",
    once: false, // Faqat bir marta animatsiya bo'lsinmi yoki qayta-qayta
  });
  return (
    <div data-aos="zoom-out" className="product-container">
      <div className="product-image">
        <img className="intro_img" src={introImg} alt="Product Image" />
      </div>
      <div data-aos="zoom-in-left" className="product-info">
        <h2>Bukhara</h2>
        <h3>Natural</h3>
        <h1>PRODUCT</h1>
      </div>
    </div>
  );
};

export default Intro;
