import React, { useEffect } from "react";
import AOS from "aos";
import Nav from "./Component/layout/navbar/Nav";
import { useTranslation } from "react-i18next";

const App = () => {
  const [t, i18n] = useTranslation();
  // handle animation
  useEffect(() => {
    AOS.init();
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
      <Nav />
    </div>
  );
};

export default App;
