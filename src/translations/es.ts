const es = {
    navbar: {
        projects: "Proyectos",
        experience: "Experiencia",
        skills: "Habilidades",
        about: "Acerca",
        resume: "Currículum",
    },

    hero: {
        badge: "Ingeniero de Software",
        description: "Construyendo sistemas escalables y resolviendo problemas reales, una línea de código a la vez.",
        chips: [
            "Desarrollo Backend",
            "Aplicaciones Móviles",
            "Inteligencia Artificial",
        ],
        viewProjects: "Ver proyectos",
        social: {
            linkedin: "LinkedIn",
            email: "Correo",
            resume: "Currículum",
        },
        status: "Abierto a oportunidades",
    },

    projects: {
        label: "Lo que he construido",
        title: "Proyectos",
        github: "GitHub",
        actions: {
            apk: "APK Android",
            demo: "Demo",
            website: "Sitio Web",
            docs: "Documentación",
        },
        items: [
            {
                id: 1,
                name: "Turismo La Paz",
                statusLabel: "Completado",
                title: "Turismo La Paz",
                description:
                "Aplicación móvil que centraliza más de 40 atracciones y experiencias turísticas en La Paz mediante geolocalización, recomendaciones basadas en distancia y filtros por categorías. Fue presentada ante el Ayuntamiento de La Paz y la Dirección Municipal de Turismo como parte de una iniciativa de colaboración académica.",
            },
            {
                id: 2,
                name: "Lost & Found UABCS",
                statusLabel: "Completado",
                title: "Lost & Found UABCS",
                description:
                "Aplicación móvil académica para reportar y recuperar objetos perdidos dentro de la comunidad universitaria. Originalmente integraba una API REST en Laravel y almacenamiento en AWS S3 mediante Retrofit; posteriormente fue refactorizada con datos simulados configurables para mantener una demostración funcional tras la indisponibilidad del backend.",
            },
            {
                id: 3,
                name: "Sistema de Reservaciones",
                statusLabel: "Completado",
                title: "Sistema de Reservaciones Hoteleras",
                description:
                "Sistema backend para la gestión de reservaciones, clientes, habitaciones y disponibilidad. Desarrollado con Java y MySQL utilizando una arquitectura Controller-Service-DAO. Incluye autenticación JWT, validación de reservas, verificación de disponibilidad y endpoints REST.",
            },
        ],
    },

    experience: {
        label: "Dónde he crecido",
        title: "Experiencia",
        items: [
            {
                id: 1,
                organization: "LIDIAIR",
                role: "Desarrollador de Software de Investigación",
                badge: "Actual",
                date: "Ago 2025 — Presente",
                bullets: [
                    "Desarrollé aplicaciones de visión por computadora en el Laboratorio de Investigación en IA y Robótica de la UABCS",
                    "Construí un sistema de detección y clasificación de frutas con cálculo automatizado de precios utilizando sensores de peso",
                    "Colaboré en un sistema de detección de emociones faciales en tiempo real con métricas de evaluación exportables",
                    "Presenté resultados de investigación en una exhibición institucional de software",
                ],
            },
            {
                id: 2,
                organization: "UABCS",
                role: "Ingeniería en Desarrollo de Software",
                badge: "Formación",
                date: "Ago 2023 — Presente",
                bullets: [
                    "Formación en arquitectura de software, estructuras de datos y diseño de bases de datos relacionales",
                    "Desarrollé proyectos académicos y colaborativos aplicando prácticas de ingeniería y análisis de requisitos",
                    "Enfoque en desarrollo backend, APIs REST y desarrollo de aplicaciones móviles",
                    "Reconocido con distinciones por excelencia académica a lo largo de la carrera"
                ],
            },
        ],
    },

    skills: {
        label: "Con qué trabajo",
        title: "Habilidades",
        categories: {
            languages: "Lenguajes",
            frameworks: "Frameworks y Plataformas",
            databases: "Bases de datos",
            ai: "IA aplicada",
            tools: "Herramientas y prácticas",
        },
        levels: {
            advanced: "Avanzado",
            intermediate: "Intermedio",
        },
    },

    about: {
        label: "Cómo pienso",
        title: "Acerca de mí",
        quote: "Construir software que resuelva problemas con claridad y de una forma que los futuros desarrolladores no terminen odiando.",
        paragraphs: [
            "Disfruto entender los problemas antes de apresurarme a resolverlos. Lo que más me interesa no es escribir código, sino descubrir qué es realmente necesario construir, cuestionar supuestos y reducir la complejidad antes de que se convierta en deuda técnica.",
    
            "Para mí, un buen software es aquel que sigue siendo comprensible meses después. Me importa la estructura, la mantenibilidad y tomar decisiones conscientes para que las futuras iteraciones sean más sencillas en lugar de más difíciles.",
        ],
        principles: [
            "Resolver problemas reales",
            "Controlar la complejidad",
            "Pensar a largo plazo"
        ],
    },

    footer: {
        builtWith: "Desarrollado con React + TypeScript",
    },
};

export default es;