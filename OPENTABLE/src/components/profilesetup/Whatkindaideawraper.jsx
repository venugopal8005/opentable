import React from "react";
import Allpagenav from "./Allpagenav";
import Whatkindaidea from "./Whatkindaidea";
import Cabin from "./Cabin";
import { useState } from "react";

const Whatkindaideawraper = (props) => {
    const [whatkindidea , setwhatkindidea] = useState(sessionStorage.getItem("whatkindidea") || "");
  return (
    <>
      <Allpagenav />
      <Whatkindaidea setwhatkindidea = {setwhatkindidea}/>
      <Cabin  whatkindidea = {whatkindidea}/>
    </>
  );
};

export default Whatkindaideawraper;
