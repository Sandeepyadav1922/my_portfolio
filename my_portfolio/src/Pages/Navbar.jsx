import { useState } from "react";
import { Link } from "react-scroll";
import "./Home.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="nav-container text-white px-6 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-2.5">
        <h1 className="text-2xl font-bold">Sandeep Kumar Yadav</h1>
        <div className="navbar-links gap-8">
          <Link className="text-xl hover:text-blue-600 cursor-pointer" to="home" smooth={true} duration={500}>Home</Link>
          <Link className="text-xl hover:text-blue-600 cursor-pointer" to="about" smooth={true} duration={500}>About</Link>
          <Link className="text-xl hover:text-blue-600 cursor-pointer" to="skill" smooth={true} duration={500}>Skill</Link>
          <Link className="text-xl hover:text-blue-600 cursor-pointer" to="project" smooth={true} duration={500}>Projects</Link>
          <Link className="text-xl hover:text-blue-600 cursor-pointer" to="contact" smooth={true} duration={500}>Contact</Link>
          </div>
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-4 bg-gray-800 p-4 rounded-lg">
          <Link to="home" onClick={() => setIsOpen(false)} className="hover:text-blue-400 cursor-pointer">Home</Link>
          <Link to="about" onClick={() => setIsOpen(false)} className="hover:text-blue-400 cursor-pointer">About</Link>
          <Link to="skill" onClick={() => setIsOpen(false)} className="hover:text-blue-400 cursor-pointer">Skill</Link>
          <Link to="project" onClick={() => setIsOpen(false)} className="hover:text-blue-400 cursor-pointer">Projects</Link>
          <Link to="contact" onClick={() => setIsOpen(false)} className="hover:text-blue-400 cursor-pointer">Contact</Link>
        </div>
      )}
    </nav>
    );
}

export default Navbar;