import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./app/stylesheet/style.scss";
import Header from "./app/components/header/Header";
import MustHave from "./app/components/mustHave/MustHave";
import Campus from "./app/components/mainCampus/Campus";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./app/stylesheet/style.scss";
import Header from "./app/components/header/Header";
import Main from "./app/components/main/Main";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />

      <MustHave />
      <Campus />

      <Main />

    </>
  );
}

export default App;
