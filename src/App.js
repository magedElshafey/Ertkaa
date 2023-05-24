import React, { useEffect, useState } from "react";
import AOS from "aos";
import Nav from "./Component/layout/navbar/Nav";
import { useTranslation } from "react-i18next";
import Spinner from "./Component/utilites/spinner/Spinner";
import Hero from "./Component/Hero/Hero";
import About from "./Component/about/About";
import Marketing from "./Component/marketing/Marketing";
import Serv from "./Component/Services/Serv";
import Contact from "./Component/contact/Contact";
import Footer from "./Component/layout/footer/Footer";
import FixedBtn from "./Component/utilites/fixedBtn/FixedBtn";
import Meta from "./Component/utilites/meta/Meta";
import Portfolio from "./Component/portfolio/Portfolio";
import Statistics from "./Component/statistics/Statistics";
import Rev from "./Component/Rev/Rev";

const App = () => {
  const [t, i18n] = useTranslation();
  const [loading, setLoading] = useState(true);
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

  // handle spinner
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Meta />
          <FixedBtn />
          <Nav />
          <Hero />
          <Marketing />
          <Portfolio />
          <About />
          <Serv />
          <Statistics />
          <Rev />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
