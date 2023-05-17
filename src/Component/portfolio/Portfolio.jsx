import React from "react";
import style from "./portfolio.module.css";
import { useTranslation } from "react-i18next";
import { port } from "../../fakers/data";
const Portfolio = () => {
  const { t, i18n } = useTranslation();
  return (
    <div id="port" className="container pt-5 mt-5">
      <h3
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-offset="50"
        className="text-center mb-4 text-white fw-bolder fs-3"
      >
        {t("port")}
      </h3>
      <div className="row pt-5  gap-4 justify-content-center">
        {port.map((item, index) => (
          <div
            className={`p-0 col-12 col-md-5 col-lg-3 ${style.mainContainer}`}
            key={index}
            data-aos="fade-up"
            data-aos-delay={item.delay}
          >
            <img
              alt="portfolio/img"
              src={item.img}
              className="w-100 h-50 img-fluid"
            />
            <h4 className="fw-bolder  pt-5 text-center mb-3">
              {i18n.language === "ar" ? item.arabicTitle : item.title}
            </h4>
            <p className="text-black-50 lh px-2 pb-5">
              {i18n.language === "ar" ? item.arabicDesc : item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
