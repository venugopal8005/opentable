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
import Radiowraper from './components/profilesetup/Radiowraper'
import Whatkindaidea from './components/profilesetup/Whatkindaidea'
import Ideawraper from './components/profilesetup/Ideawraper'
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
      element:<><Radiowraper/>
        </>
    },
    {
      path:"/profilesetup/present_ur_idea",
      element:<Ideawraper/>
    },
    {
      path:"/profilesetup/skills",
      element:<><Allpagenav/><Skills/><Cabin/></>
    },
    {
      path:"/idk",
      element:<Survey/>
    },
    {
      path:"/profilesetup/what_kinda_idea",
      element:<><Allpagenav/><Whatkindaidea/><Cabin/></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
