import React from "react";

export default function Footer() {
  return (
    <>
      <footer id="rs-footer" className="rs-footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col">
                <h4 className="widget-title">
                  DEVELOP THE SKILLS TO MOVE FAST AND STAY AHEAD.
                </h4>
                <ul className="site-map white-color">
                  <li>
                    Devplus is not a training center, it’s battle campus for you
                    to level up your skillsets and ready to onboard any projects
                    in our “kindest” companies listing
                  </li>
                </ul>
              </div>
              <div className="col">
                <h4 className="widget-title">FOR DEVPLUS</h4>
                <ul className="site-map white-color">
                  <li>
                    <a href="https:/my.devplus.asia">Training space</a>
                  </li>
                  <li>
                    <a href="https:/my.devplus.asia">Alumni network</a>
                  </li>
                  <li>
                    <a href="https:/my.devplus.asia">Connect with experts</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h4 className="widget-title">OUR CAMPUS</h4>
                <ul className="site-map white-color">
                  <li>
                    <a href="https:/my.devplus.asia">
                      One plus (+) Programing foundation
                    </a>
                  </li>
                  <li>
                    <a href="https:/my.devplus.asia">
                      Two plus (++) Skill up and onboard
                    </a>
                  </li>
                  <li>
                    <a href="https:/my.devplus.asia">
                      Three plus (+++) Become a senior
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h4 className="widget-title">ADDRESS</h4>
                <ul className="address-widget">
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="address-icon white-color">
                      368 Đường Trần Hưng Đạo, An Hải, An Hải Tây, Sơn Trà, Đà
                      Nẵng
                    </div>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone-volume"></i>
                    <div className="address-icon">
                      <a href="tel:0368492885">(+84) 368492885</a>
                    </div>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <div className="address-icon">
                      <a href="mailto:hello@stunited.vn">hello@stunited.vn</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* end footer top  
         start footer bottom  */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row-footer">
              <div className="col-img">
                <a href="/">
                  <img src="./artboard_2.png" alt="logo" />
                </a>
              </div>
              <div className="col-link">
                <ul className="address-widget">
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/Devplusprogramme"
                    >
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <p className="fb-color">Facebook</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
