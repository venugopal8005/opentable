import React, { useState } from "react"
import "../CSS/cabin.css"
import "../CSS/botomnavbar.css"
import Moto from "./Moto";
import{useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";


const Cabin = ({radiofinally}) => {
  const location = useLocation();
    
    const navigate = useNavigate();
    const routearray = ["/profilesetup/got_anything",(radiofinally == "radio2")?"/profilesetup/what_kinda_idea":"/profilesetup/present_ur_idea","/profilesetup/skills","/profilesetup/let_us_know_about_urself"]
    // console.log(currentroute);
    const routeindex = routearray.indexOf(location.pathname);
    const [currentroute,setcurrenroute] = useState(Math.abs(routeindex)+1);
    console.log(routeindex);

    const handleback = ()=>{
        navigate(-1);
        // console.log(currentroute);
         setcurrenroute(currentroute-1);

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
if (routeindex == 0) {
  localStorage.setItem('radioresponce', radiofinally);
}



    }
    
  return (
    <div className="cabindiv">
       <div className="interviewdiv"  >
        {/* <Moto/> */}
       </div>
      <div className="botomnavbar">
        <button className="backbutton" onClick={handleback}>Back</button>
        <div className="skip"><u>Skip for now</u></div>
        <button className="nextbutton" onClick={handlefront} type="submit">Next &#8594;</button>
      </div>
    </div>
  )
};

export default Cabin;
