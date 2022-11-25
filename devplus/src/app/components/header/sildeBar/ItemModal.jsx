import React, { useState } from "react";
import { useEffect } from "react";

const ItemModal = (props) => {
  
  const [id ,setId] = useState(props.id);
  //console.log(props)
  let imageListModal = Object.values(props);
  useEffect(() => {
   setId(props.setId);
  });
  const renderItemModal = imageListModal.map((element) => {
    if (+element.id === +id) {
      return (
        <div  key={element.id} className="carousel-item carousel-item-active">
          <img src={element.src} className="d-block w-100" alt="STunited" />
        </div>
      );
    }
  });
  return <>{renderItemModal}</>;
};

export default ItemModal;
