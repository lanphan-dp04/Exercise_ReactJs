import "./Campus.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function Campus() {
  const [itemCampus, setItemCampus] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  let url = "https://62d16e83d4eb6c69e7dd4ff6.mockapi.io/mainCampus";
  async function fetchDataCampus() {
    try {
      setIsLoad(true);
      let res = await axios.get(url, {});
      let temp = await res.data;
      setIsLoad(false);
      setItemCampus(temp);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchDataCampus(url);
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
        <div className="row-campus">
          {itemCampus.map((item, index) => {
            return (
              <div className="col-4" key={index}>
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
