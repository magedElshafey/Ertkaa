import React from "react";
import style from "./hero.module.css";
import { useTranslation } from "react-i18next";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
const Hero = () => {
  const [t, i18n] = useTranslation();

  return (
    <div className="pt-5 mt-4">
      <div data-aos="fade-down" data-aos-delay="400" className={style.mainDiv}>
        <div
          className={`d-flex flex-column text-white  align-items-center ${style.content}`}
        >
          <h1
            className={`mb-2  fs-5 fs-md-2  fw-bolder ${
              i18n.language === "ar" ? "text-md-end" : "text-md-start"
            } lh`}
          >
            {t("heroTitle")}
          </h1>
          <p
            className={`text-white-50   lh  mb-3 ${
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
/*
   <div className="container pt-5 mt-5">
      <div
        
        className="row pt-5 mt-5 align-items-center justify-content-center"
      >
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          
          
          
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="col-12 col-md-6 mb-4 mb-md-0"
        >
          <Lottie options={defaultOptions} height={400} width="100%" />
        </div>
      </div>
    </div>
*/
