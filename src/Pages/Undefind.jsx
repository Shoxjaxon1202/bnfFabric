import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import "../styles/undefind.scss";

const UndefinedProduct = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="undefined-product" data-aos="fade-in">
      <h2 className="undefined-product__title">Mahsulot topilmadi</h2>
      <p className="undefined-product__message">
        Iltimos, keyinroq qaytib keling.
      </p>
    </div>
  );
};

export default UndefinedProduct;
