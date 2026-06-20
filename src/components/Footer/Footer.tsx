import { Icons } from "../../utils/icons";

import "./Footer.css";

import { useTranslations } from "../../translations/useTranslations";

function Footer() {
    const currentYear = new Date().getFullYear();

    const tr = useTranslations();

    return(
        <footer className="footer">

            <div className="section-container footer-container">

                <p className="footer-bottom">
                    © {currentYear} Cristian Burgoin • {tr.footer.builtWith}
                </p>

                <div className="footer-socials">
                    <a
                        href="https://github.com/cburgoin-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icons.github />
                    </a>

                    <a
                        href="https://linkedin.com/in/cristian-burgoin"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icons.linkedin />
                    </a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;