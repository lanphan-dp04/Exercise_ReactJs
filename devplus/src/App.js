import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
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
      <Main />
    </>
  );
}

export default App;
