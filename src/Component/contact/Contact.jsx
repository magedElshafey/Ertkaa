import React from "react";
import style from "./contact.module.css";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const [t, i18n] = useTranslation();
  return (
    <div
      data-aos="fade-down"
      data-aos-delay="500"
      data-aos-offset="50"
      className={`pt-5 mt-5 ${style.mainDiv}`}
    >
      <div
        className={`container d-flex flex-column align-items-center ${style.content}`}
      >
        <h3
          className={`mb-5 ${style.title}`}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {t("contactTitle")}
        </h3>

        <form className={`p-3  ${style.mainForm} rounded`}>
          <div className="mb-3">
            <label
              htmlFor="name"
              className={`d-block fw-bold mb-1 ${style.label}`}
            >
              {t("name")}
            </label>
            <input id="name" className={style.inp} type="text" />
          </div>
          <div className="mb-3">
            <label
              htmlFor="phone"
              className={`d-block fw-bold mb-1 ${style.label}`}
            >
              {t("phone")}
            </label>
            <input id="phone" className={style.inp} type="tel" />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className={`d-block fw-bold mb-1 ${style.label}`}
            >
              {t("email")}
            </label>
            <input id="email" className={style.inp} type="email" />
          </div>
          <div className="mb-4">
            <label
              className={`d-block fw-bold mb-1 ${style.label}`}
              htmlFor="msg"
            >
              {t("msg")}
            </label>
            <textarea className={style.area}></textarea>
          </div>
          <button
            className={`mx-auto d-flex justify-content-center text-center ${style.btn}`}
          >
            {t("reg")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
