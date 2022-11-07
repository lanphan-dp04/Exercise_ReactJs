import React, { useState } from "react";

const SildeBar = (props) => {
  const active = props.value;

  return (
    <div
      className={`slidebar-container ${
        active === true ? "sidebar-active" : ""
      }`}
    >
      <div className="slidebar-kickoff">
        <div id="line">
          <span className="line1"></span>
          <span className="line2"></span>
        </div>
      </div>

      <div className="slidebar-boxlogo">
        <img
          className="slidebar-logo"
          src="../assets/image/offcanvasImage/logodevplus.webp"
          alt="devplus"
        />
      </div>

      <div className="slidebar-boxcontent">
        <p className="slidebar-content">
          Devplus's mission is filling the gap between school and corporate,
          reduce in-house training cost and effort for IT companies.
        </p>
      </div>

      <div className="slidebar-imagebox">
        {/* <img
          src="../assets/image/offcanvasImage/1.webp"
          alt="devplus"
          className="slidebar-image-0"
        />
        <img
          src="../assets/image/offcanvasImage/2.webp"
          alt="devplus"
          className="slidebar-image-1"
        />
        <img
          src="../assets/image/offcanvasImage/3.webp"
          alt="devplus"
          className="slidebar-image-2"
        />
        <img
          src="../assets/image/offcanvasImage/4.webp"
          alt="devplus"
          className="slidebar-image-3"
        />
        <img
          src="../assets/image/offcanvasImage/5.webp"
          alt="devplus"
          className="slidebar-image-4"
        />
        <img
          src="../assets/image/offcanvasImage/6.webp"
          alt="devplus"
          className="slidebar-image-5"
        /> */}
      </div>

      <div className="slidebar-map">
        <img
          src="../assets/image/offcanvasImage/map.webp"
          alt="devplus"
          className="slidebar-image-map"
        />
      </div>

      <div className="slidebar-facebookicon">
        <a href="https://www.facebook.com/Devplusprogramme" target="_blank">
          <i className="fa-brands fa-facebook"></i>
        </a>
      </div>
    </div>
  );
};

export default SildeBar;
