import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import bedImage from "../../assets/img/collectionImg2.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Quality2 = () => {
  const { t } = useTranslation();

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
        <p>{t("quality.materialQuality")}</p> {/* Tilga mos ravishda matn */}
      </div>
      <div className="bed-image">
        <img data-aos="zoom-in-down" src={bedImage} alt="Bed" />
      </div>
      <div data-aos="zoom-in-down" className="quality-description">
        <h2>{t("quality.productName")}</h2>{" "}
        {/* Tilga mos ravishda mahsulot nomi */}
        <p>{t("quality.description")}</p> {/* Tilga mos ravishda ta'rif */}
        <NavLink to={"/collection"}>
          <button className="quality_btn2">
            {t("quality.collectionButton")}
          </button>{" "}
          {/* Tilga mos ravishda tugma matni */}
        </NavLink>
      </div>
    </div>
  );
};

export default Quality2;
