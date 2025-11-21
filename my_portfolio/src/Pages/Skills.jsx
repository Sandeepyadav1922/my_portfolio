import "./Home.css";

function Skill() {
  return (
    <div className="text-white mt-10 skill-top">
        <h1 className="text-5xl font-extrabold text-center mb-10">My <span className="text-blue-500">Skills</span></h1>
    <div className=" text-white skill-main">
        <div className="skill-container">
      <div className="slidbar-container">
        <h1 className="text-2xl font-bold">
          <i class="fa-brands fa-html5 text-blue-500 text-3xl">
            &nbsp;&nbsp;<span className="text-white">HTML</span>
          </i>
          <span className="text-blue-500">
            80%
          </span>
        </h1>
        <input
          className="skill-range rounded-xl"
          type="range"
          min="1"
          max="100"
          value="80"
        ></input>
      </div>
      <div className="slidbar-container">
        <h1 className="text-2xl font-bold">
          <i class="fa-brands fa-css3-alt text-blue-500 text-3xl">
            &nbsp;&nbsp;<span className="text-white">CSS</span>
          </i>
          <span className="text-blue-500">
            80%
          </span>
        </h1>
        <input
          className="skill-range rounded-xl"
          type="range"
          min="1"
          max="100"
          value="80"
        ></input>
      </div>
      <div className="slidbar-container">
        <h1 className="text-2xl font-bold">
          <i class="fa-brands fa-js text-blue-500 text-3xl">
            &nbsp;&nbsp;<span className="text-white">JavaScript</span>
          </i>
          <span className="text-blue-500">
            83%
          </span>
        </h1>
        <input
          className="skill-range"
          type="range"
          min="1"
          max="100"
          value="83"
        ></input>
      </div>
      <div className="slidbar-container">
        <h1 className="text-2xl font-bold">
          <i class="fa-brands fa-react text-blue-500 text-3xl">
            &nbsp;&nbsp;<span className="text-white">React</span>
          </i>
          <span className="text-blue-500">
            70%
          </span>
        </h1>
        <input
          className="skill-range4"
          type="range"
          min="1"
          max="100"
          value="70"
        ></input>
      </div>
      <div className="slidbar-container">
        <h1 className="text-2xl font-bold">
          <i class="fa-brands fa-node-js text-blue-500 text-3xl">
            &nbsp;&nbsp;<span className="text-white">Node.js</span>
          </i>
          <span className="text-blue-500">
            82%
          </span>
        </h1>
        <input
          className="skill-range"
          type="range"
          min="1"
          max="100"
          value="82"
        ></input>
      </div>
      <div className="slidbar-container">
        <h1 className="text-2xl font-bold">
          <img id="express" src="src/assets/expressjs img.jpeg" alt="express" style={{width: "40px", height: "40px", borderRadius: "50%"}}/>
          <label htmlFor="express">ExpressJs</label>
          <span id="hmtl" className="text-blue-500">
            82%
          </span>
        </h1>
        <input
          id="html"
          className="skill-range rounded-xl"
          type="range"
          min="1"
          max="100"
          value="82"
        ></input>
      </div>
      <div className="slidbar-container">
        <h1 className="text-2xl font-bold">
          <i class="fa-solid fa-database text-blue-500 text-xl">
            &nbsp;&nbsp;<span className="text-white">MongoDB</span>
          </i>
          
          <span className="text-blue-500">
            82%
          </span>
        </h1>
        <input
          className="skill-range rounded-xl"
          type="range"
          min="1"
          max="100"
          value="82"
        ></input>
      </div>
      <div className="slidbar-container">
        <h1 className="text-2xl font-bold">
          <i class="fa-solid fa-database text-blue-500 text-xl">
            &nbsp;&nbsp;<span className="text-white">MySql</span>
          </i>
          <span className="text-blue-500">
            82%
          </span>
        </h1>
        <input
          className="skill-range rounded-xl"
          type="range"
          min="1"
          max="100"
          value="82"
        ></input>
      </div>
      <div className="slidbar-container">
        <h1 className="text-2xl font-bold">
          <i class="fa-brands fa-bootstrap text-blue-500 text-3xl">
            &nbsp;&nbsp;<span className="text-white">Bootstrap</span>
          </i>
          <span className="text-blue-500">
            80%
          </span>
        </h1>
        <input
          className="skill-range rounded-xl"
          type="range"
          min="1"
          max="100"
          value="80"
        ></input>
      </div>
      <div className="slidbar-container">
        <h1 className="text-2xl font-bold">
          <img id="tailwind" src="src/assets/tailwindcss.png" alt="tailwindcss" style={{width: "40px", height: "40px", borderRadius: "50%"}}/>
          <label htmlFor="tailwind">TailwindCss</label>
          <span className="text-blue-500">
            80%
          </span>
        </h1>
        <input
          className="skill-range rounded-xl"
          type="range"
          min="1"
          max="100"
          value="80"
        ></input>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Skill;
