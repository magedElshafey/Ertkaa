import React from "react";
import style from "./Serv.module.css";
import { useTranslation } from "react-i18next";
import { serv } from "../../fakers/data";
const Serv = () => {
  const [t, i18n] = useTranslation();
  return (
    <div id="services" className="container pt-5 mt-5">
      <h3
        data-aos="fade-up"
        data-aos-delay="400"
        className="text-white fs-2 fw-bolder mb-0 text-center"
      >
        {t("servicesTitle")}
      </h3>
      <p
        data-aos="fade-down"
        data-aos-delay="500"
        className="fw-bolder fs-2 fw-bolder mb-5 text-white text-center"
      >
        {t("servicesDesc")}
      </p>
      <div className="d-flex pt-4 justify-content-center align-items-center gap-5 flex-wrap">
        {serv.map((item, index) => (
          <div
            className={`text-center ${style.mainContainer}`}
            key={index}
            data-aos="fade-up"
            data-aos-delay={item.delay}
          >
            <p className="fw-bold mb-3 text-white fs-3">
              {i18n.language === "ar" ? item.arabicTitle : item.englishTitle}
            </p>
            <p className="lh text-white-50 mb-3">
              {i18n.language === "ar" ? item.arabicDesc : item.englishDesc}
            </p>
            <p className={`fw-bold ${style.step}`}>
              {i18n.language === "ar" ? item.arabicStep : item.englishStep}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Serv;
