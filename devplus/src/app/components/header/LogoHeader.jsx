import React from "react";
import logo from "../../assets/logo/logo.webp";

const LogoHeader = () => {
  return (
    <div className="col-lg-2 logo">
      <a href="/#" className="logo-link">
        <img src={logo} alt="logo-devplus" />
      </a>
    </div>
  );
};

export default LogoHeader;
