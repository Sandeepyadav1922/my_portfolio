

function Education() {
    return (
      <div className="education-main">
        <div className="education-container text-white">
            <div className="shadow-lg shadow-indigo-100/50">
            <h1 className="text-4xl font-serif">
              <i class="fa-solid fa-graduation-cap text-blue-400"></i> Lucknow Institute of Technology
            </h1>
            <h3 className="text-xl text-gray-400 font-semibold">
              B.Tech in Computer Science & Engineering
            </h3>
            <h2 className="text-2xl text-blue-400 font-bold">
              APJ Abdul Kalam Technical University
            </h2>
            <h4 className="text-xl font-medium text-gray-300">
              Batch 2026 | Current Student
            </h4>
            <p className="font-medium text-gray-300">CGPA: 7.5</p>
          </div>
            <div className="shadow-lg shadow-indigo-100/50">
            <a href="https://drive.google.com/file/d/19HZveKgcNQuoJdtg4veKgg8CwaX58my6/view">
              <h1 className="text-4xl font-serif">
                <i class="fa-solid fa-award text-blue-400"></i> Certificate
              </h1>
              <h3 className="text-xl text-gray-400 font-semibold">
                Apna College
              </h3>
              <h2 className="text-2xl text-blue-400 font-bold">
                Full Stack Developer
              </h2>
              <span className="certificate-buttons">
              <button>MongoDB</button>
              <button>ExpressJS</button>
              <button>ReactJS</button>
              <button>NodeJS</button>
              </span>
              </a>
            </div>
            
            <div className="shadow-lg shadow-indigo-100/50">
            <h1 className="text-4xl font-serif">
              <i class="fa-solid fa-school text-blue-400"></i> Gomti Inter College
            </h1>
            <h3 className="text-xl text-gray-400 font-semibold">
              High School - UP BOARD
            </h3>
            <h4 className="text-xl font-medium text-gray-300">
              Batch 2017-2019 | 73.33%
            </h4>
          </div>
          <div className="shadow-lg shadow-indigo-100/50">
            <h1 className="text-4xl font-serif">
              <i class="fa-solid fa-school text-blue-400"></i> Gomti Inter College
            </h1>
            <h3 className="text-xl text-gray-400 font-semibold">
              Senior Secondary - UP BOARD
            </h3>
            <h4 className="text-xl font-medium text-gray-300">
              Batch 2019-2021 | 76.04%
            </h4>
          </div>
        </div>
        </div>
    );
}

export default Education;