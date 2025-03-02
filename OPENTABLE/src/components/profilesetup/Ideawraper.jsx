import Ideapresent from "./Ideapresent";
import React from "react";
import Cabin from "./Cabin";
import Allpagenav from "./Allpagenav";
import { useState } from "react";
const Ideawraper = () => {
  const [idea, setidea] = useState("");

  return (
    <>
      <Allpagenav />
      <Ideapresent setidea={setidea} />
      <Cabin idea={idea} />
    </>
  );
};

export default Ideawraper;
