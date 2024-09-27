import React from "react";
import { NavLink } from "react-router-dom";

const CollectionCard = ({ name, img , id }) => {
  return (
    <NavLink to={`/Item/${id}`}>
      <div className="winter_card collection_card">
        <img src={img} alt="" className="winter_img collection_img" />
        <h4 style={{ color: "black" }} className="winter_subtitle">
          {name}
        </h4>
      </div>
    </NavLink>
  );
};

export default CollectionCard;
