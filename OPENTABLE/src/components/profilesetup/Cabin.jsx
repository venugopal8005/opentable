import React, { useState } from "react";
import "../CSS/cabin.css";
import "../CSS/botomnavbar.css";
import Moto from "./Moto";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
const Cabin = ({ radiofinally, idea, finalskills,moto , whatkindidea} ) => {
  const location = useLocation();

  const navigate = useNavigate();
  const routearray = [
    "/profilesetup/got_anything",
    radiofinally == "radio2"
      ? "/profilesetup/what_kinda_idea"
      : "/profilesetup/present_ur_idea",
    "/profilesetup/skills",
    "/profilesetup/let_us_know_about_urself",
  ];
  const routeindex = routearray.indexOf(location.pathname);
  const [currentroute, setcurrenroute] = useState(Math.abs(routeindex) + 1);
  console.log(routeindex);

  const handleback = () => {
    navigate(-1);
    setcurrenroute(currentroute - 1);
  };
  const handlefront = () => {
    if (currentroute == 4) {
      navigate("/");
    } else {
      setcurrenroute(currentroute + 1);

      navigate(routearray[currentroute]);
    }
    if (routeindex == 0) {
      localStorage.setItem("radioresponce", radiofinally);
    }
    if (location.pathname == "/profilesetup/present_ur_idea") {
      localStorage.setItem("idearesponce", idea);
    }
    if (location.pathname == "/profilesetup/skills") {
      localStorage.setItem("skillsresponce", finalskills);
    }
    if (location.pathname == "/profilesetup/let_us_know_about_urself") {
      localStorage.setItem("motoresponce", moto);
      
      
      
    }
    if (location.pathname == "/profilesetup/what_kinda_idea") {
      localStorage.setItem("whatkindidea", whatkindidea);
      async () => {
        try {
          const res = await axios.post("http://localhost:5000/profile", {
            radio: localStorage.getItem("radioresponce"),
            idea: localStorage.getItem("idearesponce"),
            skills: localStorage.getItem("skillsresponce"),
            moto: localStorage.getItem("motoresponce"),
            whatkindidea: localStorage.getItem("whatkindidea"),
          });
          console.log(res.data);
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  return (
    <div className="cabindiv">
      <div className="interviewdiv"></div>
      <div className="botomnavbar">
        <button className="backbutton" onClick={handleback}>
          Back
        </button>
        <div className="skip">
          <u>Skip for now</u>
        </div>
        <button className="nextbutton" onClick={handlefront} type="submit">
          Next &#8594;
        </button>
      </div>
    </div>
  );
};

export default Cabin;
