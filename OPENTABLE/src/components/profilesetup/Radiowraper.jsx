import React, { useState } from "react"
import Ideahasornot from "./Ideahasornot";
import Cabin from "./Cabin";
import Allpagenav from "./Allpagenav";
import Ideapresent from "./Ideapresent";
import Whatkindaidea from "./Whatkindaidea";
import Skills from "./Skills";
const Radiowraper = (props) => {
    const [radiofinally , setradiofinally] = useState("");
    const [idea , setidea] = useState("");
    const [wtkindaidea , setwtkindaidea] = useState("");
    const [gotskills , setgotskills] = useState("");

  return (
    <>
            <Allpagenav/>
            <Ideahasornot setradiofinally = {setradiofinally}/>
            <Cabin radiofinally = {radiofinally} idea= {idea}/>
            <Ideapresent setidea = {setidea}/>
            <Whatkindaidea setwtkindaidea = {setwtkindaidea}/>
            <Skills setgotskills = {setgotskills}/>
    </>
  )
};

export default Radiowraper;
