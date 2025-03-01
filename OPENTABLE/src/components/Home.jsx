import React from "react"
import '../CSS/home.css'
import bgimage from '../assets/homebackground.jpg'
const Home = (props) => {
  return (
   <>
      <div className="seg1" style={{backgroundImage: `url(${bgimage})`}}>
        <div className="seg1dup">
        <div className="qoute">
          <div style={{color:"white"}}>Bring Your <span className="idea">Ideas</span></div>
           <div style={{color:"white"}}>To</div>
           <div><span className="life">Life</span></div>
           </div>
        <div className="tagline">Find Your people</div>
        <div className="setgo"><a href="/getstarted" style={{color:"white"}}>Get Started</a></div>
        </div>
      </div>
   </>
  )
};

export default Home;
