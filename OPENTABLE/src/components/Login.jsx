import React from "react"
import "../CSS/login.css"
import { useState } from "react";
const Login = (props) => {
  const [logindata,setlogindata] = useState({username:"",password:""});
  const handleloginchange = (e) => {
    const {name,value} = e.target;
    setlogindata({...logindata,[name]:value});
  }
  const handleloginsubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:5000/login",logindata);
      alert(res.data.message);
    }
    catch(err){
      console.log(err.res?.data.message);
    }
  };
  return (
    
      <>
      <div className="logo"><a href="/">OpenTable</a></div>
      <div className="loginpage">
        
        <div className="login">
          <div className="heading">Login</div>
            <form className="loginform" action="post" onSubmit={handleloginsubmit}>
              <input className="inp username" type="text" placeholder="Username" name="username"  onChange={handleloginchange} required />
              <input className= "inp password"type="password" placeholder="Password" name="password" onChange={handleloginchange} required />
              <button type="submit" className="loginbutton">Login</button>
              <p>Don't have an account? <a href="/getstarted">Get started</a></p>
            </form>
          
      </div>
      </div></>
    
  )
};

export default Login;
