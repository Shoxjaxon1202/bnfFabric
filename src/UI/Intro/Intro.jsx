import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS faylini import qilish
import { useTranslation } from "react-i18next"; // i18next'dan tarjima

import "./intro.scss";
import introImg from "../../assets/img/introImg.png";

const Intro = () => {
  const { t } = useTranslation(); // Tarjima funksiyasini olish

  useEffect(() => {
    AOS.init({
      duration: 500, // Animatsiya davomiyligi (ms)
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
        <h2>{t("intro.title")}</h2> {/* Tarjima qo'shildi */}
        <h3>{t("intro.subtitle")}</h3> {/* Tarjima qo'shildi */}
        <h1>{t("intro.product")}</h1> {/* Tarjima qo'shildi */}
      </div>
    </div>
  );
};

export default Intro;
