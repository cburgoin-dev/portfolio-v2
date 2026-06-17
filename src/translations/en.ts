const en = {
    navbar: {
        projects: "Projects",
        experience: "Experience",
        skills: "Skills",
        about: "About",
        resume: "Resume",
    },

    hero: {
        badge: "Software Engineer",
        description: "Building scalable systems and solving real-world problems — one line at a time.",
        chips: [
            "Backend Development",
            "Mobile Applications",
            "Artificial Intelligence",
        ],
        viewProjects: "View projects",
        social: {
            linkedin: "LinkedIn",
            email: "Email",
            resume: "Resume",
        },
        status: "Open to opportunities",
    },

    projects: {
        label: "What I've built",
        title: "Projects",
        github: "GitHub",
        items: [
            {
                id: 1,
                name: "Turismo La Paz",
                statusLabel: "Completed",
                title: "Turismo La Paz",
                description:
                "Mobile app centralizing 40+ tourist attractions and experiences in La Paz through geolocation, distance-based recommendations, and category filters. Presented before the La Paz City Hall and Municipal Tourism Department as part of an academic collaboration initiative.",
            },
            {
                id: 2,
                name: "Lost & Found UABCS",
                statusLabel: "Completed",
                title: "Lost & Found UABCS",
                description:
                "Academic mobile application for reporting and recovering lost items within the university community. Built with Kotlin and Jetpack Compose, integrating a Laravel REST API and AWS S3 image storage through Retrofit. Led requirements analysis, database design, and technical documentation.",
            },
            {
                id: 3,
                name: "Reservation System",
                statusLabel: "Completed",
                title: "Hotel Reservation System",
                description:
                "Backend system for managing hotel bookings, clients, rooms, and availability. Built with Java and MySQL using a Controller–Service–DAO architecture. Includes JWT authentication, booking validation, room availability checks, and RESTful endpoints.",
            },
        ],
    },

    experience: {
        label: "Where I've grown",
        title: "Experience",
        items: [
            {
                id: 1,
                organization: "LIDIAIR",
                role: "Research Software Developer",
                badge: "Current",
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
                date: "Aug 2023 — Present",
                bullets: [
                    "Training in software architecture, data structures, an relational database design",
                    "Built academic and collaborative projects applying engineering practices and requirements analysis",
                    "Focused on backend development, REST APIs, and mobile application development",
                    "Recognized with academic excellence distinctions throughout the degree"
                ],
            },
        ],
    },

    skills: {
        label: "What I work with",
        title: "Skills",
        categories: {
            languages: "Languages",
            frameworks: "Frameworks & Mobile",
            databases: "Databases",
            ai: "Applied AI",
            tools: "Tools & Technologies",
        },
        levels: {
            advanced: "Advanced",
            intermediate: "Intermediate",
        },
    },

    about: {
        label: "How I think",
        title: "About",
        quote: "Build software that solves problems clearly, and in a way future developers won't hate.",
        paragraphs: [
            "I enjoy understanding problems before rushing into solutions. The part I find most interesting isn't writing code—it's figuring out what actually needs to be built, questioning assumptions, and reducing complexity before it becomes technical debt.",
    
            "Good software, to me, is software that remains understandable months later. I care about structure, maintainability, and making deliberate decisions so future iterations become easier instead of harder.",
        ],
        principles: [
            "Solve real problems",
            "Keep complexity under control",
            "Build for the long run"
        ],
    },

    footer: {
        builtWith: "Built with React + TypeScript",
    },
};

export default en;