import type { TechnologyKey } from "./technologies";
 
export type Level =
    | "Advanced"
    | "Intermediate";

export type Skill = {
    technology: TechnologyKey;
    level: Level;
};

export type Category = {
    id: string;
    label: string;
    skills: Skill[];
};

export const skillCategories: Category[] = [
    {
        id: "languages",
        label: "Languages",
        skills: [
            { technology: "Java", level: "Advanced"},
            { technology: "Python", level: "Advanced"},
            { technology: "Kotlin", level: "Intermediate"},
            { technology: "TypeScript", level: "Intermediate"},
            { technology: "JavaScript", level: "Intermediate"}
        ],
    },
    {
        id: "frameworks",
        label: "Frameworks & Mobile",
        skills: [
            { technology: "React Native", level: "Intermediate"},
            { technology: "Jetpack Compose", level: "Intermediate"},
            { technology: "React", level: "Intermediate"},
            { technology: "Node.js / Express", level: "Intermediate"},
            { technology: "Expo", level: "Intermediate"},
        ],
    },
    {
        id: "databases",
        label: "Databases",
        skills: [
            { technology: "MySQL", level: "Advanced"},
            { technology: "PostgreSQL", level: "Intermediate"},
            { technology: "MongoDB", level: "Intermediate"},
        ],
    },
    {
        id: "ai",
        label: "Applied AI",
        skills: [
            { technology: "TensorFlow", level: "Intermediate"},
            { technology: "Keras", level: "Intermediate"},
            { technology: "OpenCV", level: "Intermediate"},
        ],
    },
    {
        id: "tools",
        label: "Tools & Technologies",
        skills: [
            { technology: "Git", level: "Advanced"},
            { technology: "GitHub", level: "Advanced"},
            { technology: "REST API", level: "Advanced"},
            { technology: "Postman", level: "Advanced"},
            { technology: "Linux", level: "Intermediate"},
        ],
    },
];