import React, { useEffect, useState } from "react";
import "./winter.scss";
import WinterCard from "./WinterCard";

const WinterCollection = ({ data }) => {
  const [base, setBase] = useState([]);

  useEffect(() => {
    const winterCollection = data.filter(
      (item) => item.category === "Winter collection"
    );

    const newBase = winterCollection.slice(0 , 10);
    setBase(newBase);
  }, [data]);

  return (
    <div className="winter">
      <div className="winter_wrapper">
        <h2 className="winter_title">Winter collection</h2>
        <p className="winter_text">Bukhara Natural Product</p>
        <div className="winter_cards">
          {base.map((item) => (
            <WinterCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WinterCollection;
