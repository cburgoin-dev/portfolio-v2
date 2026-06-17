import { 
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaRegFileAlt
} from "react-icons/fa";

import './Hero.css';
import RobotAvatar from '../../components/RobotAvatar/RobotAvatar';
import { useTranslations } from "../../translations/useTranslations";

function Hero() {
    const tr = useTranslations();
    
    return (
        <section className="hero" id="hero">

            <div className="section-container hero-container">

                <div className="hero-left">

                    <span className="hero-badge">
                        <span className="hero-badge-dot" aria-hidden="true" />
                        {tr.hero.badge}
                    </span>

                    <h1 className="hero-name">
                        Cristian <span className="hero-name-accent">Burgoin</span>
                    </h1>

                    <p className="hero-description">
                        {tr.hero.description}
                    </p>

                    <div className="hero-chips">
                        {tr.hero.chips.map((chip) => (
                            <span
                                key={chip}
                                className="hero-chip"
                            >
                                {chip}
                            </span>
                        ))}
                    </div>

                    <div className="hero-buttons">
                        <a href="#projects" className="hero-btn-primary">
                            {tr.hero.viewProjects}
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
                            {tr.hero.social.linkedin}
                        </a>

                        <span className="hero-social-dot" aria-hidden="true">·</span>

                        <a
                            href="mailto:cristian.burgoin.dev@gmail.com"
                            className="hero-social-link"
                        >
                            <FaEnvelope size={14} />
                            {tr.hero.social.email}
                        </a>

                        <span className="hero-social-dot" aria-hidden="true">·</span>

                        <a href="/resume.pdf" className="hero-social-link">
                            <FaRegFileAlt size={14} />
                            {tr.hero.social.resume}
                        </a>
                    </div>

                </div>

                <div className="hero-right">
                    <RobotAvatar />
                    <div className="hero-status-tag" aria-label="Estado: open to opportunities">
                        <span className="hero-status-dot" aria-hidden="true" />
                        {tr.hero.status}
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Hero;
