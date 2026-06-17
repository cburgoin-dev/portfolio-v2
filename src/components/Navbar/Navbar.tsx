import "./Navbar.css";
import { RiMoonFill } from "react-icons/ri";

function Navbar() {
    return (
        <nav className ="navbar">

            <div className="section-container navbar-container">

                <a href="#hero" className="navbar-logo">
                    Cristian Burgoin
                </a>

                <ul className="navbar-links">
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#about">About</a></li>
                </ul>

                <div className="navbar-actions">

                    <a href="/resume.pdf" className="navbar-resume">
                        Resume
                    </a>

                    <button className="navbar-theme-btn">
                        <RiMoonFill size={22}/>
                    </button>

                    <div className="language-toggle">

                        <div className="language-indicator"></div>

                        <div className="language-options">
                            <span className="active">EN</span>
                            <span>ES</span>
                        </div>
                    </div>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;