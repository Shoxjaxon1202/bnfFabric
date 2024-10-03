import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./tab.scss";
import { Rating } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Aos from "aos";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0); // Rating uchun holat
  const { t } = useTranslation();

  const token = "7232269128:AAHZIjx7GIn1Sr8A413W7VMysW4m24r1EJo"; // O'zingizning Telegram bot tokeningizni joylashtiring
  const chatId = "6575316231"; // O'zingizning chat ID'ingizni joylashtiring
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `${t("review.newRequest")}:\n${t(
      "review.email"
    )}: ${email}\n${t("review.phone")}: ${phone}\n${t(
      "review.message"
    )}: ${message}\n${t("review.rating")}: ${rating}`;

    try {
      await axios.post(url, {
        chat_id: chatId,
        text: text,
      });
      toast.success(t("contact.messageSent"));
      setEmail("");
      setPhone("");
      setMessage("");
      setRating(0); // Ratingni tozalash
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      toast.error(t("contact.messageNotSent"));
      setEmail("");
      setPhone("");
      setMessage("");
      setRating(0); // Ratingni tozalash
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
    <div className="tabs">
      <Box sx={{ width: "100%" }}>
        <Box
          className="tabs_labels"
          sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example">
            <Tab label={t("tabs.description")} {...a11yProps(0)} />
            <Tab label={t("tabs.reviews")} {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <h4 className="tabs_title">{t("tabs.description")}</h4>
          <h4 className="tabs_subtitle">{t("tabs.subtitle")}</h4>
          <p className="tabs_text">{t("tabs.descriptionText")}</p>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <h4 className="tab2_title">{t("tabs.reviews")}</h4>
          <p className="tabs_text">{t("tabs.noReviews")}</p>
          <h4 className="tab2_title">{t("tabs.beFirstReview")}</h4>
          <p className="tab2_text">{t("tabs.requiredFields")}</p>
          <div className="ratings">
            <Rating
              className="rating"
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-field">
                <h2>{t("form.name")}</h2>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="input-field">
                <h2>{t("form.email")}</h2>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <h2>{t("form.yourReview")}</h2>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required></textarea>

            <button type="submit" className="send-btn">
              {t("form.send")}
            </button>
          </form>
        </CustomTabPanel>
      </Box>
    </div>
  );
}
