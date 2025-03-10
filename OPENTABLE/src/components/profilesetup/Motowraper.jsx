import React, { useState } from "react";
import Allpagenav from "./Allpagenav";
import Moto from "./Moto";
import Cabin from "./Cabin";
const Motowraper = () => {
      const [moto, setmoto] = useState((sessionStorage.getItem("motoresponce"))?sessionStorage.getItem("motoresponce"): "");
    
  return (
    <>
      <Allpagenav />
      <Moto setmoto = {setmoto}/>
      <Cabin moto = {moto}/>
    </>
  );
};

export default Motowraper;
