import React from "react";
import { socialMedia } from "../../fakers/data";
import style from './social.module.css'
const SocialMedia = () => {
  return (
    <>
      {socialMedia.map((item, index) => (
        <a key={index} target="_blank" href={item.path}>
          <img
            alt="social/icon"
            src={item.icon}
            loading="lazy"
            className={style.icon}
          />
        </a>
      ))}
    </>
  );
};

export default SocialMedia;
