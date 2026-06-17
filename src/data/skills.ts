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
    skills: Skill[];
};

export const skillCategories: Category[] = [
    {
        id: "languages",
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
        skills: [
            { technology: "MySQL", level: "Advanced"},
            { technology: "PostgreSQL", level: "Intermediate"},
            { technology: "MongoDB", level: "Intermediate"},
        ],
    },
    {
        id: "ai",
        skills: [
            { technology: "TensorFlow", level: "Intermediate"},
            { technology: "Keras", level: "Intermediate"},
            { technology: "OpenCV", level: "Intermediate"},
        ],
    },
    {
        id: "tools",
        skills: [
            { technology: "Git", level: "Advanced"},
            { technology: "GitHub", level: "Advanced"},
            { technology: "REST API", level: "Advanced"},
            { technology: "Postman", level: "Advanced"},
            { technology: "Linux", level: "Intermediate"},
        ],
    },
];