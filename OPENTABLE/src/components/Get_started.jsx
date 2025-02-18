import React from "react"
import '../CSS/signup.css'
import { useState } from "react";

const Get_started = (props) => {
const [signupformdata,setsignupformdata] = useState({username:"",email:"",password:""});
const handlechange = (e) => {
  const {name,value} = e.target;
  setsignupformdata({...signupformdata,[name]:value});
}
const handlesubmit = async (e) => {
  e.preventDefault();
  try{
    const res = await axios.post("http://localhost:5000/signup",signupformdata);
    alert(res.data.message);
  }
  catch(err){
    console.log(err.res?.data.message);
  }
};





  return (
    <>
    <div className="logo"><a href="/">OpenTable</a></div>
    <div className="signuppage">
      
      <div className="signup">
        <div className="heading">SignUp</div>
        <form className="signupform" action="post"  onSubmit={handlesubmit}> 
              <input className="inp username" name ="email" type="text" placeholder="Email"  onChange={handlechange} required/>
              {/* <input className="inp username" name = "name"type="text" placeholder="name" /> */}
              <input className="inp username" name= "username" type="text" placeholder="Username" onChange={handlechange}required />
              <input className= "inp password" name = "password" type="password" placeholder="Password" onChange={handlechange} required/>
              <button type="submit" className="getstartedbutton">Continue</button>
              <p>Already have an account? <a href="/login">Login</a></p>
            </form>
        
    </div>
    </div></>
  )
};

export default Get_started;
