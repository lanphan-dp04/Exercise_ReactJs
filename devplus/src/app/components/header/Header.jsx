import React from "react";
import LogoHeader from "./LogoHeader";
import NavHeader from "./NavHeader";
import SildeBarHeader from "./SildeBarHeader";

const Header = () => {
  return (
    <header>
      <div className="container container-sm container-md">
        <div className="header-wrapper row">
          <LogoHeader />
          <NavHeader />
          <SildeBarHeader />
        </div>
      </div>
    </header>
  );
};
export default Header;
