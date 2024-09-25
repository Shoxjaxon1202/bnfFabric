import React, { useEffect } from "react";

import "../styles/contact.scss";

import icon1 from "../assets/img/icon5.svg";
import icon2 from "../assets/img/icon6.svg";
import icon3 from "../assets/img/icon7.svg";
import Aos from "aos";

const Contact = () => {


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
          <form data-aos="zoom-in">
            <input type="email" required placeholder="Your E-mail" />
            <input type="tel" required placeholder="Phone Number" />
            <textarea placeholder=" Your Message Here" name="" id=""></textarea>
            <button className="contact_btn">Submit</button>
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
