import "./About.css";

import SectionHeader from "../../components/SectionHeader/SectionHeader";

import { useTranslations } from "../../translations/useTranslations";

function About() {
    const tr = useTranslations();

    return (
        <section className="about" id="about">
            <div className="section-container">

                <SectionHeader
                    label={tr.about.label}
                    title={tr.about.title}
                />

                <div className="about-content">

                    <div className="about-text">
                        {tr.about.paragraphs.map((paragraph) => (
                            <p key={paragraph}>
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <blockquote className="about-quote">
                        "{tr.about.quote}"
                    </blockquote>

                    <div className="about-principles">
                        {tr.about.principles.map((principle) => (
                            <span
                                key={principle}
                                className="about-principle"
                            >
                                {principle}
                            </span>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;