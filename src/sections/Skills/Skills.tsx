import "./Skills.css";

import SectionHeader from "../../components/SectionHeader/SectionHeader";

import { technologies } from "../../data/technologies";

import { skillCategories, type Skill } from "../../data/skills";

function SkillCard({ skill }: { skill: Skill }) {
    const tech = technologies[skill.technology]

    return (
        <div className="skill-card">
            <span className="skill-icon" aria-hidden="true">
                {tech.icon}
            </span>

            <div className="skill-info">
                <span className="skill-name">{tech.name}</span>
                <span className={`skill-level skill-level--${skill.level.toLowerCase()}`}>
                    {skill.level}
                </span>
            </div>
        </div>
    );
}

function Skills() {
    return (
        <section className="skills" id="skills">

            <div className="section-container">

                <SectionHeader
                    label="What I work with"
                    title="Skills"
                />

                <div className="skills-categories">
                    {skillCategories.map((cat) => (
                        <div key={cat.id} className="skills-category">

                            <div className="category-header">
                                <span className="category-name">{cat.label}</span>
                                <div className="category-line" aria-hidden="true" />
                            </div>

                            <div className="skills-grid">
                                {cat.skills.map((skill) => (
                                    <SkillCard key={skill.technology} skill={skill} />
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}

export default Skills;
