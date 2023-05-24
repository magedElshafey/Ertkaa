import React from 'react'
import style from './social.module.css'
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import { FaBehance } from "react-icons/fa";
import { BsSnapchat } from "react-icons/bs";
const SocialMedia = () => {
  return (
    <div className="d-flex align-items-center gap-3">
      <FaBehance size={50} className={style.icon} />
      <BsSnapchat size={50} className={style.icon} />
      <AiOutlineInstagram size={50} className={style.icon} />
      <AiOutlineWhatsApp size={50} className={style.icon} />
    </div>
  );
}

export default SocialMedia
