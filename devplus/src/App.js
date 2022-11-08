import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./app/stylesheet/style.scss";
import Header from "./app/components/header/Header";
import MustHave from "./app/components/mustHave/MustHave";

function App() {
  return (
    <>
      <Header />
      <MustHave />
    </>
  );
}

export default App;
