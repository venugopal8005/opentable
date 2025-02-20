import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Aboutus from './components/Aboutus'
import Login from './components/Login'
import Get_started from './components/Get_started'
import Cabin from './components/profilesetup/Cabin'
import Getstartedpage from './components/profilesetup/Getstartedpage'
import Allpagenav from './components/profilesetup/Allpagenav'
// import {BrowserRouter,Routes,Route} from "react-router-dom"
import Ideahasornot from './components/profilesetup/Ideahasornot'
import Ideapresent from './components/profilesetup/Ideapresent'
import Skills from './components/profilesetup/Skills'
import { createBrowserRouter ,RouterProvider,Route} from 'react-router-dom'
import Moto from './components/profilesetup/Moto'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
    },
    {
      path: "/aboutus",
      element: <><Navbar/><Aboutus/></>
    },
    {
      path: "/login",
      element: <><Login/></>
    },
    {
      path:"/getstarted",
      element : <Get_started/>
    },
    {
      path:"/profilesetup",
      element : <Getstartedpage/>
    },
    {
      path:"/profilesetup/what_brings_you_here",
      element : <><Allpagenav/><Moto/><Cabin/></>
    },
    {
      path:"/profilesetup/got_one",
      element:<><Allpagenav/><Ideahasornot/><Cabin/></>
    },
    {
      path:"/profilesetup/what_do_u_got",
      element:<><Allpagenav/><Ideapresent/><Cabin/></>
    },
    {
      path:"/profilesetup/skills",
      element:<><Allpagenav/><Skills/><Cabin/></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
