import React from "react"
import "../CSS/getstartedpage.css"
import {Player} from "@lottiefiles/react-lottie-player"
import getstartedanimation from "../../assets/getstartedanimation.json"
import Allpagenav from "./Allpagenav"
import { useNavigate } from "react-router-dom";
const Getstartedpage = (props) => {
    const navigate = useNavigate();
const getstartedhandle = ()=>{
  
  navigate("/profilesetup/got_anything");
}
  return (
    
    <div className="getstartedpage_maindiv">
              <Allpagenav/>
     <div className="infodiv">
        <div className="quote_1">Finding the right <br></br> <span className="word">TEAM</span> starts here!<br></br>
            <div className="quote_2">Let’s personalize your experience.</div>
            <div className="getstarted_button" onClick={getstartedhandle}>Let's Bounce</div>
        
        </div>
        <div className="lotanimation"> 
        <Player
              autoplay
              loop
              src={getstartedanimation}
              className="tellabout-lottie"
            />
        </div>

       
     </div>
    </div>
  )
};

export default Getstartedpage;
