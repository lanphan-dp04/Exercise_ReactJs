import React from "react";

const NavHeader = () => {
  return (
    <nav className="col-lg-8">
      <ul className="nav-list text-bold">
        <li className="nav-item">
          <a href="/#" className="nav-link">
            HOME
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link">
            ABOUT DEVPLUS
          </a>
        </li>
        <li className="nav-item pointer-default">
          <a href="/#" className="nav-link">
            OUR PROGRAMME
          </a>
          <ul className="menu-bar">
            <li className="menu-item">
              <a href="/#" className="menu-link">
                One plus campus
              </a>
            </li>
            <li className="menu-item">
              <a href="/#" className="menu-link">
                Two plus campus
              </a>
            </li>
            <li className="menu-item">
              <a href="/#" className="menu-link">
                Three plus campus
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link">
            DEVPLUS ACTIVITIES
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavHeader;
