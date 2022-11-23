import React, { useEffect, useState } from "react";
import { dataAboutDevplus } from "../../config/dataApi";

export default function Aboutdevplus() {
  // const [list, setList] = useState([]);
  const [dataApi, setDataApi] = useState([]);

  // useEffect(() => {
  //   let mounted = true;
  //   dataAboutDevplus().then((items) => {
  //     if (mounted) {
  //       setList(items);
  //       console.log(list);
  //     }
  //   });
  //   return () => (mounted = false);
  // }, []);

  const fetchProducts = async () => {
    const response = await dataAboutDevplus().catch((err) => {
      console.log("ERROR", err);
    });

    setDataApi(response.data);
  };
  console.log(dataApi);
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="aboutdevplus">
      <div className="aboutdevplus-container">
        <div className="aboutdevplus-roadboard">
          <h4 className="aboutdevplus-roadboard-title">ROAD TO BE A DEVPLUS</h4>
          <ol className="aboutdevplus-roadboard-box">
            {dataApi.map((item) => {
              <li className="aboutdevplus-roadboard-list">
                <div className="aboutdevplus-roadboard-boxcontent">
                  <span className="">{item.id}</span>
                  <div className="content">{item.title}</div>
                </div>
              </li>;
            })}
            {/* <li className="aboutdevplus-roadboard-list">
              <div className="aboutdevplus-roadboard-boxcontent">
                <span className="">1</span>
                <div className="content">Apply Devplus</div>
              </div>
            </li>
            <li className="aboutdevplus-roadboard-list">
              <div className="aboutdevplus-roadboard-boxcontent">
                <span>2</span>
                <div className="content">Testing and Interview</div>
              </div>
            </li>
            <li className="aboutdevplus-roadboard-list">
              <div className="aboutdevplus-roadboard-boxcontent">
                <span>3</span>
                <div className="content">1st plus (+1) campus</div>
              </div>
            </li>
            <li className="aboutdevplus-roadboard-list">
              <div className="aboutdevplus-roadboard-boxcontent">
                <span>4</span>
                <div className="content">2nd plus (++) campus</div>
              </div>
            </li>
            <li
              style={{ marginBottom: "0" }}
              className="aboutdevplus-roadboard-list"
            >
              <div className="aboutdevplus-roadboard-boxcontent">
                <span>5</span>
                <div className="content">Onboard & start your career</div>
              </div>
            </li> */}
          </ol>
        </div>
        <div className="aboutdevplus-boxcontent">
          <h5 className="aboutdevplus-tit">About Devplus</h5>

          <h2 className="aboutdevplus-title">
            The Fact: Skilled labour shortage for software companies but full of
            freshers and low level juniors
          </h2>
          <p className="aboudevplus-content">
            Our responsibility is filling the gap between the quality of
            graduate students and the quality of engineers. Devplus will help
            reducing the cost of re-training and accelerating the skill-up
            progress of students and freshers.
          </p>
        </div>
      </div>
    </div>
  );
}
