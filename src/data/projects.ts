 import type { TechnologyKey } from "./technologies";

export type Project = {
    id: number;
    status: "live" | "dev";
    tags: TechnologyKey[];
    github: string;
    demo?: {
        label: string;
        url: string;
    };
    images: string[];
    icon: string;
    /** Optional architecture flow shown in the media column when there are no images */
    architecture?: string[];
};

export const projects: Project[] = [
    {
        id: 1,
        status: "live",
        tags: ["React Native", "TypeScript", "Expo", "Geolocation"],
        github: "https://github.com/cburgoin-dev",
        demo: undefined,
        images: [],
        icon: "🗺️",
    },
    {
        id: 2,
        status: "live",
        tags: ["Kotlin", "Jetpack Compose", "Retrofit", "Laravel", "AWS S3"],
        github: "https://github.com/cburgoin-dev",
        demo: undefined,
        images: [],
        icon: "🔍",
    },
    {
        id: 3,
        status: "live",
        tags: ["Java", "MySQL", "REST API", "JWT"],
        github: "https://github.com/cburgoin-dev",
        demo: undefined,
        images: [],
        icon: "🏨",
        architecture: ["Controller", "Service", "DAO", "MySQL"],
    },
];
