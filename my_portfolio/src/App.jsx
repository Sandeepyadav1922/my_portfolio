import './App.css'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Education from './Pages/Education'
import Footer from './Pages/Footer'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Projects from './Pages/Projects'
import Skill from './Pages/Skills'

import { ParticlesProvider } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

import ParticleBackground from './Pages/BackgroundAnimation'

const particlesInit = async (engine) => {
  await loadSlim(engine);
};

function App() {

  return (
    // <div>
      <ParticlesProvider init={particlesInit}>
        <Navbar/>
        <ParticleBackground />
      <div className="relative z-10">
      
      <div id='home'><Home/></div>
      <div id='about'><About/></div>
      <div id='education'><Education/></div>
      <div id='skill'><Skill/></div>
      <div id='project'><Projects/></div>
      <div id='contact'><Contact/></div>
      </div>
      <Footer/>
    </ParticlesProvider>
    // </div>
  )
}

export default App
