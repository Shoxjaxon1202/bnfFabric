import React, { useEffect, useState } from "react";
import SummerCard from "./SummerCard";
import { useTranslation } from "react-i18next"; // Tilni olish uchun import

const SummerCollection = ({ data }) => {
  const { t } = useTranslation(); // useTranslation dan foydalanish
  const [base, setBase] = useState([]);

  useEffect(() => {
    const summerCollection = data.filter(
      (item) => item.category === "Summer collection"
    );

    setBase(summerCollection);
  }, [data]);

  return (
    <div className="winter">
      <div className="winter_wrapper">
        <h2 className="winter_title">{t("summerCollection.title")}</h2>{" "}
        {/* Summer collection */}
        <p className="winter_text">{t("summerCollection.subTitle")}</p>{" "}
        {/* Bukhara Natural Product */}
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
