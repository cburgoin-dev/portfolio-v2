export type ExperienceItem = {
    id: number;
    organization: string;
    role: string;
    badge: string;
    badgeType: "current" | "degree" | "foundation";
    date: string;
    bullets: string[];
};

export const experiences: ExperienceItem[] = [
    {
        id: 1,
        organization: "LIDIAIR",
        role: "Research Software Developer",
        badge: "Current",
        badgeType: "current",
        date: "Aug 2025 — Present",
        bullets: [
            "Developed computer vision applications at UABCS's AI & Robotics Research Lab",
            "Built a fruit detection and classification system with automated price calculation using weight sensors",
            "Collaborated on a real-time facial emotion detection system with exportable evaluation metrics",
            "Presented research outcomes at an institutional software exhibition",
        ],
    },
    {
        id: 2,
        organization: "UABCS",
        role: "Bachelor's Degree in Software Development Engineering",
        badge: "Education",
        badgeType: "degree",
        date: "Aug 2023 — Present",
        bullets: [
            "Training in software architecture, data structures, an relational database design",
            "Built academic and collaborative projects applying engineering practices and requirements analysis",
            "Focused on backend development, REST APIs, and mobile application development",
            "Recognized with academic excellence distinctions throughout the degree"
        ],
    },
];