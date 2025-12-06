import "./About.css";
// import AboutPage from "./AboutPage";
// import Education from "./Education"

function About() {
  return (
    <div className="about-main">
      <div className="text-white text-center mt-15">
        <h1 className="text-6xl">About <span className="text-blue-500">Me</span></h1>
      </div>
      <div className="about-container p-lg-5 mt-5">
        <div className="about-left mt-10">
          <img
            className="shadow-lg shadow-indigo-500/50"
            src="/assets/sky.png"
            alt="sky.img"
          />
        </div>
        <div className="about-right-span">
          <span className="about-span">
            <p className="text-xl text-blue-200">
              I'm Sandeep Yadav, a passionate Full Stack Developer and Computer
              Science Engineering student at Lucknow Institute of Technology,
              Lucknow.
            </p>
            <br />
            <p className="text-xl text-blue-200">
              I enjoy turning ideas into real-world applications using
              technologies like React.js, Node.js, Express, and MongoDB
            </p>
            <p className="text-xl mt-4 text-blue-200">
              I love exploring how things work under the hood—whether it's
              designing scalable backend APIs or building responsive and dynamic
              frontends. I'm always eager to learn new technologies, improve my
              problem-solving skills, and contribute to impactful projects.
            </p>
            <p className="text-xl mt-4 text-blue-200">
              Currently, I'm seeking full-time opportunities where I can grow as
              a developer, collaborate with innovative teams, and build products
              that make a difference.
            </p>
          </span>
          </div>
          </div>
      {/* <AboutPage/> */}
        {/* <Education/> */}
    </div>
  );
}

export default About;
