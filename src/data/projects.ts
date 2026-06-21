import type { TechnologyKey } from "./technologies";

import turismo01 from "../assets/projects/turismo-la-paz/turismo-la-paz-01.jpeg";
import turismo02 from "../assets/projects/turismo-la-paz/turismo-la-paz-02.jpeg";
import turismo03 from "../assets/projects/turismo-la-paz/turismo-la-paz-03.jpeg";
import turismo04 from "../assets/projects/turismo-la-paz/turismo-la-paz-04.jpeg";
import turismo05 from "../assets/projects/turismo-la-paz/turismo-la-paz-05.jpeg";
import turismo06 from "../assets/projects/turismo-la-paz/turismo-la-paz-06.jpeg";

import lostfound01 from "../assets/projects/lost-found/lost-found-01.jpeg";
import lostfound02 from "../assets/projects/lost-found/lost-found-02.jpeg";
import lostfound03 from "../assets/projects/lost-found/lost-found-03.jpeg";
import lostfound04 from "../assets/projects/lost-found/lost-found-04.jpeg";
import lostfound05 from "../assets/projects/lost-found/lost-found-05.jpeg";
import lostfound06 from "../assets/projects/lost-found/lost-found-06.jpeg";

import emotionDocs from "../assets/docs/emotion-analysis.pdf";
import emotionanalysis01 from "../assets/projects/emotion-analysis/emotion-analysis-01.png"
import emotionanalysis02 from "../assets/projects/emotion-analysis/emotion-analysis-02.png"
import emotionanalysis03 from "../assets/projects/emotion-analysis/emotion-analysis-03.png"
import emotionanalysis04 from "../assets/projects/emotion-analysis/emotion-analysis-04.png"
import emotionanalysis05 from "../assets/projects/emotion-analysis/emotion-analysis-05.png"

export type ProjectActionType =
    | "apk"
    | "demo"
    | "website"
    | "docs";

export type Project = {
    id: number;
    status: "live" | "dev";
    previewLayout: 
    | "phone" 
    | "landscape" 
    | "diagram"
    | "api";
    apiExamples?: ApiExample[];
    tags: TechnologyKey[];
    github: string;
    actions?: {
        type: ProjectActionType;
        url: string;
        variant?: "primary" | "secondary";
    }[];
    images: string[];
    icon: string;
    /** Optional architecture flow shown in the media column when there are no images */
    architecture?: string[];
};

export type ApiExample = {
    title: string;
    subtitle?: string;
    request?: string[];
    responseStatus?: string;
    response?: string[];
    overview?: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        status: "live",
        previewLayout: "phone",
        tags: ["React Native", "TypeScript", "Expo", "Geolocation"],
        github: "https://github.com/cburgoin-dev/turismo-la-paz",
        actions: [
            {
                type: "apk",
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
        github: "https://github.com/cburgoin-dev/lost-and-found",
        actions: [
            {
                type: "apk",
                url: "https://github.com/cburgoin-dev/lost-and-found/releases/download/v1.1/LostFoundApp-v1.1.apk",
                variant: "primary"
            }
        ],
        images: [
            lostfound01,
            lostfound02,
            lostfound03,
            lostfound04,
            lostfound05,
            lostfound06,
        ],
        icon: "🔍",
    },
    {
        id: 3,
        status: "live",
        previewLayout: "api",
        tags: ["Java", "MySQL", "REST API", "JWT"],
        github: "https://github.com/cburgoin-dev/hotel-reservation-api",
        actions: [
            {
                type: "docs",
                url: "https://github.com/cburgoin-dev/hotel-reservation-api#readme",
                variant: "primary"
            }
        ],
        images: [],
        icon: "🏨",
        apiExamples: [
            {
                title: "Hotel Reservation API",
                subtitle: "OVERVIEW",
                overview: [
                    "✓ JWT Authentication",
                    "✓ BCrypt Password Hashing",
                    "✓ Role-Based Access Control",
                    "✓ Booking Validation",
                    "✓ Business Rules Enforcement"
                ]
            },
            {
                title: "Authentication",
                request: [
                    "POST /api/auth/login",
                    "",
                    "{",
                    '  "email": "admin@hotel.com",',
                    '  "password": "••••••"',
                    "}"
                ],
                responseStatus: "200 OK",
                response: [
                    "{",
                    '  "token": "eyJhbGciOi..."',
                    '  "role": "ADMIN"',
                    "}"
                ]
            },
            {
                title: "Booking Created",
                request: [
                    "POST /api/bookings",
                    "",
                    "{",
                    '  "guestId": 12,',
                    '  "roomId": 5,',
                    '  "checkIn": "2026-07-10",',
                    '  "checkOut": "2026-07-13"',
                    "}"
                ],
                responseStatus: "201 Created",
                response: [
                    "{",
                    '  "message": "Booking created successfully"',
                    "}"
                ]
            },
            {
                title: "Room Unavailable",
                request: [
                    "POST /api/bookings"
                ],
                responseStatus: "409 Conflict",
                response: [
                    "{",
                    '  "error": "Room unavailable"',
                    "}"
                ]
            },
            {
                title: "Access Denied",
                request: [
                    "DELETE /api/bookings/15"
                ],
                responseStatus: "403 Forbidden",
                response: [
                    "{",
                    '  "error": "Access denied"',
                    "}"
                ]
            },
            {
                title: "Late Cancellation",
                request: [
                    "PATCH /api/bookings/15/cancel"
                ],
                responseStatus: "400 Bad Request",
                response: [
                    "{",
                    '  "error": "Cannot cancel within 24 hours"',
                    "}"
                ]
            }
        ]
    },
    {
        id: 4,
        status: "dev",
        previewLayout: "landscape",
        tags: ["Python", "OpenCV", "DeepFace", "TensorFlow", "Pandas"],
        github: "https://github.com/cburgoin-dev/emotion-analysis",
        actions: [
            {
                type: "demo",
                url: "https://youtu.be/rF7Pxkg8UBA",
                variant: "primary"
            },
            {
                type: "docs",
                url: emotionDocs,
                variant: "secondary"
            }
        ],
        images: [
            emotionanalysis01,
            emotionanalysis02,
            emotionanalysis03,
            emotionanalysis04,
            emotionanalysis05,
        ],
        icon: "😊",
    },
];
