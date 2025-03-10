import React from "react";
import Allpagenav from "./Allpagenav";
import { useState } from "react";
import Skills from "./Skills";
import Cabin from "./Cabin";

const Skillwraper = () => {
  const [finalskills, setfinalskills] = useState([]);
  const [suggestedskills , setsuggestedskills] = useState([]);
   const skillsetter = (item) => {
      setfinalskills(item);
    }; 
    const suggestedskillsetter = (item) => {
      setsuggestedskills(item);
    }
  return (
    <>
      <Allpagenav/>
      <Skills skillsetter={skillsetter} suggestedskillsetter = {suggestedskillsetter}/>
      <Cabin finalskills={finalskills} suggestedskills={suggestedskills} />   
    </>
  );
};

export default Skillwraper;
