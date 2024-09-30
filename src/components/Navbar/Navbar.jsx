import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { useTranslation } from "react-i18next"; // useTranslation ni import qiling
import "./navbar.scss";
import i18n from "../../i18";

const Navbar = () => {
  const { t } = useTranslation(); // Tarjimani olish
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (isOpen && !event.target.closest(".navbar")) {
      setIsOpen(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value); // Tilni o'zgartirish
  };

  return (
    <nav className="navbar">
      <div className="navbar_wrapper">
        <div className="navbar_left">
          <NavLink to="/home">
            <img src={logo} alt="Logo" className="navbar_logo" />
          </NavLink>
          <ul className={`navbar_list ${isOpen ? "open" : ""}`}>
            <NavLink to="/home" className="navbar_link">
              <li className="navbar_item">{t("navbar.home")}</li>
            </NavLink>
            <NavLink to="/collection" className="navbar_link">
              <li className="navbar_item">{t("navbar.collection")}</li>
            </NavLink>
            <NavLink to="/about" className="navbar_link">
              <li className="navbar_item">{t("navbar.aboutUs")}</li>
            </NavLink>
            <NavLink to="/contact" className="navbar_link">
              <li className="navbar_item">{t("navbar.contacts")}</li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar_right">
          <select className="navbar_select" onChange={changeLanguage}>
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
          </select>
        </div>
        <div
          className={`navbar_toggle ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
