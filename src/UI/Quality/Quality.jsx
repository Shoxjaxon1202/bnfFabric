import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./quality.scss";
import bedImage from "../../assets/img/collectionImg.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; // useTranslation ni import qilish

const Quality = () => {
  const { t } = useTranslation(); // useTranslation dan t funksiyasini olish

  AOS.init({
    duration: 500,
    easing: "ease-in-out",
    once: false,
  });

  return (
    <div className="quality-container">
      <div data-aos="zoom-in-right" className="quality-text">
        <h1>100%</h1>
        <p>{t("quality.materialQuality")}</p> {/* Tarjima qo'shildi */}
      </div>
      <div className="bed-image">
        <img data-aos="zoom-in-down" src={bedImage} alt="Bed" />
      </div>
      <div data-aos="zoom-in-down" className="quality-description">
        <h2>{t("quality.productName")}</h2> {/* Tarjima qo'shildi */}
        <p>{t("quality.description")}</p> {/* Tarjima qo'shildi */}
        <NavLink to={"/collection"}>
          <button className="quality_btn">
            {t("quality.collectionButton")}
          </button>{" "}
          {/* Tarjima qo'shildi */}
        </NavLink>
      </div>
    </div>
  );
};

export default Quality;
