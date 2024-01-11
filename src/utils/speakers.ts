export type Speaker = {
    image: string;
    name: string;
    description: string;
    links?: {
        linkedin?: string;
        instagram?: string;
        twitter?: string;
        website?: string;
    }
}

const speakers: Speaker[] = [
    {
        name: "Jesper Theil Thomsen",
        image: "./speakers/jespertheilthomsen.png",
        description: "CEO & Founder, Soundboks",
        links: {
            linkedin: 'https://www.linkedin.com/in/jespertheilthomsen',
            instagram: 'https://www.instagram.com/jespertthomsen/',
            website: 'https://soundboks.com/'
        }
    },
    {
        name: "Mads Andreas Olesen",
        image: "./speakers/madsolesen.png",
        description: "Founder af MXNEY.IO",
        links: {
            linkedin: 'https://www.linkedin.com/in/madsandreasolesen/',
            instagram: 'https://www.instagram.com/madsandreasolesen/',
        }
    },
    {
        name: "Lasse Søkilde",
        image: "./speakers/lassesokilde.jpg",
        description: "Founder af BOLD",
        links: {
            instagram: 'https://www.instagram.com/lassesoekildebold',
            linkedin: 'https://www.linkedin.com/in/lassesoekilde'
        }
    },
    {
        name: "Kasper Knudsen",
        image: './speakers/kasperknudsen.jpg',
        description: 'Founder og CEO, Sedia ApS',
        links: {
            website: 'https://sedia.dk',
            linkedin: 'https://www.linkedin.com/in/kasper-knudsen-sedia'
        }
    },
    {
        name: "Daniel Pedersen",
        image: './speakers/danielpedersen.jpg',
        description: 'Daniels Pengetips',
        links: {
            website: 'https://danielspengetips.dk/',
            linkedin: 'https://www.linkedin.com/in/danielhansenp'
        }
    },
    {
        name: "Anthon Louis",
        image: './speakers/anthonlouis.png',
        description: 'Serieiværksætter: Arch, Museo & Bareen.',
        links: {
            linkedin: 'https://www.linkedin.com/in/anthon-louis-madsen-719054113',
            instagram: 'https://www.instagram.com/anthonlouis/'
        }
    }
]

export default speakers;