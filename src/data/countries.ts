export interface CountryData {
    id: string;
    slug: string;
    name: string;
    flag: string;
    shortDescription: string;
    fullDescription: string;
    features: string[];
    image: string;
}

export const COUNTRIES: CountryData[] = [
    {
        id: 'dubai',
        slug: 'dubai',
        name: 'Dubai',
        flag: '🇦🇪',
        shortDescription: 'Freezone, Mainland, Banking & Strategic Taxation.',
        fullDescription: 'Dubai is the global hub for modern business. Whether for e-commerce, holding structures, or tax optimization, Dubai offers a secure and efficient ecosystem. We guide you through Freezone vs Mainland setup, banking (Stripe/Wise), and long-term residency.',
        features: [
            'Business Setup (Freezone / Mainland)',
            'Banking & Payments (Stripe, Wise)',
            'Tax Optimization & Compliance',
            'Residency Visas',
            'E-commerce & Drop-shipping Structuring'
        ],
        image: 'https://images.unsplash.com/photo-1512453979798-5ea904ac66de?q=80&w=2000&auto=format&fit=crop'
    },
    {
        id: 'china',
        slug: 'china',
        name: 'China',
        flag: '🇨🇳',
        shortDescription: 'Sourcing, Import-Export, Factory Negotiation.',
        fullDescription: 'The factory of the world awaits. Mastering trade with China is essential for serious product businesses. We cover sourcing, negotiation, quality control, Incoterms, and logistics to secure your supply chain.',
        features: [
            'Import-Export Basics & Incoterms',
            'Sourcing & Supplier Verification',
            'Factory Negotiation Strategies',
            'Quality Control & Logistics',
            'Canton Fair & Business Trips'
        ],
        image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2000&auto=format&fit=crop'
    },
    {
        id: 'georgia',
        slug: 'georgia',
        name: 'Georgia',
        flag: '🇬🇪',
        shortDescription: 'Simple Taxation, Banking & Real Estate.',
        fullDescription: 'The hidden gem of Eurasia. Georgia offers one of the simplest tax regimes in the world, accessible banking, and high-potential real estate opportunities. Perfect for digital nomads and ease of doing business.',
        features: [
            'Company Formation (Remote possible)',
            'Territorial Tax System (0% on foreign income)',
            'Banking Opening Support',
            'Real Estate Investment',
            'High-Yield Savings'
        ],
        image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2000&auto=format&fit=crop'
    }
];
