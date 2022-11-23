import React from "react";
import Aboutdevplus from "../aboutdevplus/Aboutdevplus";
import Banner from "../banner/Baner";
import Campus from "../mainCampus/Campus";
import MustHave from "../mustHave/MustHave";
import Concerns from "./concerns/Concerns";
import Saying from "./saying/Saying";

const Main = () => {
  return (
    <>
      <Banner />
      <Aboutdevplus />
      <MustHave />
      <Campus />
      <Concerns />

      <Saying />
    </>
  );
};

export default Main;
