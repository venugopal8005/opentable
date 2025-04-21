import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Aboutus from './components/Aboutus'
import Login from './components/Login'
import Get_started from './components/Get_started'
import Getstartedpage from './components/profilesetup/Getstartedpage'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom' 
import Radiowraper from './components/profilesetup/Radiowraper'
import Ideawraper from './components/profilesetup/Ideawraper'
import Skillwraper from './components/profilesetup/Skillwraper'
import Motowraper from './components/profilesetup/Motowraper'
import Whatkindaideawraper from './components/profilesetup/Whatkindaideawraper'
import HomeDashborad from './components/homedashboardfolder/HomeDashborad'
import Profilesetupfinish from './components/profilesetup/Profilesetupfinish'
import Skillset from './components/profilesetup/Skillset'
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
      element : <Motowraper/>
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
      element:<Skillwraper/>
    },
    {
      path:"/idk",
      element:<Skillset/>
    },
    {
      path:"/profilesetup/what_kinda_idea",
      element:<Whatkindaideawraper/>
    },
    {
      path:"/homedashboard",
      element:<HomeDashborad/>
    },
    {
      path:"/profilesetup/warping_up",
      element:<Profilesetupfinish/>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
