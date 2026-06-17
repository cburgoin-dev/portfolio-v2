import "./Navbar.css";
import { RiMoonFill } from "react-icons/ri";

import { useTranslations } from "../../translations/useTranslations";
import { useLanguage } from '../../translations/LanguageContext';

function Navbar() {
    const tr = useTranslations();

    const { language, setLanguage } = useLanguage();
    
    return (
        <nav className ="navbar">

            <div className="section-container navbar-container">

                <a href="#hero" className="navbar-logo">
                    Cristian Burgoin
                </a>

                <ul className="navbar-links">
                    <li><a href="#projects">{tr.navbar.projects}</a></li>
                    <li><a href="#experience">{tr.navbar.experience}</a></li>
                    <li><a href="#skills">{tr.navbar.skills}</a></li>
                    <li><a href="#about">{tr.navbar.about}</a></li>
                </ul>

                <div className="navbar-actions">

                    <a href="/resume.pdf" className="navbar-resume">
                        {tr.navbar.resume}
                    </a>

                    <button className="navbar-theme-btn">
                        <RiMoonFill size={22}/>
                    </button>

                    <div className="language-toggle">

                        <div 
                            className={`language-indicator ${
                                language === "es" ? "right" : ""
                            }`}
                            onClick={() => 
                                setLanguage(language === "en" ? "es" : "en")
                            }

                        />

                        <div className="language-options">

                            <span className={language === "en" ? "active" : ""}
                            onClick={() => setLanguage("en")}
                            >
                                EN
                            </span>

                            <span className={language === "es" ? "active" : ""}
                            onClick={() => setLanguage("es")}
                            >
                                ES
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;