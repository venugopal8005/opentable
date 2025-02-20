import React, { useState } from "react"
import "../CSS/cabin.css"
import "../CSS/botomnavbar.css"
import Moto from "./Moto";
import{useNavigate} from "react-router-dom";

const Cabin = (props) => {

    const [currentroute,setcurrenroute] = useState(0);
    const navigate = useNavigate();
    const routearray = ["/profilesetup/what_brings_you_here","/profilesetup/got_one","/profilesetup/what_do_u_got","/profilesetup/Skills"]
    console.log(currentroute);

    const handleback = ()=>{
        if (currentroute == 0) {
            navigate("/profilesetup");

        }
        else{
            setcurrenroute(currentroute-1);
        navigate(routearray[currentroute]);
        }
        // console.log(currentroute);
    }
    const handlefront = ()=>{
        if (currentroute == 3) {
            navigate("/");
        }
        else{
            setcurrenroute(currentroute+1);
            
                    console.log(currentroute);

            navigate(routearray[currentroute]);
        }
        // console.log(currentroute);

    }
    
  return (
    <div className="cabindiv">
       <div className="interviewdiv">
        {/* <Moto/> */}
       </div>
      <div className="botomnavbar">
        <button className="backbutton" onClick={handleback}>Back</button>
        <div className="skip"><u>Skip for now</u></div>
        <button className="nextbutton" onClick={handlefront}>Next &#8594;</button>
      </div>
    </div>
  )
};

export default Cabin;
