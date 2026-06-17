import "./Skills.css";

import SectionHeader from "../../components/SectionHeader/SectionHeader";

import { technologies, type Technology } from "../../data/technologies";
import { skillCategories, type Skill } from "../../data/skills";

import { useTranslations } from "../../translations/useTranslations";
import { useLanguage } from "../../translations/LanguageContext";

function SkillCard({
    skill, 
    levelLabel,
    language,
}: {
    skill: Skill;
    levelLabel: string;
    language: "en" | "es";
}) {
    const tech = technologies[skill.technology] as Technology;

    return (
        <div className="skill-card">
            <span className="skill-icon" aria-hidden="true">
                {tech.icon}
            </span>

            <div className="skill-info">
                <span className="skill-name">
                    {tech.labels?.[language] ?? tech.name}
                    </span>
                <span className={`skill-level skill-level--${skill.level.toLowerCase()}`}>
                    {levelLabel}
                </span>
            </div>
        </div>
    );
}

function Skills() {
    const tr = useTranslations();

    const { language } = useLanguage();

    return (
        <section className="skills" id="skills">

            <div className="section-container">

                <SectionHeader
                    label={tr.skills.label}
                    title={tr.skills.title}
                />

                <div className="skills-categories">
                    {skillCategories.map((cat) => (
                        <div key={cat.id} className="skills-category">

                            <div className="category-header">
                                <span className="category-name">{tr.skills.categories[cat.id]}</span>
                                <div className="category-line" aria-hidden="true" />
                            </div>

                            <div className="skills-grid">
                                {cat.skills.map((skill) => (
                                    <SkillCard 
                                        key={skill.technology} 
                                        skill={skill} 
                                        levelLabel={
                                            tr.skills.levels[
                                                skill.level.toLowerCase() as keyof typeof tr.skills.levels
                                            ]
                                        }
                                        language={language}
                                    />
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
