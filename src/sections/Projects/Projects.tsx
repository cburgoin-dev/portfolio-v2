import { useState } from "react";

import "./Projects.css";

import SectionHeader from "../../components/SectionHeader/SectionHeader";

import { projects } from "../../data/projects";
import { technologies } from "../../data/technologies";

function Projects() {
    const [activeIdx, setActiveIdx] = useState(0);
    const [imgIdx, setImgIdx] = useState(0);

    const active = projects[activeIdx];

    function handleSelect(idx: number) {
        setActiveIdx(idx);
        setImgIdx(0);
    }

    return (
        <section className="projects" id="projects">

            <div className="section-container">

                <SectionHeader
                    label="What I've built"
                    title="Projects"
                />

                <div className="projects-layout">

                    {/* ── Sidebar ── */}
                    <aside className="projects-sidebar">
                        {projects.map((p, i) => (
                            <button
                                key={p.id}
                                className={`proj-item${i === activeIdx ? " active" : ""}`}
                                onClick={() => handleSelect(i)}
                                aria-current={i === activeIdx}
                            >
                                <span className="proj-item-dot" aria-hidden="true" />
                                <span className="proj-item-name">{p.name}</span>
                            </button>
                        ))}
                    </aside>

                    {/* ── Detail panel ── */}
                    <div className="proj-detail">

                        {/* Media column */}
                        <div className="proj-media">
                            <div className="proj-media-grid" aria-hidden="true" />

                            {active.images.length > 0 ? (
                                <img
                                    src={active.images[imgIdx]}
                                    alt={`${active.title} screenshot ${imgIdx + 1}`}
                                    className="proj-media-img"
                                />
                            ) : active.architecture ? (
                                <div className="proj-architecture" aria-label="System architecture diagram">
                                    {active.architecture.map((layer, i) => (
                                        <div className="arch-row" key={layer}>
                                            <span className="arch-box">{layer}</span>
                                            {i < active.architecture!.length - 1 && (
                                                <span className="arch-arrow" aria-hidden="true">↓</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <span className="proj-media-placeholder" aria-hidden="true">
                                    {active.icon}
                                </span>
                            )}

                            {/* Image dots — only when there are images */}
                            {active.images.length > 1 && (
                                <div className="proj-dots" role="tablist" aria-label="Project screenshots">
                                    {active.images.map((_, i) => (
                                        <button
                                            key={i}
                                            role="tab"
                                            aria-selected={i === imgIdx}
                                            aria-label={`Screenshot ${i + 1}`}
                                            className={`proj-dot${i === imgIdx ? " active" : ""}`}
                                            onClick={() => setImgIdx(i)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Body */}
                        <div className="proj-body">
                            <span
                                className={`proj-status proj-status--${active.status}`}
                                aria-label={`Status: ${active.statusLabel}`}
                            >
                                <span className="proj-status-dot" aria-hidden="true" />
                                {active.statusLabel}
                            </span>

                            <h3 className="proj-name">{active.title}</h3>

                            <p className="proj-desc">{active.description}</p>

                            <div className="proj-tags" aria-label="Technologies used">
                                {active.tags.map((tag) => {
                                    const tech = technologies[tag];

                                    return (
                                        <span key={tag} className="proj-tag">
                                            <span className="proj-tag-icon">
                                                {tech.icon}
                                            </span>

                                            {tech.name}
                                        </span>
                                    );
                                })}
                            </div>

                            <div className="proj-actions">
                                <a
                                    href={active.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="proj-btn proj-btn--secondary"
                                >
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                    </svg>
                                    GitHub
                                </a>

                                {active.demo && (
                                    <a
                                        href={active.demo.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="proj-btn proj-btn--primary"
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>

                                        {active.demo.label}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Projects;
