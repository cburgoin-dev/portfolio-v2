export type ExperienceItem = {
    id: number;
    badgeType: "current" | "degree" | "foundation";
};

export const experiences: ExperienceItem[] = [
    {
        id: 1,
        badgeType: "current",
    },
    {
        id: 2,
        badgeType: "degree",
    },
];