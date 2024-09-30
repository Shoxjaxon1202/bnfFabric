import React, { useEffect, useState } from "react";
import AutumnCard from "./AutumnCard";
import { useTranslation } from "react-i18next";

const AutumnCollection = ({ data }) => {
  const { t } = useTranslation(); // Tilni olish
  const [base, setBase] = useState([]);

  useEffect(() => {
    const autumnCollection = data.filter(
      (item) => item.category === "Autumn collection"
    );

    setBase(autumnCollection);
  }, [data]);

  return (
    <div className="winter">
      <div className="winter_wrapper">
        <h2 className="winter_title">{t("autumnCollection.title")}</h2>{" "}
        {/* winter collection */}
        <p className="winter_text">{t("autumnCollection.subTitle")}</p>{" "}
        {/* Bukhara Natural Product */}
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
