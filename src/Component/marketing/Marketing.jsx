import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../lotties/marketing.json";
import { useTranslation } from "react-i18next";
import { marketDetails } from "../../fakers/data";
import style from "./marketing.module.css";
import { GrFormCheckmark } from "react-icons/gr";
const Marketing = () => {
  const [t, i18n] = useTranslation();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="container pt-5 mt-5">
      <div
        className="row align-items-center justify-content-center"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-offset="100"
      >
        <div
          className="col-12 col-md-6 mb-4 mb-md-0"
          data-aos="fade-down"
          data-aos-delay="600"
        >
          <h3
            data-aos="zoom-in"
            data-aos-delay="400"
            className={`font-bolder fs-2 text-white mb-4 text-center ${
              i18n.language === "ar" ? "text-md-end" : "text-md-end"
            }`}
          >
            {t("markettingTitle")}
          </h3>
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className={`lh text-white-50 mb-5 text-center ${
              i18n.language === "ar" ? "text-md-end" : "text-md-end"
            }`}
          >
            {t("aboutUs")}
          </p>
          <div data-aos="zoom-in" data-aos-delay="400" className="row">
            {marketDetails.map((item, index) => (
              <div
                key={index}
                className={`col-12 mb-3 col-sm-6 d-flex align-items-center gap-2 `}
              >
                <div className={style.box}>
                  <GrFormCheckmark size={20} />
                </div>
                <p className="text-white p-0 m-0">
                  {i18n.language === "ar" ? item.ArabicTitle : item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="col-12 col-md-6 mb-4 mb-md-0"
        >
          <Lottie options={defaultOptions} height={450} width="100%" />
        </div>
      </div>
    </div>
  );
};

export default Marketing;
