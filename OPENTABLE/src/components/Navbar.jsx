import React from "react"
import { Outlet, Link } from "react-router-dom";

const Navbar = (props) => {
  return (
   <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About us</Link></li>
        <li><Link to="/getstarted">Login</Link></li>
      </ul>
    </nav>
    <Outlet/>
    </>
  )
};

export default Navbar;
