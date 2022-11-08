import React, { useEffect } from "react";
import { useState } from "react";
import { dataCommonConcern } from "../../../config/dataApi";
import ItemQuestion from "./question/ItemQuestion";

const Concerns = () => {
  const [data, setData] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const handleShowVideo = () => {
    isShow === true ? setIsShow(false) : setIsShow(true);
  };
  const fetchData = async () => {
    const response = await dataCommonConcern().catch((err) => {
      console.log("ERROR", err);
    });
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="section-concern">
        <div className="container container-md container-lg js-container-concern">
          <div className="concern-list row">
            <div className="concern-item col-xl-6">
              <div className="concern-item-wrapper">
                <h2 className="concern-title title text-bold">
                  Some common concerns
                </h2>
                <ul className="question-list js-question-list">
                  <ItemQuestion value={data} />
                </ul>
              </div>
            </div>
            <div className="concern-item concern-video col-xl-6">
              <button className="popup-videos" onClick={handleShowVideo}>
                <i className="fa fa-play"></i>
              </button>
            </div>
          </div>
          <div
            className={`iframe-wrapper ${
              isShow === true ? "js-show-video" : ""
            }`}
          >
            <button className="btn button-delete" onClick={handleShowVideo}>
              <i className="fa fa-remove"></i>
            </button>
            <iframe 
              className="iframe"
              src={`${
                isShow === true
                  ? "https://www.youtube.com/embed/mUjhiT0zSKI"
                  : ""
              }`}
              frameBorder="0"
            ></iframe>
          </div>
        </div>
        <div
          onClick={handleShowVideo}
          className={`js-bg-body ${isShow === true ? "js-show-video" : ""}`}
        ></div>
      </section>
    </>
  );
};

export default Concerns;
