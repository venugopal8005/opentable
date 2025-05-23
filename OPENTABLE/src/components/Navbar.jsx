import React from "react"
import { Outlet, Link } from "react-router-dom";
import '../CSS/navbar.css'
const Navbar = (props) => {
  return (
   <>
    <nav className="nav">
      <div className="logo1"><a href="/">OpenTab</a></div>
    <Link to="/" className="Link"><div className="navdiv a">Home</div></Link>
    <Link to="/aboutus" className="Link"><div className="navdiv b">About us</div></Link>
    <Link to="/login" className="Link"><div className="navdiv c">Log in</div></Link>
    <Link to="/getstarted" className="Link"><div className="navdiv d">Get started</div></Link>
    
    </nav>
    <Outlet/>
    </>
  )
};

export default Navbar;
