import "./Contact.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-content">

                <h2 className="footer-name">
                    Sandeep Kumar Yadav
                </h2>

                <p className="footer-role">
                    Full Stack Developer
                </p>

                <p className="footer-text">
                    Building modern, responsive and user-friendly web
                    applications with passion and clean code.
                </p>

                <div className="footer-social">

                    <a
                        href="https://github.com/Sandeepyadav1922"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>

                    <a
                        href="http://linkedin.com/in/sandeepyadav1922"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>

                    <a
                        href="https://www.instagram.com/sandeep_yadav1922"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <i className="fa-brands fa-instagram"></i>
                    </a>

                    <a
                        href="https://www.facebook.com/sandeep.yadav.827346"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>

                </div>

                <div className="footer-line"></div>

                <p className="footer-copyright">
                    © {new Date().getFullYear()} Sandeep Kumar Yadav.
                    All rights reserved.
                </p>
            </div>

        </footer>
    );
}

export default Footer;