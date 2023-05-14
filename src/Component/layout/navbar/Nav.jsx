import React, { useState } from "react";
import style from "./nav.module.css";
import { navLinks } from "../../../fakers/data";
import { useTranslation } from "react-i18next";
import logo from "../../../assets/logo.jpg";
import langIcon from "../../../assets/lang.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { socialMedia } from "../../../fakers/data";
const Nav = () => {
  const [t, i18n] = useTranslation();
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="container-fluid pt-4">
      <div className="d-none d-md-flex justify-content-between align-items-center">
        {/*logo container*/}
        <div>
          <img
            alt="logo/img"
            loading="lazy"
            src={logo}
            className={style.logo}
          />
        </div>
        {/*links container*/}
        <ul className="d-flex align-items-center gap-5 fw-bold fs-5">
          {navLinks.map((item, index) => (
            <li key={index}>
              {i18n.language === "ar" ? (
                <a
                  className={`pb-3 ${style.navLinks}`}
                  href={item.path}
                  target="_blank"
                >
                  {item.ArabicTitle}
                </a>
              ) : (
                <a
                  className={`pb-3 ${style.navLinks}`}
                  href={item.path}
                  target="_blank"
                >
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </ul>
        {/*button*/}
        <button className={style.btn}>
          <a className={style.btnText} href="https://wa.me/+201022153359">
            {t("btnNav")}
          </a>
        </button>
        <div className="dropdown ">
          <div
            className=" dropdown-toggle d-flex align-items-center gap-2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            role="button"
          >
            <img alt="lang/img" src={langIcon} loading="lazy" />
            <p className="text-white p-0 m-0 fs-4">{i18n.language}</p>
          </div>

          <ul className="dropdown-menu">
            <li className={`dropdown-item ${style.lang}`}>{i18n.language}</li>
            {i18n.language === "ar" ? (
              <li
                onClick={() => i18n.changeLanguage("en")}
                className={`dropdown-item ${style.lang}`}
              >
                en
              </li>
            ) : (
              <li
                onClick={() => i18n.changeLanguage("ar")}
                className={`dropdown-item ${style.lang}`}
              >
                ar
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="d-block d-md-none">
        <div className="d-flex justify-content-between align-items-center ">
          <div>
            <img
              alt="logo/img"
              loading="lazy"
              src={logo}
              className={style.logo}
            />
          </div>
          {!showSideBar && (
            <AiOutlineMenu
              onClick={() => setShowSideBar(true)}
              size={30}
              className={style.menuIcon}
            />
          )}
        </div>
        {showSideBar && <div className={style.overlay}></div>}
        <div
          className={`${style.sideBar} ${
            showSideBar ? style.show : style.hide
          }`}
        >
          <div className="p-3 position-relative">
            <div className={style.closeContainer}>
              <AiOutlineClose
                onClick={() => setShowSideBar(false)}
                size={40}
                className={`pb-3 ${style.closeIcon} ${
                  showSideBar ? style.rotate : ""
                }`}
              />
            </div>
            <div className="d-flex justify-content-center">
              <ul className="fw-bold fs-5 mt-5 pt-5">
                {navLinks.map((item, index) => (
                  <li className={`py-3 ${style.mobileLink}`} key={index}>
                    {i18n.language === "ar" ? (
                      <a
                        className={`${style.navLinks}`}
                        href={item.path}
                        target="_blank"
                      >
                        {item.ArabicTitle}
                      </a>
                    ) : (
                      <a
                        className={`pb-3 ${style.navLinks}`}
                        href={item.path}
                        target="_blank"
                      >
                        {item.title}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr className={style.line} />
          <div className="px-3 py-3 d-flex justify-content-between align-items-center">
            <button className={style.btn}>
              <a className={style.btnText} href="https://wa.me/+201022153359">
                {t("btnNav")}
              </a>
            </button>
            <div className="dropdown ">
              <div
                className=" dropdown-toggle d-flex align-items-center gap-2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                role="button"
              >
                <img alt="lang/img" src={langIcon} loading="lazy" />
                <p className="text-white p-0 m-0 fs-4">{i18n.language}</p>
              </div>

              <ul className="dropdown-menu">
                <li className={`dropdown-item ${style.lang}`}>
                  {i18n.language}
                </li>
                {i18n.language === "ar" ? (
                  <li
                    onClick={() => i18n.changeLanguage("en")}
                    className={`dropdown-item ${style.lang}`}
                  >
                    en
                  </li>
                ) : (
                  <li
                    onClick={() => i18n.changeLanguage("ar")}
                    className={`dropdown-item ${style.lang}`}
                  >
                    ar
                  </li>
                )}
              </ul>
            </div>
          </div>
          <hr className={style.line} />
          <div className="pt-3 d-flex justify-content-center align-items-center gap-2">
            {socialMedia.map((item, index) => (
              <a target="_blank" href={item.path}>
                <img alt="social/icon" src={item.icon} loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
