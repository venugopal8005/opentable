import React from "react"
import Userin from "./Userin";  
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import "../CSS/getstartedpage.css"

const Allpagenav = (props) => {
    const [clicked , setclicked] = useState(false);
    const [namedata,setnamedata] = useState("");
    const profile_action = ()=>{
       if(sessionStorage.getItem("user")){
        
        const username_from_storage = sessionStorage.getItem("user");
        const parseddata = JSON.parse(username_from_storage);
        setnamedata(parseddata.username);
       }
                 
        setclicked(!clicked);
        
    }
  return (

    
        <div className="navbartype">
        <div className="logoallpagenav"><a href="/" className="allpagenavlogo">OpenTab</a></div>
        <div className="profileicon" onClick={profile_action}>
        <CgProfile />
        
        </div>
        {clicked && <Userin usernamedisplay = {namedata}/>}
        </div>
  )
};

export default Allpagenav;
