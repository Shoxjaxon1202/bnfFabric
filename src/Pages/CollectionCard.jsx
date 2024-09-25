import React from "react";

const CollectionCard = ({ name, img }) => {
  return (
    <div className="winter_card">
      <img src={img} alt="" className="winter_img collection_img" />
      <h4 style={{color: "black"}} className="winter_subtitle">{name}</h4>
    </div>
  );
};

export default CollectionCard;
