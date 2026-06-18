 import type { TechnologyKey } from "./technologies";

import turismo01 from "../assets/projects/turismo-la-paz/turismo-la-paz-01.jpeg";
import turismo02 from "../assets/projects/turismo-la-paz/turismo-la-paz-02.jpeg";
import turismo03 from "../assets/projects/turismo-la-paz/turismo-la-paz-03.jpeg";
import turismo04 from "../assets/projects/turismo-la-paz/turismo-la-paz-04.jpeg";
import turismo05 from "../assets/projects/turismo-la-paz/turismo-la-paz-05.jpeg";
import turismo06 from "../assets/projects/turismo-la-paz/turismo-la-paz-06.jpeg";

type ActionLabelKey = "androidApk";

export type Project = {
    id: number;
    status: "live" | "dev";
    previewLayout: "phone" | "landscape" | "diagram";
    tags: TechnologyKey[];
    github: string;
    actions?: {
        labelKey: ActionLabelKey;
        url: string;
        variant: "primary";
    }[];
    images: string[];
    icon: string;
    /** Optional architecture flow shown in the media column when there are no images */
    architecture?: string[];
};

export const projects: Project[] = [
    {
        id: 1,
        status: "live",
        previewLayout: "phone",
        tags: ["React Native", "TypeScript", "Expo", "Geolocation"],
        github: "https://github.com/cburgoin-dev/turismo-la-paz",
        actions: [
            {
                labelKey: "androidApk",
                url: "https://github.com/cburgoin-dev/turismo-la-paz/releases/download/v1.0.0/TurismoLaPaz-v1.0.0.apk",
                variant: "primary"
            }
        ],
        images: [
            turismo01,
            turismo02,
            turismo03,
            turismo04,
            turismo05,
            turismo06,
        ],
        icon: "🗺️",
    },
    {
        id: 2,
        status: "live",
        previewLayout: "phone",
        tags: ["Kotlin", "Jetpack Compose", "Retrofit", "Laravel", "AWS S3"],
        github: "https://github.com/cburgoin-dev",
        actions: [],
        images: [],
        icon: "🔍",
    },
    {
        id: 3,
        status: "live",
        previewLayout: "diagram",
        tags: ["Java", "MySQL", "REST API", "JWT"],
        github: "https://github.com/cburgoin-dev",
        actions: [],
        images: [],
        icon: "🏨",
        architecture: ["Controller", "Service", "DAO", "MySQL"],
    },
];
