import { useState } from "react";

import "./Projects.css";

import SectionHeader from "../../components/SectionHeader/SectionHeader";

import { technologies, type Technology } from "../../data/technologies";
import { projects } from "../../data/projects";

import { useTranslations } from "../../translations/useTranslations";
import { useLanguage } from "../../translations/LanguageContext";

import { Icons } from "../../utils/icons";

function Projects() {
    const tr = useTranslations();

    const { language } = useLanguage();

    const [activeIdx, setActiveIdx] = useState(0);
    const [imgIdx, setImgIdx] = useState(0);

    const active = projects[activeIdx];

    const previewCount =
        active.previewLayout === "api"
            ? active.apiExamples?.length ?? 0
            : active.images.length;

    const actionConfig = {
        apk: {
            icon: (props) => <Icons.apk {...props} size={14} />,
            label: tr.projects.actions.apk,
        },
        demo: {
            icon: (props) => <Icons.demo {...props} size={12} />,
            label: tr.projects.actions.demo,
        },
        website: {
            icon: Icons.website,
            label: tr.projects.actions.website,
        },
        docs: {
            icon: (props) => <Icons.docs {...props} size={12} />,
            label: tr.projects.actions.docs,
        },
    } as const;

    const shouldOpenExternally = {
        apk: false,
        demo: true,
        website: true,
        docs: true,
    } as const;
    
    const example = active.apiExamples?.[imgIdx];

    function getHttpMethod(endpoint?: string) {
        if (!endpoint) return null;

        const method = endpoint.split(" ")[0];

        return ["GET", "POST", "PUT", "PATCH", "DELETE"].includes(method)
            ? method
            : null;
    }

    function prevImg() {
        setImgIdx(i => 
            i === 0
                ? previewCount - 1
                : i - 1
        );
    }

    function nextImg() {
        setImgIdx(i => 
            i === previewCount - 1
                ? 0
                : i + 1
        );
    }

    function handleSelect(idx: number) {
        setActiveIdx(idx);
        setImgIdx(0);
    }

    return (
        <section className="projects" id="projects">

            <div className="section-container">

                <SectionHeader
                    label={tr.projects.label}
                    title={tr.projects.title}
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
                                <span className="proj-item-name">{tr.projects.items[i].name}</span>
                            </button>
                        ))}
                    </aside>

                    {/* ── Detail panel ── */}
                    <div className="proj-detail">

                        {/* Media column */}
                        <div className={`proj-media proj-media--${active.previewLayout}`}>
                            <div className="proj-media-grid" aria-hidden="true" />

                            {active.images.length > 0 ? (
                                <>
                                    <img
                                        src={active.images[imgIdx]}
                                        alt={`${tr.projects.items[activeIdx].title} screenshot ${imgIdx + 1}`}
                                        className="proj-media-img"
                                    />

                                    {previewCount > 1 && (
                                        <>
                                            <button
                                                className="proj-arrow proj-arrow--prev"
                                                onClick={prevImg}
                                                aria-label="Previous screenshot"
                                            >
                                                ‹
                                            </button>

                                            <button
                                            className="proj-arrow proj-arrow--next"
                                            onClick={nextImg}
                                            aria-label="Next screenshot"
                                            >
                                                ›
                                            </button>
                                        </>
                                    )}
                                </>

                            ) : active.previewLayout === "api" && active.apiExamples ? (
                                <> 
                                    <div className="proj-api">

                                        {example?.overview ? (
                                            <>
                                                <span className="proj-api-overview-label">
                                                    {example.subtitle}
                                                </span>

                                                <div className="proj-api-overview-title">
                                                    {example.title}
                                                </div>

                                                <ul className="proj-api-overview"> 
                                                    {example?.overview.map((item) => (
                                                        <li key={item}>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        ) : (
                                            <>
                                                <div className="proj-api-section">
                                                    <span className="proj-api-label">
                                                        Request
                                                    </span>

                                                    <div className="proj-api-code">
                                                        {example?.request?.map((line, index) => {
                                                            const method = getHttpMethod(line);

                                                            if (method) {
                                                                const endpoint = line.substring(method.length);

                                                                return (
                                                                    <div key={index}>
                                                                        <span className={`proj-http proj-http--${method.toLowerCase()}`}>
                                                                            {method}
                                                                        </span>

                                                                        {endpoint}
                                                                    </div>
                                                                );
                                                            }

                                                            return (
                                                                <div key={index}>
                                                                    {line}
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>

                                                <div className="proj-api-section">
                                                    <span className="proj-api-status">
                                                        {example?.responseStatus}
                                                    </span>

                                                    <pre className="proj-api-code">
                                                        {example?.response?.join("\n")}
                                                    </pre>
                                                </div>
                                            </>
                                        )}

                                    </div>

                                    {previewCount > 1 && (
                                        <>
                                            <button className="proj-arrow proj-arrow--prev"
                                            onClick={prevImg}
                                            >
                                                ‹
                                            </button>

                                            <button className="proj-arrow proj-arrow--next"
                                            onClick={nextImg}
                                            >
                                                ›
                                            </button>
                                        </>
                                    )}
                                </>
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
                            {previewCount > 1 && (
                                <div className="proj-dots" role="tablist" aria-label="Project screenshots">
                                    {Array.from({ length: previewCount }).map((_, i) => (
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
                                aria-label={`Status: ${tr.projects.items[activeIdx].statusLabel}`}
                            >
                                <span className="proj-status-dot" aria-hidden="true" />
                                {tr.projects.items[activeIdx].statusLabel}
                            </span>

                            <h3 className="proj-name">{tr.projects.items[activeIdx].title}</h3>

                            <p className="proj-desc">{tr.projects.items[activeIdx].description}</p>

                            <div className="proj-tags" aria-label="Technologies used">
                                {active.tags.map((tag) => {
                                    const tech = technologies[tag] as Technology;

                                    return (
                                        <span key={tag} className="proj-tag">
                                            <span className="proj-tag-icon">
                                                {tech.icon}
                                            </span>

                                            {tech.labels?.[language] ?? tech.name}
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
                                    <Icons.github size={15} />
                                    {tr.projects.github}
                                </a>

                                {active.actions?.map((action) => {
                                    const config = actionConfig[action.type];
                                    const Icon = config.icon;
                                    const openInNewTab = shouldOpenExternally[action.type];

                                    return (
                                        <a
                                            key={`${active.id}-${action.type}`}
                                            href={action.url}
                                            target={openInNewTab ? "_blank" : undefined}
                                            rel={openInNewTab ? "noopener noreferrer" : undefined}
                                            className={`proj-btn proj-btn--${action.variant ?? "primary"}`}
                                        >
                                            <Icon size={15} />
                                            {config.label}
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Projects;
