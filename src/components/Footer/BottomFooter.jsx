import React from "react";
import { useTranslation } from "react-i18next"; // useTranslation ni import qiling
import "./bottomFooter.scss";

const BottomFooter = () => {
  const { t } = useTranslation(); // Tarjimani olish

  return (
    <div className="BottomFooter">
      <div className="BottomFooter_wrapper">
        <p className="BottomFooter_text">
          {t("bottomFooter.copyright")} {/* Tarjimani qo'shing */}
        </p>
      </div>
    </div>
  );
};

export default BottomFooter;
