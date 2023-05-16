import React from "react";
import style from "./about.module.css";
import { useTranslation } from "react-i18next";
import { about } from "../../fakers/data";
const About = () => {
  const [t, i18n] = useTranslation();
  return (
    <div id="about" className="container pt-5 mt-5">
      <h2
        data-aos="fade-up"
        data-aos-delay="400"
        className="py-5 text-center text-white fw-bolder fs-2"
      >
        {t("aboutTitle")}
      </h2>
      <div className="row justify-content-center">
        <div className="d-none d-md-block">
          <div
            className={`col-12 ${style.rowContainer} row position-relative my-5`}
          >
            {about.map((item, index) => (
              <div
                data-aos="zoom-in"
                data-aos-delay={item.delay}
                data-aos-offset="50"
                key={index}
                className="py-5 col-12 col-md-6 mb-4 mb-md-6 d-flex gap-4"
              >
                <img className={style.img} alt="about/img" src={item.img} />
                <div className=" d-flex flex-column align-items-center gap-3">
                  <h3 className="fw-bolder text-white">
                    {i18n.language === "ar" ? item.ArabicTitle : item.title}
                  </h3>
                  <p className="text-white-50 lh">
                    {i18n.language === "ar" ? item.arabicDesc : item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="d-md-none">
          <div className={`col-12  row  my-5`}>
            {about.map((item, index) => (
              <div
                data-aos="zoom-in"
                data-aos-delay={item.delay}
                data-aos-offset="50"
                key={index}
                className={` col-12  mb-4 mb-md-6 d-flex gap-4`}
              >
                <img className={style.img} alt="about/img" src={item.img} />
                <div className=" d-flex flex-column align-items-center gap-3">
                  <h3 className="fw-bolder text-white ">
                    {i18n.language === "ar" ? item.ArabicTitle : item.title}
                  </h3>
                  <p className="text-white-50 lh">
                    {i18n.language === "ar" ? item.arabicDesc : item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
