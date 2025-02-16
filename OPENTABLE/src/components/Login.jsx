import React from "react"
import "../CSS/login.css"
const Login = (props) => {
  return (
    
      <>
      <div className="logo"><a href="/">OpenTable</a></div>
      <div className="loginpage">
        
        <div className="login">
          <div className="heading">Login</div>
            <form className="loginform">
              <input className="inp username" type="text" placeholder="Username" />
              <input className= "inp password"type="password" placeholder="Password" />
              <button type="submit" className="loginbutton">Login</button>
              <p>Don't have an account? <a href="/getstarted">Get started</a></p>
            </form>
          
      </div>
      </div></>
    
  )
};

export default Login;
