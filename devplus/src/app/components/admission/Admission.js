import "./Admission.scss";
import React from "react";
import img from "../../assets/logo/Admission_for_2021.png";

function Admission() {
  return (
    <div className="rs-cta main">
      <div className="row-adm">
        <div className="col-6">
          <div className="img-part">
            <img src={img} alt=""></img>
          </div>
        </div>
        <div className="col-6">
          <div className="content">
            <div className="sec-title">
              <h2 className="title">Admission for 2021</h2>
              <div className="desc">
                Disclaimer: This position is expected to start around Feb 2022
                and continue through the entire Summer term. We ask for a
                minimum of 12 weeks, full-time, for most internships. Please
                consider before submitting an application.
              </div>
              <div className="desc">
                Devplus aims to provide students the chance to work with our
                clients and awesome mentors to level up your programing skillset
                in the RIGHT path. With your education and experience, you will
                be able to take on real-world challenges from day one.{" "}
              </div>
            </div>
            <div className="btn-part">
              <a
                class="readon banner-style uppercase"
                href="https://stunited.typeform.com/registration"
                target="_blank"
                rel="noreferrer"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admission;
