import React, { useState } from "react";
import "../styles/contact.scss";
import Aos from "aos";
import axios from "axios";

import icon1 from "../assets/img/icon5.svg";
import icon2 from "../assets/img/icon6.svg";
import icon3 from "../assets/img/icon7.svg";
import { toast } from "react-toastify";

const Contact = () => {
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
      toast.success("Xabar yuborildi!");
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      toast.error("Xabar yuborilmadi, qayta urinib ko'ring.");
    }
  };

  Aos.init({
    duration: 200,
    easing: "ease-in-out",
    once: false,
  });

  return (
    <div className="contact">
      <div className="contact_wrapper">
        <div className="contact_left">
          <h2 className="contact_title">Contact</h2>
          <form onSubmit={handleSubmit} data-aos="zoom-in">
            <input
              type="email"
              required
              placeholder="Your E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              required
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <textarea
              placeholder="Your Message Here"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}></textarea>
            <button type="submit" className="contact_btn">
              Submit
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
            <h5 className="contact_subtitle">Email: </h5>
            <p className="contact_subtext">info@bnpfabric.uz</p>
          </div>
        </div>
        <div className="contact_box">
          <img src={icon2} alt="" className="contact_img" />
          <div className="contact_textbox">
            <h5 className="contact_subtitle">Tel: </h5>
            <p className="contact_subtext">+998 93 383 75 85</p>
            <p className="contact_subtext">+998 93 960 78 00</p>
          </div>
        </div>
        <div className="contact_box">
          <img src={icon3} alt="" className="contact_img" />
          <div className="contact_textbox">
            <h5 className="contact_subtitle">Address: </h5>
            <p className="contact_subtext">Bukhara, st. Alpomysh 80</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
