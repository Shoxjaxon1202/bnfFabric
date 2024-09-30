import React from "react";
import footerLogo from "../../assets/img/footerLogo.png";
import "./footer.scss";
import Aos from "aos";
import { NavLink } from "react-router-dom"; // To'g'ri import
import { useTranslation } from "react-i18next"; // i18next'dan tarjima

const Footer = () => {
  const { t } = useTranslation(); // Tarjima funksiyasini olish

  Aos.init({
    duration: 1400,
    easing: "ease-in-out",
    once: false, // Faqat bir marta animatsiya bo'lsinmi yoki qayta-qayta
  });

  return (
    <footer className="footer">
      <div data-aos="zoom-in-right" className="footer_wrapper">
        <div className="footer__left">
          <img
            src={footerLogo}
            alt="Bukhara Natural Product"
            className="footer__logo"
          />
          <p className="footer__description new_text">
            {t("footer.description")} {/* Tarjima */}
          </p>
        </div>
        <div className="footer__menu">
          <h4>{t("footer.menu")}</h4> {/* Tarjima */}
          <ul>
            <li className="navbar_item">
              <NavLink className={"navbar_link"} to="/home">
                {t("navbar.home")} {/* Tarjima */}
              </NavLink>
            </li>
            <li className="navbar_item">
              <NavLink className={"navbar_link"} to="/aboutUs">
                {t("navbar.aboutUs")} {/* Tarjima */}
              </NavLink>
            </li>
            <li className="navbar_item">
              <NavLink className={"navbar_link"} to="/collection">
                {t("navbar.collection")} {/* Tarjima */}
              </NavLink>
            </li>
            <li className="navbar_item">
              <NavLink className={"navbar_link active"} to="/contact">
                {t("navbar.contacts")} {/* Tarjima */}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer__contacts">
          <h4>{t("footer.contacts")}</h4> {/* Tarjima */}
          <p>Bukhara, st. Alpomysh 80.</p>
          <p>
            <a href="mailto: Bnpuz@bk.ru">Bnpuz@bk.ru</a>
          </p>
          <p>bnp_fabrik</p>
          <p>
            <a href="mailto: info@bnpfabric.com">info@bnpfabric.com</a>
          </p>
          <p>
            <a href="tel: +998 93 383 75 85">+998 93 383 75 85</a>
          </p>
          <p>
            <a href="tel: +998 93 960 78 00">+998 93 960 78 00</a>
          </p>
        </div>
        <div className="footer__subscribe">
          <h4>{t("footer.subscribe")}</h4> {/* Tarjima */}
          <form className="footer__subscribe-form">
            <input type="email" placeholder={t("footer.enterEmail")} />{" "}
            {/* Tarjima */}
            <button>{t("footer.subscribe")}</button> {/* Tarjima */}
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
