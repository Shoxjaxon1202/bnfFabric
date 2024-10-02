import React, { useState, useEffect } from "react";
import "../styles/contact.scss";
import Aos from "aos";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import icon1 from "../assets/img/icon5.svg";
import icon2 from "../assets/img/icon6.svg";
import icon3 from "../assets/img/icon7.svg";

const Contact = () => {
  const { t } = useTranslation(); // Tarjima funksiyasini olish
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const token = "7232269128:AAHZIjx7GIn1Sr8A413W7VMysW4m24r1EJo";
  const chatId = "6575316231";
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `Yangi murojaat:\nEmail: ${email}\nTelefon: ${phone}\nXabar: ${message}`;

    try {
      await axios.post(url, {
        chat_id: chatId,
        text: text,
      });
      toast.success(t("contact.messageSent")); // Tarjima qo'shildi
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      toast.error(t("contact.messageNotSent")); // Tarjima qo'shildi
    }
  };

  useEffect(() => {
    Aos.init({
      duration: 200,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div className="contact">
      <div className="contact_wrapper">
        <div className="contact_left">
          <h2 className="contact_title">{t("contact.title")}</h2>{" "}
          {/* Tarjima qo'shildi */}
          <form onSubmit={handleSubmit} data-aos="zoom-in">
            <input
              type="email"
              required
              placeholder={t("contact.placeholderEmail")} // Tarjima qo'shildi
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              required
              placeholder={t("contact.placeholderPhone")} // Tarjima qo'shildi
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <textarea
              placeholder={t("contact.placeholderMessage")} // Tarjima qo'shildi
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}></textarea>
            <button type="submit" className="contact_btn">
              {t("contact.submit")} {/* Tarjima qo'shildi */}
            </button>
          </form>
        </div>
        <div
          style={{
            height: "100%",
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
          }}
          className="contact_right">
          <iframe
            className="location"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6135.254690817668!2d64.45936!3d39.748021!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ0JzUwLjgiTiA2NMKwMjcnMzUuOSJF!5e0!3m2!1sen!2sus!4v1727263320111!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"></iframe>
        </div>
      </div>

      <div data-aos="zoom-in" className="contact_bottom">
        <div className="contact_box">
          <img src={icon1} alt="" className="contact_img" />
          <div className="contact_textbox">
            <h5 className="contact_subtitle">{t("contact.email")}</h5>{" "}
            {/* Tarjima qo'shildi */}
            <p className="contact_subtext">
              <a href="mailto:info@bnpfabric.uz">info@bnpfabric.uz</a>
            </p>
          </div>
        </div>
        <div className="contact_box">
          <img src={icon2} alt="" className="contact_img" />
          <div className="contact_textbox">
            <h5 className="contact_subtitle">{t("contact.phone")}</h5>{" "}
            {/* Tarjima qo'shildi */}
            <p className="contact_subtext">
              <a href="tel:+998 93 383 75 85">+998 93 383 75 85</a>
            </p>
            <p className="contact_subtext">
              <a href="tel:+998 93 960 78 00">+998 93 960 78 00</a>
            </p>
          </div>
        </div>
        <div className="contact_box">
          <img src={icon3} alt="" className="contact_img" />
          <div className="contact_textbox">
            <h5 className="contact_subtitle">{t("contact.address")}</h5>{" "}
            {/* Tarjima qo'shildi */}
            <p className="contact_subtext">
              <a href="https://www.google.com/maps/place/39%C2%B044'50.8%22N+64%C2%B027'35.9%22E/@39.748021,64.45936,16z/data=!4m4!3m3!8m2!3d39.7474444!4d64.4599722?hl=en&entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D">
                Bukhara, st. Alpomysh 80
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
