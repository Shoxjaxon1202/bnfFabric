import React, { useEffect, useState } from "react";
import AutumnCard from "./AutumnCard";

const AutumnCollection = ({ data }) => {
  const [base, setBase] = useState([]);

  useEffect(() => {
    const winterCollection = data.filter(
      (item) => item.category === "Autumn collection"
    );

    setBase(winterCollection);
  }, [data]);

  
  return (
    <div className="winter">
      <div className="winter_wrapper">
        <h2 className="winter_title">Autumn collection</h2>
        <p className="winter_text">Bukhara Natural Product</p>
        <div className="winter_cards">
          {base.map((item) => (
            <AutumnCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutumnCollection;
