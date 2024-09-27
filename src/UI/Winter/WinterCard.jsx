import Aos from "aos";
import React from "react";
import { NavLink } from "react-router-dom";

const WinterCard = ({ img, name, id }) => {
  Aos.init({
    duration: 1400,
    easing: "ease-in-out",
    once: false,
  });
  
  return (
    <NavLink to={`/Item/${id}`}>
      <div data-aos="fade-right" className="winter_card">
        <img src={img} alt="" className="winter_img" />
        <h4 className="winter_subtitle">{name}</h4>
      </div>
    </NavLink>
  );
};

export default WinterCard;
