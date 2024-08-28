import { useState,useContext } from 'react'
import './App.scss'
import {Routes,Route,useLocation} from 'react-router-dom'
import Home from './Pages/Home/Index'
import About from './Pages/About/Index'
import Skills from './Pages/Skills/Index'
import Resume from './Pages/Resume/Index'
import Portfolio from './Pages/Portfolio/Index'
import Contact from './Pages/Contact/Index'
import Navbar from './Components/Navbar/Index'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particles from './Components/Utils/Particles'
import Context from './Components/Context/CreateContext'

function App() {
 const {hashToggle} = useContext(Context)
  const location = useLocation();
  const renderParticleJsInHomePage = location.pathname === "/"
const handleInit = async (main)=>{
  console.log("Particles initialized");
  await loadFull(main)
}
  return (
    <>
    <div>
      {/* Particles */ }
      {
        renderParticleJsInHomePage && (
        <Particles id="particles" options = {particles} init={handleInit}/>
        )
      }
      {/*'App__main-page-content'*/}

      {/* Navbar */ }
      <Navbar/>

      {/* MainPage Content */ } 
<div className={`App__main-page-content ${hashToggle ? 'hidden' : ''}`}>
<Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
</div>
      
      </div>
    </>
  )
}

export default App
