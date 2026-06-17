import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer className="footer">

            <div className="section-container footer-container">

                <p className="footer-bottom">
                    © {currentYear} Cristian Burgoin • Built with React + TypeScript
                </p>

                <div className="footer-socials">
                    <a
                        href="https://github.com/cburgoin-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com/in/cristian-burgoin"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;