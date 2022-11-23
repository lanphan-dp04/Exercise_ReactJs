import "./layoutAdmission.scss";
import { useState, useEffect } from "react";
import { dataAdmission } from "../../config/dataApi";
import img from "../../assets/logo/Admission.png";
function Admission() {
  const [admission, setAdmission] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  async function fetchData() {
    try {
      setIsLoad(true);
      let response = await dataAdmission();
      let temp = await response.data;
      setIsLoad(false);
      setAdmission(temp);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }
  useEffect(() => {
    fetchData(dataAdmission());
  }, []);
  return (
    <div className="rs-cta main">
      {admission.map((item, index) => {
        return (
          <div className="row-adm" key={index}>
            <div className="col-6">
              <div className="img-part">
                <img src={img} alt=""></img>
              </div>
            </div>
            <div className="col-6">
              <div className="content">
                <div className="sec-title">
                  <h2 className="title">{item?.name}</h2>
                  <div className="desc">{item?.intro_1}</div>
                  <div className="desc">{item?.intro_2}</div>
                </div>
                <div className="btn-part">
                  <a
                    class="readon banner-style uppercase"
                    href="https://stunited.typeform.com/registration"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Admission;
