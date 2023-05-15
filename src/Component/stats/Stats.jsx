import React from "react";
import style from "./stats.module.css";
import { stats } from "../../fakers/data";
import { useTranslation } from "react-i18next";
const Stats = () => {
  const [t, i18n] = useTranslation();
  return (
    <div className="container pt-5 mt-5">
      <div className="d-flex justify-content-center gap-5 flex-wrap">
        {stats.map((item, index) => (
          <div
            data-aos="zoom-in"
            data-aos-delay={item.delay}
            key={index}
            className={`d-flex justify-content-center align-items-center py-3 ${style.mainCard}`}
          >
            <div className="d-flex flex-column align-items-center">
              <h2 className={`${style.num} mb-0 fs-1`}>{item.num}</h2>
              <p className="fw-bolder text-white">
                {i18n.language === "ar" ? item.ArabicTitle : item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
