import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./app/stylesheet/style.scss";
import Header from "./app/components/header/Header";
import MustHave from "./app/components/mustHave/MustHave";
import Campus from "./app/components/mainCampus/Campus";

function App() {
  return (
    <>
      <Header />
      <MustHave />
      <Campus />
    </>
  );
}

export default App;
