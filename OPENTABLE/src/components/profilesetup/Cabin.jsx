import React, { useState } from "react"
import "../CSS/cabin.css"
import "../CSS/botomnavbar.css"
import Moto from "./Moto";
import{useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";

const Cabin = (props) => {
  const location = useLocation();
  

    
    const navigate = useNavigate();
    const routearray = ["/profilesetup/what_brings_you_here","/profilesetup/got_one","/profilesetup/what_do_u_got","/profilesetup/Skills"]
    // console.log(currentroute);
    const routeindex = routearray.indexOf(location.pathname);
    const [currentroute,setcurrenroute] = useState(routeindex+1);
    console.log(routeindex);

    const handleback = ()=>{
        navigate(-1);
        // console.log(currentroute);

    }
    const handlefront = ()=>{
        if (currentroute == 4) {
            navigate("/");

        }
        else{
            setcurrenroute(currentroute+1);
            
                    // console.log(currentroute);

            navigate(routearray[currentroute]);
        }
        // console.log(currentroute);
// console.log(location.pathname);

    }
    
  return (
    <div className="cabindiv">
       <div className="interviewdiv"  >
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
