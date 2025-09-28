import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import { SkillsSection } from './Components/SkillsSection/SkillsSection'
import { ProjectsSection } from './Components/ProjectsSection/ProjectsSection'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    
    <div>
      <ToastContainer/>
      <Navbar/>
      <Hero/>
      <About/>
      <SkillsSection/>
      <ProjectsSection/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
