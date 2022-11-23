import "./MustHave.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { dataMustHave } from "../../config/dataApi";

function MustHave() {
  const [categories, setCategories] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  async function fetchData() {
    try {
      setIsLoad(true);
      let response = await dataMustHave();
      let temp = await response.data;
      setIsLoad(false);
      setCategories(temp);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchData(dataMustHave());
  }, []);

  return (
    <div className="rs-categories">
      <div className="container">
        <div className="row-must">
          <div className="sec-title">
            <h2 className="">What an engineer after Devplus will must have?</h2>
          </div>
        </div>
        <div className="row-must">
          {categories.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="categories-item">
                  <div className="icon-item">
                    <img src={item.icon} alt=""></img>
                  </div>
                  <div className="content-part">
                    <h4 className="title">{item?.title}</h4>
                    <span className="course">{item?.course}</span>
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
export default MustHave;
