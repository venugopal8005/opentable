import React, { useState } from "react"
import Ideahasornot from "./Ideahasornot";
import Cabin from "./Cabin";
import Allpagenav from "./Allpagenav";

const Radiowraper = (props) => {
    const [radiofinally , setradiofinally] = useState("");


  return (
    <>
            <Allpagenav/>
            <Ideahasornot setradiofinally = {setradiofinally}/>
            <Cabin radiofinally = {radiofinally}/>
            
    </>
  )
};

export default Radiowraper;
