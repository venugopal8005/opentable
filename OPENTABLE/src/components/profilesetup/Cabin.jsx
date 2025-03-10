import React, { useState } from "react";
import "../CSS/cabin.css";
import "../CSS/botomnavbar.css";
import Moto from "./Moto";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
const Cabin = ({ radiofinally, idea, finalskills,moto, whatkindidea,suggestedskills} ) => {
  const location = useLocation();
const posttingprofile = async()=>{
  const usernameres = JSON.parse(sessionStorage.getItem("user")).username;
  const hasornotres = sessionStorage.getItem("radioresponce");
  const whatkindaideares = sessionStorage.getItem("whatkindidea");
  const ideares = sessionStorage.getItem("idearesponce");
  const motores = sessionStorage.getItem("motoresponce");
  const skillres = sessionStorage.getItem("skillsresponce").split(",");

  console.log("posttingprofile");
  try {
    await axios.post("http://localhost:5000/profile",{
      username:usernameres,
      hasorhasnotidea:(hasornotres == "radio1")?true:false,
      moto:motores,
      skills: skillres,
      idea:ideares,
      whatkindidea:whatkindaideares
    });
  } catch (error) {
    console.log(error);
  }
}
  const navigate = useNavigate();
  const routearray = [
    "/profilesetup/got_anything",
    radiofinally == "radio2"
      ? "/profilesetup/what_kinda_idea"
      : "/profilesetup/present_ur_idea",
    "/profilesetup/skills",
    "/profilesetup/let_us_know_about_urself",
    "/profilesetup/warping_up"
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
      sessionStorage.setItem("radioresponce", radiofinally);
    }
    if (location.pathname == "/profilesetup/present_ur_idea") {
      sessionStorage.setItem("idearesponce", idea);
    }
    if (location.pathname == "/profilesetup/skills") {
      sessionStorage.setItem("skillsresponce", finalskills);
      sessionStorage.setItem("suggestedskills", suggestedskills);

    }
    if (location.pathname == "/profilesetup/let_us_know_about_urself") {
      sessionStorage.setItem("motoresponce", moto);
      posttingprofile();    
      navigate("/profilesetup/warping_up");





    

    }
    if (location.pathname == "/profilesetup/what_kinda_idea") {
      sessionStorage.setItem("whatkindidea", whatkindidea);
      
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
