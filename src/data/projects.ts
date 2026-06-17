 import type { TechnologyKey } from "./technologies";

export type Project = {
    id: number;
    name: string;
    status: "live" | "dev";
    statusLabel: string;
    title: string;
    description: string;
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
        name: "Turismo La Paz",
        status: "live",
        statusLabel: "Completed",
        title: "Turismo La Paz",
        description:
            "Mobile app centralizing 40+ tourist attractions and experiences in La Paz through geolocation, distance-based recommendations, and category filters. Presented before the La Paz City Hall and Municipal Tourism Department as part of an academic collaboration initiative.",
        tags: ["React Native", "TypeScript", "Expo", "Geolocation"],
        github: "https://github.com/cburgoin-dev",
        demo: undefined,
        images: [],
        icon: "🗺️",
    },
    {
        id: 2,
        name: "Lost & Found UABCS",
        status: "live",
        statusLabel: "Completed",
        title: "Lost & Found UABCS",
        description:
            "Academic mobile application for reporting and recovering lost items within the university community. Built with Kotlin and Jetpack Compose, integrating a Laravel REST API and AWS S3 image storage through Retrofit. Led requirements analysis, database design, and technical documentation.",
        tags: ["Kotlin", "Jetpack Compose", "Retrofit", "Laravel", "AWS S3"],
        github: "https://github.com/cburgoin-dev",
        demo: undefined,
        images: [],
        icon: "🔍",
    },
    {
        id: 3,
        name: "Reservation System",
        status: "live",
        statusLabel: "Completed",
        title: "Hotel Reservation System",
        description:
            "Backend system for managing hotel bookings, clients, rooms, and availability. Built with Java and MySQL using a Controller–Service–DAO architecture. Includes JWT authentication, booking validation, room availability checks, and RESTful endpoints.",
        tags: ["Java", "MySQL", "REST API", "JWT"],
        github: "https://github.com/cburgoin-dev",
        demo: undefined,
        images: [],
        icon: "🏨",
        architecture: ["Controller", "Service", "DAO", "MySQL"],
    },
];
