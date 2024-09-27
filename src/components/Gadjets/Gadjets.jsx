import React, { useState } from "react";

import img from "../../assets/img/news1.png";

import "./gadjets.scss";
import { Button } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const Gadjets = () => {
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
        toast.success("Xabar yuborildi!");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        toast.error("Invalid email , website or message.");
      }
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      toast.error("Xabar yuborilmadi, qayta urinib ko'ring.");
    }
  };

  return (
    <div className="gadjet">
      <div className="gadjet_wrapper">
        {" "}
        <img src={img} alt="" className="gadjet_img" />
        <p className="gadjet_subtext">
          <span className="gadjet_span">05.10.2019</span>
          by admin
        </p>
        <p className="gadjet_text">
          When, while the lovely valley teems with vapour around me, and the
          meridian sun strikes the upper surface of the impenetrable foliage of
          my trees, and but a few stray gleams steal into the inner sanctuary, I
          throw myself down among the tall grass by the trickling stream; and,
          as I lie close to the earth, a thousand unknown plants are noticed by
          me: when I hear the buzz of the little world among the stalks, and
          grow familiar with the countless indescribable forms of the insects
          and flies, then I feel the presence of the Almighty, who formed us in
          his own image, and the breath of that universal love which bears and
          sustains us, as it floats around us in an eternity of bliss; and then,
          my friend, when darkness overspreads my eyes, and heaven and earth
          seem to dwell in my soul and absorb its power, like the form of a
          beloved mistress, then I often think with longing, Oh, would I
          describe these conceptions , could impress upon paper all that is
          living so full and warm within me, that it might be the mirror of my
          soul, as my soul is the mirror of the infinite God!
        </p>
        <p className="gadjet_text">
          O my friend - but it is too much for my strength - I sink under the
          weight of the splendour of these visions! A wonderful serenity has
          taken possession of my entire soul, like these sweet mornings of
          spring which I enjoy with my whole heart. I am alone, and feel the
          charm of existence in this spot, which was created for the bliss of
          souls like mine.
        </p>
        <p className="gadjet_text">
          I am so happy, my dear friend, so absorbed in the exquisite sense of
          mere tranquil existence, that I neglect my talents. I should be
          incapable of drawing a single stroke at the present moment; and yet I
          feel that I never was a greater artist than now.
        </p>
        <p className="gadjet_text">
          When, while the lovely valley teems with vapour around me, and the
          meridian sun strikes the upper surface of the impenetrable foliage of
          my trees, and but a few stray gleams steal into the inner sanctuary, I
          throw myself down among the tall grass by the trickling stream; and,
          as I lie close to the earth, a thousand unknown plants are noticed by
          me: when I hear the buzz of the little world among the stalks, and
          grow familiar with the countless indescribable forms of the insects
          and flies, then I feel the presence of the Almighty, who formed us in
          his own image, and the breath of that universal love which bears and
          sustains us, as it floats around us in an eternity of bliss; and then,
          my friend, when darkness overspreads my eyes, and heaven and earth
          seem to dwell in my soul and absorb its power, like the form of a
          beloved mistress, then I often think with longing, Oh, would I
          describe these conceptions , could impress upon paper all that is
          living so full and warm within me.
        </p>
      </div>
      <div className="gadjet_bottom">
        <h3 className="gadjet_bottom_title">Leave A Comment</h3>
        <p className="gadjet_bottom_text">
          Your email address will not be published. Required fields are marked *
        </p>
        <form onSubmit={handleSubmit}>
          <span className="inputs">
            {" "}
            <input
              type="email"
              className="gadjet_bottom_input"
              required
              placeholder="E-Mail (required)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              style={{ marginLeft: "35px" }}
              type="text"
              className="gadjet_bottom_input"
              required
              placeholder="Website"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </span>
          <textarea
            name=""
            id=""
            className="gadjet_bottom_textarea"
            required
            placeholder="Comment"
            value={message}
            onChange={(e) => setMessage(e.target.value)}></textarea>
          <Button
            type="submit"
            className="gadjet_bottom_btn"
            color="error"
            variant="contained"
            disableElevation>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Gadjets;
