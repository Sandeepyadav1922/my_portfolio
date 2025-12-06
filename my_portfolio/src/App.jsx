import './App.css'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Education from './Pages/Education'
import Footer from './Pages/Footer'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Projects from './Pages/Projects'
import Skill from './Pages/Skills'

function App() {

  return (
    <div>
      <Navbar/>
      <div id='home'><Home/></div>
      <div id='about'><About/></div>
      <div id='education'><Education/></div>
      <div id='skill'><Skill/></div>
      <div id='project'><Projects/></div>
      <div id='contact'><Contact/></div>
      <Footer/>
    </div>
  )
}

export default App
