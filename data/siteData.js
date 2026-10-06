export const siteData = {
  brand: {
    name: 'Origin Construction',
    tagline: 'Building Excellence & Architectural Mastery',
    copyright: '© 2024 Origin Construction. All Rights Reserved. Powered by Origin Softwares.',
    logo: '/logo/o3.png',
  
    logoAlt: 'Origin Constructions logo'
  },

  contact: {
    email: 'originconstruction@gmail.com',
    phone: '+91 9391 743 896',
    hours: 'Mon - Fri / 9:00 AM - 6:00 PM',
    address:
      'Villa No 107, Parmareddy Hills, Upperpally, Hyderabad 500048, Telangana, India'
  },

  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Team', href: '#team' },
    { name: 'Contact Us', href: '#contact' }
  ],

  socials: [
    { platform: 'Facebook', href: '#' },
    { platform: 'Twitter', href: '#' },
    { platform: 'Pinterest', href: '#' },
    { platform: 'Behance', href: '#' },
    { platform: 'Instagram', href: '#' },
    { platform: 'Youtube', href: '#' }
  ],

  hero: {
    subTagline: 'The Choice Around the World',
    headline: 'Innovative Modern Design & Works',
    description:
      'The final design package as per latest approval and client dreams and art work requirements to acceptance.',
    primaryCta: 'Get Started',
    secondaryCta: 'View More',
    visual: '/images/hero/hero-architecture.svg'
  },

  about: {
    sectionBadge: 'About Us',
    heading: 'Smart planning of Work process',
    subtitle:
      'This including consulting multi disciplinary consulting work with design and engineering, our world branches giving full support for executing professional work.',
    bannerQuote:
      'INNOVATION STARTS HERE — Origin Construction has been giving best consultation to top Engineering companies.',

    steps: [
      {
        number: '01',
        title: 'Conceptual',
        description:
          'Providing proposals to the client for the preliminary with the full models and rendering the reality.'
      },
      {
        number: '02',
        title: 'Schematic',
        description:
          'Enhancement proposals to the client for the preliminary with the full models and rendering the approved.'
      },
      {
        number: '03',
        title: 'Development',
        description:
          'Finalized proposals to the client for the preliminary with the full models and changes are sufficient.'
      }
    ]
  },

  services: {
    sectionBadge: 'What We Do',
    heading: 'Our Services',
    subtitle:
      'This including consulting multi disciplinary consulting work with design and engineering, our world branches giving full support for executing professional work.',

    items: [
      {
        id: 'construction',
        title: 'Construction',
        description:
          "We designs spaces and ambiances to best meet Clients' functional and reasonable standards.",
        cta: 'Show More'
      },
      {
        id: 'interior-designing',
        title: 'Interior Designing',
        description:
          'The interior dynamics of built spaces and reasonable standards to be greeting welcome.',
        cta: 'Show More'
      },
      {
        id: 'renovations',
        title: 'Renovations',
        description:
          'To covering and reasonable standards structure, mechanical, electrical and plumbing for (MEP).',
        cta: 'Show More'
      }
    ]
  },

  stats: [
    {
      label: 'Completed Projects',
      value: 120,
      suffix: '+'
    },
    {
      label: 'Satisfied Clients',
      value: 99,
      suffix: '%'
    },
    {
      label: 'On Going Projects',
      value: 15,
      suffix: '+'
    },
    {
      label: 'Awards Won',
      value: 12,
      suffix: '+'
    }
  ],

  team: {
    sectionBadge: 'Creative Team',
    heading: 'Meet Our Team',

    members: [
      {
        name: 'Mohammed Israr Uddin',
        role: 'CEO & Founder',
        image: null
      },
      {
        name: 'Mohammed Ahsan Uddin Abbas',
        role: 'Researcher | ARCHITECT',
        image: null
      },
      {
        name: 'Mohammed Abdul Baseer',
        role: 'Engineer',
        image: '/images/team/mohammed-abdul-baseer.png'
      }
    ]
  }
}
