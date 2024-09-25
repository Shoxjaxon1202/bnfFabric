import React, { useEffect, useState } from "react";
import SummerCard from "./SummerCard";

const SummerCollection = ({ data }) => {
  const [base, setBase] = useState([]);

  useEffect(() => {
    const winterCollection = data.filter(
      (item) => item.category === "Summer collection"
    );

    setBase(winterCollection);
  }, [data]);

  return (
    <div className="winter">
      <div className="winter_wrapper">
        <h2 className="winter_title">Summer collection</h2>
        <p className="winter_text">Bukhara Natural Product</p>
        <div className="winter_cards">
          {base.map((item) => (
            <SummerCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummerCollection;
