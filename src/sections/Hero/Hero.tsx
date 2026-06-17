import { 
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaRegFileAlt
} from "react-icons/fa";

import './Hero.css';
import RobotAvatar from '../../components/RobotAvatar/RobotAvatar';

function Hero() {
    return (
        <section className="hero" id="hero">

            <div className="section-container hero-container">

                <div className="hero-left">

                    <span className="hero-badge">
                        <span className="hero-badge-dot" aria-hidden="true" />
                        Software Engineer
                    </span>

                    <h1 className="hero-name">
                        Cristian <span className="hero-name-accent">Burgoin</span>
                    </h1>

                    <p className="hero-description">
                        Building scalable systems and solving real-world problems —
                        one line at a time.
                    </p>

                    <div className="hero-chips">
                        <span className="hero-chip">Backend Development</span>
                        <span className="hero-chip">Mobile Applications</span>
                        <span className="hero-chip">Artificial Intelligence</span>
                    </div>

                    <div className="hero-buttons">
                        <a href="#projects" className="hero-btn-primary">
                            View projects
                        </a>
                        <a
                            href="https://github.com/cburgoin-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-btn-secondary"
                        >
                            <FaGithub size={16} />
                            GitHub
                        </a>
                    </div>

                    <div className="hero-social">
                        <a
                            href="https://linkedin.com/in/cristian-burgoin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-social-link"
                        >
                            <FaLinkedin size={14} />
                            LinkedIn
                        </a>

                        <span className="hero-social-dot" aria-hidden="true">·</span>

                        <a
                            href="mailto:cristian.burgoin.dev@gmail.com"
                            className="hero-social-link"
                        >
                            <FaEnvelope size={14} />
                            Email
                        </a>

                        <span className="hero-social-dot" aria-hidden="true">·</span>

                        <a href="/resume.pdf" className="hero-social-link">
                            <FaRegFileAlt size={14} />
                            Resume
                        </a>
                    </div>

                </div>

                <div className="hero-right">
                    <RobotAvatar />
                    <div className="hero-status-tag" aria-label="Estado: open to opportunities">
                        <span className="hero-status-dot" aria-hidden="true" />
                        Open to opportunities
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Hero;
