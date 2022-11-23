import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { dataLumniSaying } from "../../../config/dataApi";

const Saying = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await dataLumniSaying().catch((err) => {
      console.log("ERROR", err);
    });
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const setting = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="section-saying">
      <div className="container container-lg container-md">
        <h2 className="saying-title title text-bold">What alumni saying</h2>
        <ul className="saying-list">
          <Slider {...setting}>
            {data.map((element) => {
              return (
                <li key={element.id} className="saying-item">
                  <div className="saying-item-wrapper">
                    <div className="saying-content">
                      <div className="saying-image">
                        <img src={element.imageQuote} alt="quote" />
                      </div>
                      <p className="saying-desc text-bold">{element.title}</p>
                    </div>
                    <div className="saying-author">
                      <div className="author-avatar-wrapper">
                        <img src={element.imageAvatar} alt="avatar person" />
                      </div>
                      <div className="author-info">
                        <a href="#" className="author-name text-bold">
                          {element.name}
                        </a>
                        <span className="author-designation text-bold">
                          {element.desc}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </Slider>
        </ul>
      </div>
    </section>
  );
};

export default Saying;
