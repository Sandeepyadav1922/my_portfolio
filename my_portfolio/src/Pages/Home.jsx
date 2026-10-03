import { Link } from "react-scroll";
import "./Home.css";

function Home() {
  return (
    <div className="home-container text-white">
      <div className="home-text text-center">

        <p className="home-item welcome text-blue-400 text-lg font-semibold">
          Welcome to my portfolio
        </p>

        <h1 className="home-item home-title text-5xl md:text-6xl font-extrabold">
          Hi, I'm{" "}
          <span className="text-blue-500">
            Sandeep Kumar Yadav
          </span>
        </h1>

        <h2 className="home-item home-role text-3xl md:text-4xl font-extrabold mt-5">
          Full Stack Developer
        </h2>

        <p className="home-item home-description text-lg md:text-xl mt-5 text-blue-100 max-w-3xl mx-auto leading-relaxed">
          I’m a passionate Full Stack Developer focused on building
          scalable, responsive, and user-friendly web applications.
          I enjoy turning ideas into clean, functional, and engaging
          digital experiences.
        </p>

        <p className="home-item home-tech text-base md:text-lg mt-4 text-gray-400">
          React.js • JavaScript • Node.js • Express.js • Django REST Framework
        </p>

        <div className="home-item home-button flex justify-center gap-6 mt-8 font-bold">

          <Link
            to="project"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button className="text-md bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer">
              View My Work
              &nbsp;
              <i className="fa-solid fa-arrow-down"></i>
            </button>
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button className="text-md border border-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer">
              Let's Connect
              &nbsp;
              <i className="fa-solid fa-arrow-down"></i>
            </button>
          </Link>

        </div>

        <div className="home-item home-socialMedia flex justify-center gap-7 text-3xl mt-9">

          <a
            href="https://github.com/Sandeepyadav1922"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-all duration-300 hover:scale-125"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/sandeepyadav1922"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-all duration-300 hover:scale-125"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

        </div>

      </div>
    </div>
  );
}

export default Home;