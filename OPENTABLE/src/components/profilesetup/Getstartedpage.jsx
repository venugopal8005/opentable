import React from "react"
import "../CSS/getstartedpage.css"
import {Player} from "@lottiefiles/react-lottie-player"
import getstartedanimation from "../../assets/getstartedanimation.json"
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import Userin from "./Userin";  
const Getstartedpage = (props) => {
    const [clicked , setclicked] = useState(false);
    const [namedata,setnamedata] = useState("");
    const profile_action = ()=>{
       
            const username_from_storage = localStorage.getItem("user");
            const parseddata = JSON.parse(username_from_storage);
            setnamedata(parseddata.username);
                 
        setclicked(!clicked);
        
    }
  return (
    <div className="getstartedpage_maindiv">
        <div className="navbartype">
        <div className="logo"><a href="/">OpenTable</a></div>
        <div className="profileicon" onClick={profile_action}>
        <CgProfile />
        
        </div>
        {clicked && <Userin usernamedisplay = {namedata}/>}
        </div>
 
     
     <div className="infodiv">
        <div className="quote 1">Finding the right <span className="word">TEAM</span> starts here!<br></br>
            <div className="quote_2">Let’s personalize your experience.</div>
            <div className="getstarted_button">Let's go</div>
        
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
