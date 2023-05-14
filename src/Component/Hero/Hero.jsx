import React from "react";
import style from "./hero.module.css";
import Lottie from "react-lottie";
import * as animationData from "../../lotties/hero.json";
import { useTranslation } from "react-i18next";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
const Hero = () => {
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
      <div className="row align-items-center justify-content-center">
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="col-12 col-md-6 mb-4 mb-md-0"
        >
          <Lottie options={defaultOptions} height={400} width={320} />
        </div>
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <h1
            data-aos="fade-up"
            data-aos-delay="400"
            className={`mb-4 fs-2 text-white fw-bolder text-center ${
              i18n.language === "ar" ? "text-md-end" : "text-md-start"
            } lh`}
          >
            {t("heroTitle")}
          </h1>
          <p
            data-aos="fade-down"
            data-aos-delay="500"
            className={`text-white-50 lh text-center mb-3 ${
              i18n.language === "ar" ? "text-md-end" : "text-md-start"
            }`}
          >
            {t("heroDesc")}
          </p>
          <button
            className={`${style.btn} d-flex justify-content-center align-items-center gap-1`}
          >
            <span className={style.btnText}>{t("heroBtn")}</span>
            {i18n.language === "ar" ? (
              <AiOutlineArrowLeft className={style.icon} size={15} />
            ) : (
              <AiOutlineArrowRight className={style.icon} size={15} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
