import "./About.css";

import SectionHeader from "../../components/SectionHeader/SectionHeader";

import { about } from "../../data/about";

function About() {
    return (
        <section className="about" id="about">
            <div className="section-container">

                <SectionHeader
                    label="How I think"
                    title="About"
                />

                <div className="about-content">

                    <div className="about-text">
                        {about.paragraphs.map((paragraph) => (
                            <p key={paragraph}>
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <blockquote className="about-quote">
                        "{about.quote}"
                    </blockquote>

                    <div className="about-principles">
                        {about.principles.map((principle) => (
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