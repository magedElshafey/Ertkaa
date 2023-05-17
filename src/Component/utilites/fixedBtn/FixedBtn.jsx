import React, { useState, useEffect } from "react";
import style from "./btn.module.css";
import whats from "../../../assets/social/icons8-whatsapp-48.png";
import { AiOutlineArrowUp } from "react-icons/ai";
const FixedBtn = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      {/*whats btn*/}
      <div className={style.whats}>
        <a href="https://wa.me/+201022153359" target="_blank">
          <img src={whats} alt="whats/logo" />
        </a>
      </div>
      <div
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className={`${style.arrowContainer} ${show ? style.show : style.hide}`}
      >
        <AiOutlineArrowUp size={20} />
      </div>
    </div>
  );
};

export default FixedBtn;
