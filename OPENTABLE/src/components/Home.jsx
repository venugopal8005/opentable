import React from "react"
import '../CSS/home.css'
import bgimage from '../assets/homebackground.jpg'
const Home = (props) => {
  return (
   <>
      <div className="seg1" >
        <div className="seg1dup">
        <div className="qoute">
          <div className="linetag1">"Bring Your <span className="idea">Ideas</span> to life"
           </div>
           </div>
        <div className="tagline">Find Your people</div>
        <div className="setgo"><a href="/getstarted" style={{color:"rgb(43, 37, 199)"}}>Get Started</a></div>
        </div>
      </div>
   </>
  )
};

export default Home;
