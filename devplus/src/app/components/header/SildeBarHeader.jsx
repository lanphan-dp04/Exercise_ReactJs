import React, { useEffect, useState } from "react";
import { dataSildeBar } from "../../config/dataApi";
import ImageSlide from "./sildeBar/ImageSlide";

const SildeBarHeader = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsopen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isShowItem, setIsShowItem] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  const handleCloseItem = () => {
    setIsShowItem(false);
  };
  const handleShowItem = () => {
    isShowItem === true ? setIsShowItem(false) : setIsShowItem(true);
  };
  const handleShowNav = () => {
    isShow === true ? setIsShow(false) : setIsShow(true);
  };

  const fetchProducts = async () => {
    const response = await dataSildeBar().catch((err) => {
      console.log("ERROR", err);
    });

    setData(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderNav = () => {
    return (
      <div className="header-nav">
        <ul className="main-nav">
          <li className="nav-link">
            <a className="nav-link--href" href="#">
              HOME
            </a>
          </li>
          <li className="nav-link">
            <a className="nav-link--href" href="#">
              ABOUT DEVPLUS
            </a>
          </li>
          <li className="nav-link sub-menu">
            <a className="nav-link--href" href="#">
              OUR PROGRAMME
            </a>

            <ul
              className={`sub-menu-option ${
                isShowItem === true ? "sub-menu-option-active" : ""
              }`}
            >
              <li className=" nav-link-option">
                <a href="https://stunited.vn/st-software/">One plus campus</a>
              </li>
              <li className=" nav-link-option">
                <a href="https://stunited.vn/st-digital/">Two plus campus</a>
              </li>
              <li className=" nav-link-option">
                <a href="https://stunited.vn/st-incubation/">
                  Three plus campus
                </a>
              </li>
              <li
                className="close-btn-option option-toggle--active"
                onClick={handleCloseItem}
              >
                <i className="fa-solid fa-xmark"></i>&nbsp;Close
              </li>
            </ul>
            <div
              className="nav-icon-1 option-toggle--active"
              onClick={handleShowItem}
            >
              <i
                className={`fa-solid fa-angle-up icon-plus icon-up ${
                  isShowItem === true ? "icon-active" : "icon-close"
                }`}
              ></i>
              <i
                className={`fa-solid fa-angle-down icon-minus icon-down ${
                  isShowItem === false ? "icon-active" : "icon-close"
                }`}
              ></i>
            </div>
          </li>
          <li
            className={`nav-link  ${
              isShowItem === true ? "nav-link--none" : ""
            }`}
          >
            <a className="nav-link--href" href="#/">
              DEVPLUS ACTIVITIES
            </a>
          </li>
        </ul>
      </div>
    );
  };

  const renderSlideBar = data.map((data) => {
    return (
      <div key={"data"} className="nav-slideBar col-lg-2">
        <a className="nav-expander" onClick={handleShowNav}>
          <i className="fa fa-bars"></i>
        </a>
        <a onClick={ToggleSidebar} className="nav-expander nav-expander-none ">
          <span className="dot1"></span>
          <span className="dot2"></span>
          <span className="dot3"></span>
        </a>
        <div
          className={`slidebar-container ${
            isOpen === true ? "sidebar-active" : ""
          }`}
        >
          <div onClick={ToggleSidebar} className="slidebar-kickoff">
            <div id="line">
              <span className="line1"></span>
              <span className="line2"></span>
            </div>
          </div>

          <div className="slidebar-boxlogo">
            <img className="slidebar-logo" src={data.logo} alt="devplus" />
          </div>

          <div className="slidebar-boxcontent">
            <p className="slidebar-content">{data.description}</p>
          </div>

          <div className="slidebar-imagebox">
            <ImageSlide {...data} />
          </div>

          <div className="slidebar-map">
            <img src={data.map} alt="devplus" className="slidebar-image-map" />
          </div>

          <div className="slidebar-facebookicon">
            <a href="https://www.facebook.com/Devplusprogramme" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      {renderSlideBar}
      {isShow && renderNav()}
    </>
  );
};

export default SildeBarHeader;
