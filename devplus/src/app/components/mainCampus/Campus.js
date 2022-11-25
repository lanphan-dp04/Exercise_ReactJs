import "./Campus.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { dataCampus } from "../../config/dataApi";

function Campus() {
  const [itemCampus, setItemCampus] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  async function fetchDataCampus() {
    try {
      setIsLoad(true);
      let res = await dataCampus();
      let temp = await res.data;
      setIsLoad(false);
      setItemCampus(temp);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchDataCampus(dataCampus());
  }, []);

  return (
    <div id="rs-popular-courses" className="rs-popular-courses bg6 main">
      <div className="container">
        <div className="row-campus">
          <div className="col-12">
            <div className="sec-title">
              <h2 className="title">Our main campus</h2>
            </div>
          </div>
        </div>
        <div className="row-campus row">
          {itemCampus.map((item, index) => {
            return (
              <div className="col-lg-4 padding-campus col-md-6" key={index}>
                <div className="campus-item">
                  <div className="img-part">
                    <img src={item?.avatar} alt=""></img>
                  </div>
                  <div className="content-part">
                    <h3 className="title">{item?.name}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Campus;
