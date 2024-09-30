import React, { useEffect, useState } from "react";
import "./winter.scss";
import WinterCard from "./WinterCard";
import { useTranslation } from "react-i18next";

const WinterCollection = ({ data }) => {
  const { t } = useTranslation(); // Tilni olish
  const [base, setBase] = useState([]);

  useEffect(() => {
    const winterCollection = data.filter(
      (item) => item.category === "Winter collection"
    );

    const newBase = winterCollection.slice(0, 10);
    setBase(newBase);
  }, [data]);

  return (
    <div className="winter">
      <div className="winter_wrapper">
        <h2 className="winter_title">{t("winterCollection.title")}</h2>{" "}
        {/* Winter collection */}
        <p className="winter_text">{t("winterCollection.subTitle")}</p>{" "}
        {/* Bukhara Natural Product */}
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
