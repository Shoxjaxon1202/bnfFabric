import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import bedImage from "../../assets/img/collectionImg3.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Quality3 = () => {
  const { t } = useTranslation();

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
        <p>{t("quality.materialQuality")}</p> {/* Material sifati */}
      </div>
      <div className="bed-image">
        <img data-aos="zoom-in-down" src={bedImage} alt="Bed" />
      </div>
      <div data-aos="zoom-in-down" className="quality-description">
        <h2>{t("quality.productName")}</h2> {/* Buxoro tabiiy mahsuloti */}
        <p>{t("quality.description")}</p> {/* Matn ta'rifi */}
        <NavLink to={"/collection"}>
          <button className="quality_btn3">
            {t("quality.collectionButton")}
          </button>{" "}
          {/* KOLLEKSIYA */}
        </NavLink>
      </div>
    </div>
  );
};

export default Quality3;
