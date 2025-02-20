import React from "react"
import "../CSS/login.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = (props) => {
  const[errorwarning,seterrorwarning] = useState("");
  const navigate = useNavigate();
  const [logindata,setlogindata] = useState({username:"",password:""});
  const handleloginchange = (e) => {
    const {name,value} = e.target;
    setlogindata({...logindata,[name]:value});
  }
  const handleloginsubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:5000/login",logindata);
     
    
      navigate("/profilesetup");
      // seterrorwarning("");
      localStorage.setItem("user", JSON.stringify(logindata)); 

      seterrorwarning(res.data.message + " Welcome to OpenTable" + logindata.username)
      
    }
    catch(err){
      seterrorwarning(err.response.data.message);
      // alert(err.res.data.message);
    }
  };
  return (
    
      <>
      <div className="logo"><a href="/">OpenTable</a></div>
      <div className="loginpage">
        
        <div className="login">
          <div className="heading">Login</div>
            <form className="loginform"  onSubmit={handleloginsubmit}>
              <input className="inp username" type="text" placeholder="Username" name="username"  onChange={handleloginchange} required />
              <input className= "inp password"type="password" placeholder="Password" name="password" onChange={handleloginchange} required />
              <button type="submit"  className="loginbutton">Login</button>
              <p>Don't have an account? <a href="/getstarted">Get started</a></p>
            </form>
            <div className="error warnings">{errorwarning}</div>
          
      </div>
      </div></>
    
  )
};

export default Login;
