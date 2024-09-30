import React, { useEffect } from "react";
import img1 from "../../assets/img/news1.png";
import img2 from "../../assets/img/news2.png";
import img3 from "../../assets/img/news3.png";
import "./news.scss";
import Aos from "aos";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Tilni olish uchun import

const News = () => {
  const { t } = useTranslation(); // useTranslation dan foydalanish

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div data-aos="zoom-in-up" className="new">
      <h3 className="winter_title">{t("news.title")}</h3> {/* News */}
      <p className="winter_text">{t("news.subTitle")}</p>{" "}
      {/* Bukhara Natural Product */}
      <div className="new_cards">
        <NavLink to={`/gadjets1`}>
          <div className="new_card">
            <img src={img1} alt="" className="new_img image_container" />
            <p className="new_subtext">10/05/2019 by admin</p>
            <h4 className="new_title">{t("news.card1.title")}</h4>{" "}
            {/* How to choose perfect gadgets */}
            <p className="new_text">
              {t("news.card1.text")} {/* Description */}
            </p>
          </div>
        </NavLink>
        <NavLink to={`/gadjets2`}>
          <div className="new_card">
            <img src={img2} alt="" className="new_img image_container" />
            <p className="new_subtext">10/05/2019 by admin</p>
            <h4 className="new_title">{t("news.card2.title")}</h4>{" "}
            {/* How to choose perfect gadgets */}
            <p className="new_text">
              {t("news.card2.text")} {/* Description */}
            </p>
          </div>
        </NavLink>
        <NavLink to={`/gadjets3`}>
          <div className="new_card">
            <img src={img3} alt="" className="new_img image_container" />
            <p className="new_subtext">10/05/2019 by admin</p>
            <h4 className="new_title">{t("news.card3.title")}</h4>{" "}
            {/* How to choose perfect gadgets */}
            <p className="new_text">
              {t("news.card3.text")} {/* Description */}
            </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default News;
