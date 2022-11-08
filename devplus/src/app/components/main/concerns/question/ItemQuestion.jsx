import React, { useState } from "react";


const ItemQuestion = (props) => {
  const listQuestion = props.value;
  const [isId, setIsId] = useState(0);
  const [isShow, setIsShow] = useState(false);

  const handleShowQuestion = (id) => {
    setIsId(id);
    if (+isId === +id) {
      isShow === true ? setIsShow(false) : setIsShow(true);
    } else {
      setIsShow(true);
    }
  };

  const renderQuestion = listQuestion.map((element) => {
    return (
      <li
        onClick={(e) => handleShowQuestion(element.id)}
        className={`question-item question-${element.id} ${
          +element.id === +isId && (isShow === true ? "question-active" : "")
        } `}
        key={element.id}
      >
        <div className="question-item-header">
          <span className="question-icon"></span>
          <h4 className="question-title text-bold">{element.title}</h4>
        </div>
        <p className="question-desc text-regular">{element.desc}</p>
      </li>
    );
  });
  return <>{renderQuestion}</>;
};

export default ItemQuestion;
