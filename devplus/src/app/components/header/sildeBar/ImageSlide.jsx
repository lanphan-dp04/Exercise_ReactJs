import React, { useEffect, useState } from "react";
import { dataSildeBar } from "../../../config/dataApi";
import ItemModal from "./ItemModal";

const ImageSlide = (props) => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [count, setCount] = useState();

  const fetchProducts = async () => {
    const response = await dataSildeBar().catch((err) => {
      console.log("ERROR", err);
    });

    setData(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlClickPrev = () => {
    if (count > 1) {
      setCount(+count - +1);
    } else if (+count === +1) {
      setCount(6);
    }
  };
  const handlClickNext = () => {
    setCount(+count + +1);
    if (+count === +6) {
      setCount(1);
    }
  };

  const handlClickShow = (id) => {
    setCount(id);
    setId(id);
    isShown === true ? setIsShown(false) : setIsShown(true);
  };
  const ArrImage = data;

  const renderImageSlide = ArrImage.map((element) => {
    return (
      <img
        key={element.id}
        onClick={(e) => handlClickShow(element.id)}
        src={element.src}
        alt="devplus"
        className={`slidebar-image-${element.id}`}
      />
    );
  });
  return (
    <>
      {renderImageSlide}
      {isShown && (
        <div
          className={`${
            isShown === true ? "modal-box-open" : "modal-box-close"
          }`}
          id="modal-container"
        >
          <div  className="modal-box">
            <div
              data-aos="zoom-in-down"
              id="carouselExampleControls"
              className="carousel slide zoomInDown"
            >
              <button
                type="button"
                className="modal-closebutton"
                onClick={(e) => handlClickShow()}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <div className="carousel-inner">
                <ItemModal  {...data} setId={count} id={id} />
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
                onClick={(e) => handlClickPrev()}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
                onClick={(e) => {
                  handlClickNext();
                }}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageSlide;
