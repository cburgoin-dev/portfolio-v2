import "./Experience.css";

import SectionHeader from "../../components/SectionHeader/SectionHeader";

import { experiences } from "../../data/experience";

import { useTranslations } from "../../translations/useTranslations";

function Experience() {
    const tr = useTranslations();

    return (
        <section className="experience" id="experience">

            <div className="section-container">

                <SectionHeader
                    label={tr.experience.label}
                    title={tr.experience.title}
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
                                        {tr.experience.items[idx].organization}
                                        <span className="experience-card-role">
                                            {" — "}
                                            {tr.experience.items[idx].role}
                                        </span>
                                    </h3>
                                    <span className={`experience-badge experience-badge--${item.badgeType}`}>
                                        {tr.experience.items[idx].badge}
                                    </span>
                                </div>

                                <p className="experience-date">{tr.experience.items[idx].date}</p>

                                <ul className="experience-bullets">
                                    {tr.experience.items[idx].bullets.map((bullet, i) => (
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
