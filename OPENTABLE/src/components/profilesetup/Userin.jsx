import React from "react"
import "../CSS/profilediv.css"
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";


const Userin = ({usernamedisplay}) => {
  const navi = useNavigate();
    const logouthandle = ()=>{
      
        // alert("this is logouthandle");
        localStorage.removeItem("user");

         navi("/");
    }

  return (
    <div className="profilediv">
      <div className="profileicon2"><FaRegUserCircle />
      </div>
      <div className="usernamedisplay">{usernamedisplay}</div>
      <div className="logout" onClick = {logouthandle}> <CiLogout />
&nbsp;      Logout</div>
    </div>
  )
};

export default Userin;
