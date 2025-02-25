import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Aboutus from './components/Aboutus'
import Login from './components/Login'
import Get_started from './components/Get_started'
import Survey from './components/profilesetup/Survey'
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
      path:"/profilesetup/let_us_know_about_urself",
      element : <><Allpagenav/><Moto/><Cabin/></>
    },
    {
      path:"/profilesetup/got_anything",
      element:<><Allpagenav/><Ideahasornot/><Cabin/></>
    },
    {
      path:"/profilesetup/present_ur_idea",
      element:<><Allpagenav/><Ideapresent/><Cabin/></>
    },
    {
      path:"/profilesetup/skills",
      element:<><Allpagenav/><Skills/><Cabin/></>
    },
    {
      path:"/idk",
      element:<Survey/>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
