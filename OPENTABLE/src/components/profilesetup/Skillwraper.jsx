import React from "react";
import Allpagenav from "./Allpagenav";
import { useState } from "react";
import Skills from "./Skills";
import Cabin from "./Cabin";

const Skillwraper = () => {
  const [finalskills, setfinalskills] = useState([]);
   const skillsetter = (item) => {
      setfinalskills(item);
    }; 
  return (
    <>
      <Allpagenav/>
      <Skills skillsetter={skillsetter}/>
      <Cabin finalskills={finalskills} />   
    </>
  );
};

export default Skillwraper;
