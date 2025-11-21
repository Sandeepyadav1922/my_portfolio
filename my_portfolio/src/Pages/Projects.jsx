import "./Projects.css";

function Projects() {
  return (
    <div className="text-white">
      <h1 className="text-5xl mt-20 mb-20 font-extrabold text-center">
        My <span className="text-blue-400">Projects</span>
      </h1>
      <div className="project-main">
        <div className="projects-container text-white shadow-blue-500">
          <div>
            <h1 className="text-4xl">
              Travel Listing App &nbsp;&nbsp;
              <span className="text-xl">April 2025</span>
            </h1>
            <p className="text-xl font-medium text-blue-100 mt-3">
              A full-stack web application inspired by Airbnb, built to provide
              users with an interactive platform to explore, Add, Read, Update
              and Delete listings.
            </p>
            <span className="projectTop-buttons">
              <button>Node.js</button>
              <button>Express.js</button>
              <button>Bootstrap</button>
              <button>MongoDB</button>
            </span>
            <span className="projectBottom-buttons">
              <a href="https://delta-student-y0fy.onrender.com">
                <button className="text-black font-medium">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  &nbsp;&nbsp;Live Demo
                </button>
              </a>
              <a href="https://github.com/Sandeepyadav1922/delta-student">
                <button className="text-black font-medium">
                  <i class="fa-brands fa-github"></i>&nbsp;&nbsp;View Code
                </button>
              </a>
            </span>
          </div>
          <div>
            <h1 className="text-2xl">
              Video Conferencing App &nbsp;&nbsp;
              <span className="text-sm">june 2025</span>
            </h1>
            <p className="text-xl font-medium text-blue-100 mt-3">
              Built a real-time video conferencing platform using WebRTC, User
              can create or join virtual meeting rooms with unique Room IDs
            </p>
            <span className="projectTop-buttons">
              <button>WebRTC</button>
              <button>Socket.IO</button>
              <button>React.js</button>
              <button>Bootstrap</button>
              <button>MongoDB</button>
            </span>
            <span className="projectBottom-buttons">
              <a href="https://apnacollegezoomfrontend-vdq1.onrender.com">
                <button className="text-black font-medium">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  &nbsp;&nbsp;Live Demo
                </button>
              </a>
              <a href="https://github.com/Sandeepyadav1922/Apna-Video-Call">
                <button className="text-black font-medium">
                  <i class="fa-brands fa-github"></i>&nbsp;&nbsp;View Code
                </button>
              </a>
            </span>
          </div>
          <div>
            <h1 className="text-2xl">
              Movie Recomender system &nbsp;&nbsp;
              <span className="text-sm">july 2025</span>
            </h1>
            <p className="text-xl font-medium text-blue-100 mt-3">
              Build by using Python, Pandas, Scikit-learn using content-based
              filtering. Movie suggestions based on genres, cast, overview.
            </p>
            <span className="projectTop-buttons">
              <button>Python</button>
              <button>Pandas</button>
              <button>ScitkitLearn</button>
            </span>
            <span className="projectBottom-buttons">
              <a href="https://movie-recommender-system-30ai.onrender.com">
                <button className="text-black font-medium">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  &nbsp;&nbsp;Live Demo
                </button>
              </a>
              <a href="https://github.com/Sandeepyadav1922/movie-recommender-system">
                <button className="text-black font-medium">
                  <i class="fa-brands fa-github"></i>&nbsp;&nbsp;View Code
                </button>
              </a>
            </span>
          </div>
          <div>
            <h1 className="text-2xl">
              Stock Trading Platform &nbsp;&nbsp;
              <span className="text-sm">sep 2025</span>
            </h1>
            <p className="text-xl font-medium text-blue-100 mt-3">
              Developed a full-stack trading app inspired by Zerodha using
              React.js, Node.js, Express, and MongoDB. Implemented
              authentication, real-time stock data, interactive charts.
            </p>
            <span className="projectTop-buttons">
              <button>Node.js</button>
              <button>Express.js</button>
              <button>bootstrap</button>
              <button>MongoDB</button>
            </span>
            <span className="projectBottom-buttons">
              <a href="https://zerodha-app-qfcm.onrender.com">
                <button className="text-black font-medium">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  &nbsp;&nbsp;Live Demo
                </button>
              </a>
              <a href="https://github.com/Sandeepyadav1922/Zerodha-trading-platform">
                <button className="text-black font-medium">
                  <i class="fa-brands fa-github"></i>&nbsp;&nbsp;View Code
                </button>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
