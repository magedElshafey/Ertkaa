import React from "react";
import { useTranslation } from "react-i18next";
import style from "./scroll.module.css";
import { AiFillStar } from "react-icons/ai";
const ScrollTitle = () => {
  const [t, i18n] = useTranslation();
  return (
    <div className="mt-5 pt-5">
      <div className={style.mainDiv}>
        <div
          className={`scrolling-text ${style.content} d-flex align-items-center gap-5`}
        >
          <p className="fw-bolder m-0 p-0 fs-5">{t("firstText")}</p>
          <AiFillStar className={style.icon} size={30} />
          <p className="fw-bolder m-0 p-0 fs-5">{t("secondText")}</p>
          <AiFillStar className={style.icon} size={30} />
          <p className="fw-bolder m-0 p-0 fs-5">{t("thirdText")}</p>
          <AiFillStar className={style.icon} size={30} />
          <p className="fw-bolder m-0 p-0 fs-5">{t("fourthText")}</p>
          <AiFillStar className={style.icon} size={30} />
        </div>
      </div>
    </div>
  );
};

export default ScrollTitle;
