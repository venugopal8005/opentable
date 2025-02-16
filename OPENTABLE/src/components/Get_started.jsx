import React from "react"
import '../CSS/signup.css'

const Get_started = (props) => {
  return (
    <>
    <div className="logo"><a href="/">OpenTable</a></div>
    <div className="signuppage">
      
      <div className="signup">
        <div className="heading">SignUp</div>
        <form className="signupform">
              <input className="inp username" type="text" placeholder="Email" />
              <input className="inp username" type="text" placeholder="name" />
              <input className="inp username" type="text" placeholder="Username" />
              <input className= "inp password"type="password" placeholder="Password" />
              <button type="submit" className="getstartedbutton">Continue</button>
              <p>Already have an account? <a href="/login">Login</a></p>
            </form>
        
    </div>
    </div></>
  )
};

export default Get_started;
