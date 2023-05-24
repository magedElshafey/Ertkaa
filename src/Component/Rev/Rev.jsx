import React from "react";
import style from "./rev.module.css";
import { rev } from "../../fakers/data.js";
const Rev = () => {
  return (
    <div className="container py-5">
      <h2
        className="text-white text-center fw-bolder fs-2 mt-3 mb-5"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        أراء العملاء
      </h2>

      <div className="row justify-content-center  gap-5 pt-5">
        {rev.map((item, index) => (
          <div
            key={index}
            className={`col-12 col-md-3   ${style.ImgContainer}`}
          >
            <img src={item} alt="work/img" className={` ${style.mainImg}`} />
            <img
              className={style.subImg}
              alt="sub/img"
              src="https://user-images.githubusercontent.com/4648648/80730328-a53c3200-8b33-11ea-8807-b6df9a5d9796.png"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rev;
