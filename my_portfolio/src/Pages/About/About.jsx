import "./About.css";
import AboutPage from "./AboutPage";
import Education from "./Education";

function About() {
  return (
    <div className="about-main">
      <div className="text-white text-center mt-15">
        <h1 className="text-6xl">About <span className="text-blue-500">Me</span></h1>
      </div>
      <AboutPage/>
        <Education/>
    </div>
  );
}

export default About;
