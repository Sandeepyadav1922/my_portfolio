import { Link } from "react-scroll";
import "./Home.css";

function Home() {
    return (
        <div>
        <div className="home-img">
                    <img src="public/assets/img3.png" alt="home img" />
                </div>
        <div className="home-container text-white">
            <div className="home-text text-center">
                <h1 className="text-6xl font-extrabold">
                Hii, I'm Sandeep Kumar Yadav
                </h1>
                <div className="mt-10">
                <h1 className="text-4xl font-extrabold">Full Stack Developer</h1>
                <p className="text-2xl mt-3 text-blue-200">B.Tech CSE Student (Batch 2026) passionate about creating stunning web experiences with modern technologies</p>
                <div className="home-button flex gap-10 mt-6 font-bold">
                    <Link className="text-xl hover:text-blue-600 cursor-pointer" to="project" smooth={true} duration={500}>
                <button class="text-md">View Projects &nbsp;<i class="fa-solid fa-arrow-down"></i></button>
                </Link>
                <Link className="text-xl hover:text-blue-600 cursor-pointer" to="contact" smooth={true} duration={500}>
                <button class="text-md">Tech in Touch &nbsp;<i class="fa-solid fa-arrow-down"></i></button>
                </Link>
                </div>
                <div className="home-socialMedia flex justify-center gap-10 text-3xl mt-7 hover:shadow-blue-300">
                <a href="https://github.com/Sandeepyadav1922"><i class="fa-brands fa-github"></i></a>
                <a href="linkedin.com/in/sandeepyadav1922"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                </div>
                </div>
        </div>
        </div>
    );
}

export default Home;