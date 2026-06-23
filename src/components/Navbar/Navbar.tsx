import "./Navbar.css";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";

import { useTheme } from "../../theme/ThemeContext";
import { useTranslations } from "../../translations/useTranslations";
import { useLanguage } from '../../translations/LanguageContext';
import { resumes } from "../../utils/resume";

function Navbar() {
    const { theme, setTheme } = useTheme();

    const tr = useTranslations();

    const { language, setLanguage } = useLanguage();

    const resumeFile = resumes[language];

    const [menuOpen, setMenuOpen] = useState(false);

    const navRef = useRef<HTMLElement>(null);

    function handleLinkClick() {
        setMenuOpen(false);
    }
    
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 900) {
                setMenuOpen(false);
            }
        }
    
        window.addEventListener("resize", handleResize);
    
        return () =>
            window.removeEventListener("resize", handleResize);
    
    }, []);

    useEffect(() => {

        function handleClickOutside(event: MouseEvent) {
    
            if (
                menuOpen &&
                navRef.current &&
                !navRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(false);
            }
    
        }
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
    
    }, [menuOpen]);
    
    return (
        <nav
            ref={navRef}
            className={`navbar ${menuOpen ? "navbar-open" : ""}`}
        >

            <div className="section-container navbar-container">

                <a
                    href="#hero"
                    className="navbar-logo"
                    onClick={handleLinkClick}
                >
                    Cristian{" "}
                    <span className="navbar-logo-accent">
                        Burgoin
                    </span>
                </a>

                <ul className="navbar-links">
                    <li>
                        <a
                            href="#projects"
                            onClick={handleLinkClick}
                        >
                            {tr.navbar.projects}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#experience"
                            onClick={handleLinkClick}
                        >
                            {tr.navbar.experience}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            onClick={handleLinkClick}
                        >
                            {tr.navbar.skills}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            onClick={handleLinkClick}
                        >
                            {tr.navbar.about}
                        </a>
                    </li>
                </ul>

                <div className="navbar-actions">

                    <a 
                        href={resumeFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-resume"
                    >
                        {tr.navbar.resume}
                    </a>

                    <button 
                        className="navbar-theme-btn"
                        onClick={() =>
                            setTheme(
                                theme === "dark"
                                    ? "light"
                                    : "dark"
                            )
                        }
                        aria-label="Toggle theme"
                    >
                        {
                            theme === "dark"
                                ? <RiSunFill size={22} />
                                : <RiMoonFill size={22} />
                        }
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

                <div className="navbar-mobile-actions">

                    <a
                        href={resumeFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-mobile-resume-top"
                    >
                        {tr.navbar.resume}
                    </a>

                    <button
                        className={`navbar-hamburger ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                    >
                        <span />
                        <span />
                        <span />
                    </button>

                </div>

            </div>

            <div
                className={`navbar-mobile-menu ${
                    menuOpen ? "open" : ""
                }`}
            >

                <ul className="navbar-mobile-links">

                <li>
                    <a href="#projects" onClick={handleLinkClick}>
                        {tr.navbar.projects}
                    </a>
                </li>

                <li>
                    <a href="#experience" onClick={handleLinkClick}>
                        {tr.navbar.experience}
                    </a>
                </li>

                <li>
                    <a href="#skills" onClick={handleLinkClick}>
                        {tr.navbar.skills}
                    </a>
                </li>

                <li>
                    <a href="#about" onClick={handleLinkClick}>
                        {tr.navbar.about}
                    </a>
                </li>

                </ul>

                <div className="navbar-mobile-settings">

                    <button
                        className="navbar-theme-btn"
                        onClick={() =>
                            setTheme(
                                theme === "dark"
                                    ? "light"
                                    : "dark"
                            )
                        }
                    >
                        {
                            theme === "dark"
                                ? <RiSunFill size={22} />
                                : <RiMoonFill size={22} />
                        }
                    </button>

                    <div className="language-toggle">

                        <div
                            className={`language-indicator ${
                                language === "es"
                                    ? "right"
                                    : ""
                            }`}
                            onClick={() =>
                                setLanguage(
                                    language === "en"
                                        ? "es"
                                        : "en"
                                )
                            }
                        />

                        <div className="language-options">

                            <span
                                className={
                                    language === "en"
                                        ? "active"
                                        : ""
                                }
                                onClick={() => setLanguage("en")}
                            >
                                EN
                            </span>

                            <span
                                className={
                                    language === "es"
                                        ? "active"
                                        : ""
                                }
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