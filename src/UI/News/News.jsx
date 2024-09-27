import React, { useEffect, useState } from "react";

import img1 from "../../assets/img/news1.png";
import img2 from "../../assets/img/news2.png";
import img3 from "../../assets/img/news3.png";

import "./news.scss";
import Aos from "aos";
import { NavLink } from "react-router-dom";
const News = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div data-aos="zoom-in-up" className="new">
      <h3 className="winter_title">News</h3>
      <p className="winter_text">Bukhara Natural Product</p>
      <div className="new_cards">
        <NavLink to={`/gadjets1`}>
          <div className="new_card">
            <img src={img1} alt="" className="new_img image_container" />
            <p className="new_subtext">10/05/2019 by admin</p>
            <h4 className="new_title">How to choose perfect gadgets</h4>
            <p className="new_text">
              When, while the lovely valley teems with vapour around me, and the
              meridian sun strikes the upper s...
            </p>
          </div>
        </NavLink>
        <NavLink to={`/gadjets2`}>
          <div className="new_card">
            <img src={img2} alt="" className="new_img image_container" />
            <p className="new_subtext">10/05/2019 by admin</p>
            <h4 className="new_title">How to choose perfect gadgets</h4>
            <p className="new_text">
              When, while the lovely valley teems with vapour around me, and the
              meridian sun strikes the upper s...
            </p>
          </div>
        </NavLink>
        <NavLink to={`/gadjets3`}>
          <div className="new_card">
            <img src={img3} alt="" className="new_img image_container" />
            <p className="new_subtext">10/05/2019 by admin</p>
            <h4 className="new_title">How to choose perfect gadgets</h4>
            <p className="new_text">
              When, while the lovely valley teems with vapour around me, and the
              meridian sun strikes the upper s...
            </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default News;
