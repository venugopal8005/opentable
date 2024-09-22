import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Aboutus from './components/Aboutus'
import Login from './components/Login'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element = {<Navbar/>}> 
                  <Route index element = {<Home/>}></Route>
                  <Route path='aboutus' element = {<Aboutus/>}></Route>
                  <Route path='getstarted' element = {<Login/>}></Route>
              </Route>

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
