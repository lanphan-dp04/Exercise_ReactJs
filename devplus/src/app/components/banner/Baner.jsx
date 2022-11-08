import React from "react";

export default function Banner(props) {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-boxcontent">
          <h1 data-aos="fade-right" className="banner-title">
            Devplus Will Support The Early Stage Developers Go The Right Career
            Path
          </h1>
          <p className="banner-content">
            Devplus is not a training center, it's battle campus for you to
            level up your skillsets and ready to onboard any projects in our
            "kindest" companies listing
          </p>
          <a
            href="https://stunited.typeform.com/registration"
            target="blank"
            className="banner-button"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
}
