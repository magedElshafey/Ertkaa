import React, { useEffect } from "react";
import AOS from "aos";
import Nav from "./Component/layout/navbar/Nav";
import { useTranslation } from "react-i18next";
import Hero from "./Component/Hero/Hero";
import Stats from "./Component/stats/Stats";
import About from "./Component/about/About";
import Marketing from "./Component/marketing/Marketing";
import ScrollTitle from "./Component/Scrolltitle/ScrollTitle";
import Serv from "./Component/Services/Serv";
import Contact from "./Component/contact/Contact";
import Footer from "./Component/layout/footer/Footer";
import FixedBtn from "./Component/utilites/fixedBtn/FixedBtn";
import Meta from "./Component/utilites/meta/Meta";
import Portfolio from "./Component/portfolio/Portfolio";

const App = () => {
  const [t, i18n] = useTranslation();
  // handle animation
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 1200,
    });
  }, []);
  // handle page direction
  useEffect(() => {
    document.documentElement.setAttribute("lang", i18n.language);
    if (i18n.language === "ar") {
      document.getElementsByTagName("body")[0].style.direction = "rtl";
    } else {
      document.getElementsByTagName("body")[0].style.direction = "ltr";
    }
  }, [i18n.language]);
  return (
    <div>
      <Meta />
      <FixedBtn />
      <Nav />
      <Hero />
      <About />
      <Marketing />
      <Portfolio />
      <Serv />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
