import React, { useState } from "react";
import img from "../../assets/img/news3.png";
import { Button } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const Gadjets3 = () => {
  const { t } = useTranslation();
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
      if (email && phone && message) {
        await axios.post(url, {
          chat_id: chatId,
          text: text,
        });
        toast.success(t("gadget.messageSent"));
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        toast.error(t("gadget.error"));
      }
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      toast.error(t("gadget.messageNotSent"));
    }
  };

  return (
    <div className="gadjet">
      <div className="gadjet_wrapper">
        <img src={img} alt="" className="gadjet_img" />
        <p className="gadjet_subtext">
          <span className="gadjet_span">05.10.2019</span>
          by admin
        </p>
        <p className="gadjet_text">{t("gadget.articleText1")}</p>
        <p className="gadjet_text">{t("gadget.articleText2")}</p>
        <p className="gadjet_text">{t("gadget.articleText3")}</p>
        <p className="gadjet_text">{t("gadget.articleText4")}</p>
      </div>
      <div className="gadjet_bottom">
        <h3 className="gadjet_bottom_title">{t("gadget.comment")}</h3>
        <p className="gadjet_bottom_text">{t("gadget.notPublished")}</p>
        <form onSubmit={handleSubmit}>
          <span className="inputs">
            <input
              type="email"
              className="gadjet_bottom_input"
              required
              placeholder={t("gadget.emailPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              style={{ marginLeft: "35px" }}
              type="text"
              className="gadjet_bottom_input"
              required
              placeholder={t("gadget.websitePlaceholder")}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </span>
          <textarea
            className="gadjet_bottom_textarea"
            required
            placeholder={t("gadget.commentPlaceholder")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}></textarea>
          <Button
            type="submit"
            className="gadjet_bottom_btn"
            color="error"
            variant="contained"
            disableElevation>
            {t("gadget.button")}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Gadjets3;
