import React from "react";
import style from "./footer.module.css";
import logo from "../../../assets/logo elqema.png";
import SocialMedia from "../../utilites/SocailMedia/SocialMedia";
import { useTranslation } from "react-i18next";
import hotLine from "../../../assets/maaroofff.png";
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import { FaBehance } from "react-icons/fa";
import { BsSnapchat } from "react-icons/bs";
const Footer = () => {
  const year = new Date().getFullYear();
  const [t] = useTranslation();
  return (
    <div className={`pt-5 ${style.footerContainer}`}>
      <div className="p-3">
        <div className="row justify-content-center pb-3">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="d-flex flex-column align-items-center gap-3">
              <img src={logo} alt="logo/img" className={style.logo} />
              <p className="text-white-50 mb-0">القاهرة , مصر الجديدة</p>
              <div className="d-flex align-items-center gap-3">
                <FaBehance size={50} className={style.icon} />
                <BsSnapchat size={50} className={style.icon} />
                <AiOutlineInstagram size={50} className={style.icon} />
                <AiOutlineWhatsApp size={50} className={style.icon} />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="d-flex flex-column align-items-center gap-3">
              <p className="mb-0 fw-bolder text-white fs-3">
                {t("contactTitle")}
              </p>
              <ul className="d-flex flex-column align-items-center gap-3 text-white">
                <li>+966 506812847</li>
                <li>info@irtiqa-alkhalej.com</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="d-flex flex-column align-items-center gap-3">
              <p className="mb-0 fw-bolder text-white fs-3">{t("site")}</p>
              <ul className="d-flex align-items-center flex-column gap-3">
                <li className={`text-white-50 ${style.footerLinksContainer}`}>
                  <a className={style.footerLinks} href="/">
                    {t("home")}
                  </a>
                </li>
                <li className={`text-white-50 ${style.footerLinksContainer}`}>
                  <a className={style.footerLinks} href="/#about">
                    {t("about")}
                  </a>
                </li>
                <li className={`text-white-50 ${style.footerLinksContainer}`}>
                  <a className={style.footerLinks} href="/#serv">
                    {t("serv")}
                  </a>
                </li>
                <li className={`text-white-50 ${style.footerLinksContainer}`}>
                  <a
                    className={style.footerLinks}
                    target="_blank"
                    href="https://www.google.com"
                  >
                    {t("behance")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="d-flex flex-column gap-3 align-items-center">
              <a
                className="d-inline-block w-75"
                target="_blank"
                href="https://wa.me/+201022153359"
              >
                <img
                  alt="hootline/img"
                  src={hotLine}
                  className={style.hotImg}
                />
              </a>
              <p className="fw-bolder text-white fs-4 mb-0">
                {t("hotline")} : 2258812
              </p>
            </div>
          </div>
        </div>
        <p
          className={`mb-0 text-white-50 fs-6 text-center pt-3 ${style.copyRightContainer}`}
        >
          {t("copyRight")} &copy; {year} {t("allRight")}{" "}
          <a
            className={style.copyRightLink}
            href="https:///www.google.com"
            target="_blank"
          >
            Tech Marvel
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
