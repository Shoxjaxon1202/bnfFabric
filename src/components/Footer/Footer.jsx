import React from "react";

import footerLogo from "../../assets/img/footerLogo.png";
import "./footer.scss";
import Aos from "aos";
import { NavLink } from "react-router-dom";
const Footer = () => {
  Aos.init({
    duration: 1400,
    easing: "ease-in-out",
    once: false, // Faqat bir marta animatsiya bo'lsinmi yoki qayta-qayta
  });
  return (
    <footer className="footer">
      <div data-aos="zoom-in-right" className="footer_wrapper">
        {" "}
        <div className="footer__left">
          <img
            src={footerLogo}
            alt="Bukhara Natural Product"
            className="footer__logo"
          />
          <p className="footer__description new_text">
            'Bukhara Natural Product' has been a company for many years
            producing cotton fabrics for use all over the world.
          </p>
        </div>
        <div className="footer__menu">
          <h4>menu</h4>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="aboutUs">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/collection">Collection</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="active">
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer__contacts">
          <h4>Contacts</h4>
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
          <h4>Subscribe to our email</h4>
          <form className="footer__subscribe-form">
            <input type="email" placeholder="Enter Your Email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
