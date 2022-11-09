import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./app/stylesheet/style.scss";
import Header from "./app/components/header/Header";
import Admission from "./app/components/admission/Admission";

function App() {
  return (
    <>
      <Header />
      <Admission />
    </>
  );
}

export default App;
