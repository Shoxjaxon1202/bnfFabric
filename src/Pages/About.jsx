import React from "react";

import img from "../assets/img/about.png";

import "../styles/about.scss";
const About = () => {
  return (
    <div className="about">
      <div className="about_left">
        <h2 className="about_title">Bukhara Natural Product</h2>
        <p className="about_text">
          Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsOur factory
          has been a company that produces cotton fabrics for use all over the
          world for many years.
        </p>
        <p className="about_text">
          Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThis company
          has been serving customers for 17 years.
        </p>
        <p className="about_text">
          Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe main goal
          of this company is to produce high quality and cost effective
          products.
        </p>
        <p className="about_text">
          Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe production
          process of this company is completely environmentally friendly.
        </p>
        <p className="about_text">
          Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe company
          can produce any kind of cotton raw materials according to the
          requirements and suggestions of customers.
        </p>
        <p className="about_text">
          Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe company is
          the official dealer of DongJia weaving machines in Uzbekistan.
        </p>
        <p className="about_text">
          Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsCurrently,
          more than 80 families contribute to the prestige and success of the
          company by providing financial support for their families.
        </p>
        <p className="about_text">
          Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsTo meet this
          demand, 50 weaving machines operate at high speed, non-stop.
        </p>
        <p className="about_text">
          Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsWe have the
          capacity to weave 200-250,000 meters of fabric per month.
        </p>
        <p className="about_text">
          Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsIn line with
          the high demand of our customers, the company has now established the
          production of high-quality premium eco-bags.
        </p>
        <p className="about_text">
          Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsBukhara
          Natural Product Company is pleased to serve its regular customers at
          any time.
        </p>
      </div>
      <div className="about_right">
        <img src={img} alt="" className="about_img" />
      </div>
    </div>
  );
};

export default About;
