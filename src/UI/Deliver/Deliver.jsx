import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS faylini import qilish
import { useTranslation } from "react-i18next"; // useTranslation ni import qilish
import "./deliver.scss";

import img1 from "../../assets/img/icon1.svg";
import img2 from "../../assets/img/icon2.svg";
import img3 from "../../assets/img/icon3.svg";
import img4 from "../../assets/img/icon4.svg";

const Deliver = () => {
  const { t } = useTranslation(); // useTranslation dan t funksiyasini olish

  AOS.init({
    duration: 500,
    easing: "ease",
    once: false,
  });

  return (
    <div className="deliver">
      <div data-aos="zoom-in-up" className="deliver_cards">
        <div data-aos="zoom-in-up" className="deliver_card">
          <div className="deliver_left">
            <img src={img1} alt="" className="deliver_img" />
          </div>
          <div className="deliver_right">
            <h4 className="deliver_title">{t("deliver.freeShipping")}</h4>
            <p className="deliver_text">{t("deliver.freeShippingText")}</p>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="deliver_card">
          <div className="deliver_left">
            <img src={img2} alt="" className="deliver_img" />
          </div>
          <div className="deliver_right">
            <h4 className="deliver_title">{t("deliver.moneyBack")}</h4>
            <p className="deliver_text">{t("deliver.moneyBackText")}</p>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="deliver_card">
          <div className="deliver_left">
            <img src={img3} alt="" className="deliver_img" />
          </div>
          <div className="deliver_right">
            <h4 className="deliver_title">{t("deliver.onlineSupport")}</h4>
            <p className="deliver_text">{t("deliver.onlineSupportText")}</p>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="deliver_card">
          <div className="deliver_left">
            <img src={img4} alt="" className="deliver_img" />
          </div>
          <div className="deliver_right">
            <h4 className="deliver_title">{t("deliver.securePayment")}</h4>
            <p className="deliver_text">{t("deliver.securePaymentText")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliver;
