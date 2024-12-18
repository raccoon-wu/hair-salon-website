
export const servicesList: { sectionName: string; sectionContent: { serviceName: string; cost?: number }[] }[] = [
    {
        sectionName: "Haircuts",
        sectionContent: [
            { serviceName: "Men's Style Cut"},
            { serviceName: "Women's Style Cut"},
            { serviceName: "Boy's Cut"},
            { serviceName: "Girl's Cut"},
        ],
    },
    {
        sectionName: "Blow Wave",
        sectionContent: [
            { serviceName: "Hairwash"},
            { serviceName: 'Smooth', cost: 35 },
            { serviceName: 'Waves', cost: 45 },
        ],
    },
    {
        sectionName: "Perms",
        sectionContent: [
            { serviceName: 'Perm', cost: 100 },
            { serviceName: 'Straightening', cost: 250 },
            { serviceName: 'Keratin Treatment', cost: 250 },
        ],
    },
    {
        sectionName: "Colour",
        sectionContent: [
            { serviceName: 'Regrowth', cost: 65 },
            { serviceName: 'Full Tint Colour', cost: 100 },
            { serviceName: '1/2 Head Foils', cost: 120 },
            { serviceName: 'Full Head Foils', cost: 180 },
            { serviceName: 'Bleach + Tone' },
            { serviceName: 'Balayage' },
        ],
    },
];