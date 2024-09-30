import React from "react";
import img from "../assets/img/about.png";
import "../styles/about.scss";
import { useTranslation } from "react-i18next"; // Tarjima uchun i18next

const About = () => {
  const { t } = useTranslation(); // Tarjima funksiyasi

  return (
    <div className="about">
      <div className="about_left">
        <h2 className="about_title">{t("about.title")}</h2>
        <p className="about_text">{t("about.text1")}</p>
        <p className="about_text">{t("about.text2")}</p>
        <p className="about_text">{t("about.text3")}</p>
        <p className="about_text">{t("about.text4")}</p>
        <p className="about_text">{t("about.text5")}</p>
        <p className="about_text">{t("about.text6")}</p>
        <p className="about_text">{t("about.text7")}</p>
        <p className="about_text">{t("about.text8")}</p>
        <p className="about_text">{t("about.text9")}</p>
        <p className="about_text">{t("about.text10")}</p>
        <p className="about_text">{t("about.text11")}</p>
      </div>
      <div className="about_right">
        <img src={img} alt="" className="about_img" />
      </div>
    </div>
  );
};

export default About;
