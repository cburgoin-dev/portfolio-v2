import "./Experience.css";

import SectionHeader from "../../components/SectionHeader/SectionHeader";

import { experiences } from "../../data/experience";

function Experience() {
    return (
        <section className="experience" id="experience">

            <div className="section-container">

                <SectionHeader
                    label="Where I've grown"
                    title="Experience"
                />

                <div className="experience-timeline">
                    {experiences.map((item, idx) => (
                        <div className="experience-item" key={item.id}>

                            <div className="experience-rail">
                                <span
                                    className="experience-dot"
                                    aria-hidden="true"
                                />
                                {idx < experiences.length - 1 && (
                                    <span className="experience-rail-line" aria-hidden="true" />
                                )}
                            </div>

                            <article className="experience-card">
                                <div className="experience-card-top">
                                    <h3 className="experience-card-title">
                                        {item.organization}
                                        <span className="experience-card-role">
                                            {" — "}
                                            {item.role}
                                        </span>
                                    </h3>
                                    <span className={`experience-badge experience-badge--${item.badgeType}`}>
                                        {item.badge}
                                    </span>
                                </div>

                                <p className="experience-date">{item.date}</p>

                                <ul className="experience-bullets">
                                    {item.bullets.map((bullet, i) => (
                                        <li key={i}>{bullet}</li>
                                    ))}
                                </ul>

                            </article>

                        </div>
                    ))}
                </div>
                
            </div>

        </section>
    );
}

export default Experience;
