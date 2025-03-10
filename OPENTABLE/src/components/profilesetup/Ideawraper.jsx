import Ideapresent from "./Ideapresent";
import React from "react";
import Cabin from "./Cabin";
import Allpagenav from "./Allpagenav";
import { useState } from "react";
const Ideawraper = () => {
  const pastidea = sessionStorage.getItem("idearesponce");
    const [idea, setidea] = useState((pastidea)?pastidea:" ");

  return (
    <>
      <Allpagenav />
      <Ideapresent setidea={setidea} />
      <Cabin idea={idea} />
    </>
  );
};

export default Ideawraper;
