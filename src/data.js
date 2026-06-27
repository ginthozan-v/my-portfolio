// ─── Edit this file to make the portfolio yours ───────────────────────────

export const profile = {
  name: 'Ginthozan',
  role: 'Frontend & Shopify Developer',
  tagline: 'I build fast, pixel-perfect storefronts, custom Shopify apps and web interfaces — turning design into clean, high-performance code.',
  location: 'Amsterdam, NL',
  available: 'Available for freelance & full-time',
  email: 'ginthozan@gmail.com',
  resumeUrl: '#',
}

export const socials = [
  { label: 'GitHub', url: 'https://github.com' },
  { label: 'LinkedIn', url: 'https://linkedin.com' },
  { label: 'Twitter', url: 'https://twitter.com' },
]

export const stats = [
  { value: '7+', label: 'Years building for the web' },
  { value: '40+', label: 'Shipped products' },
  { value: '20+', label: 'Major brands worked with' },
]

export const about = {
  statement:
    'I’m a frontend & Shopify developer who lives in the details between the pixels — the easing curve, the 16ms frame, the way a page should feel before it’s read.',
  paragraphs: [
    'Six years in, I’ve shipped everything from headless Shopify storefronts and custom Shopify apps to award-chasing brand sites. I bridge design and engineering — turning Figma files into fluid, accessible interfaces with React, GSAP and a healthy respect for performance budgets.',
    'I care about code the next developer will actually enjoy reading, and interfaces that feel as good as they look.',
  ],
  facts: [
    { k: 'based', v: '"Amsterdam, NL"' },
    { k: 'focus', v: '["Frontend", "Shopify", "Apps"]' },
    { k: 'experience', v: '"6+ years"' },
    { k: 'status', v: '"open to work"' },
  ],
  now: [
    { label: 'Now building', value: 'Headless Shopify storefronts' },
    { label: 'Learning', value: 'WebGL shaders & R3F' },
    { label: 'Off-screen', value: 'Video Games, Exploring Countries' },
  ],
  toolkit: [
    'React', 'Next.js', 'TypeScript', 'GSAP', 'Three.js / R3F',
    'Shopify / Liquid', 'Shopify / Headless', 'Shopify Apps', 'Remix', 'Polaris', 'TailwindCSS', 'Node.js', 'Figma',
  ],
}

export const projects = [
  {
    id: '01',
    title: 'Oger.nl',
    category: 'Shopify · Theme Rebuild',
    year: '2025',
    description:
      'Rebuilt the storefront on Shopify’s new Horizon framework, migrating away from a legacy Shopify 1.0 theme for a faster, modern, maintainable codebase.',
    role: 'Frontend / Theme Development',
    stack: 'Shopify Horizon · Liquid · JS',
    color: '#d8ff3e',
  },
  {
    id: '02',
    title: 'Handyswap',
    category: 'Shopify · Headless',
    year: '2024',
    description:
      'A complete headless redesign — a custom decoupled storefront built on Shopify’s headless stack for full control over UX and performance.',
    role: 'Frontend / Headless Development',
    stack: 'Shopify Headless · React · Hydrogen',
    color: '#ff5e3a',
  },
  {
    id: '03',
    title: 'Dstrezzed',
    category: 'Shopify · Horizon',
    year: '2024',
    description:
      'A complete brand storefront redesign, rebuilt from the ground up on Shopify Horizon with a refreshed, content-led shopping experience.',
    role: 'Frontend / Theme Development',
    stack: 'Shopify Horizon · Liquid · JS',
    color: '#5e9bff',
  },
  {
    id: '04',
    title: 'Connox',
    category: 'Magento → Shopify',
    year: '2023',
    description:
      'Replatformed from Magento to Shopify with a full frontend redesign and custom middleware support to keep existing systems in sync.',
    role: 'Frontend / Migration / Middleware',
    stack: 'Shopify · Liquid · Node middleware',
    color: '#c77dff',
  },
]

export const certificates = [
  {
    title: 'Creating Solutions for Shopify Checkout',
    issuer: 'Shopify',
    issued: 'Sep 2025',
    expires: 'Sep 2027',
    url: 'https://www.credly.com/badges/b48152cd-f923-4c13-9746-38fa4a7e425d/linked_in_profile',
    badge: 'https://images.credly.com/size/680x680/images/41110b37-73bf-4f1b-b872-13a5fd7b8af8/blob',
  },
  {
    title: 'B2B on Shopify: Launch and Customization',
    issuer: 'Shopify',
    issued: 'Dec 2025',
    expires: 'Dec 2027',
    url: 'https://www.credly.com/badges/48ea6456-a2ea-414f-8e89-14486bd37812/public_url',
    badge: 'https://images.credly.com/size/680x680/images/2b0ab7f8-a6c7-4e41-bd62-43b3113cd56f/blob',
  },
  {
    title: 'Shopify B2B: Foundations, Discovery and Solution Design',
    issuer: 'Shopify',
    issued: 'Dec 2025',
    expires: 'Dec 2027',
    url: 'https://www.credly.com/badges/2c2d1770-9a16-4cfc-a974-4937701d77d2/public_url',
    badge: 'https://images.credly.com/size/680x680/images/68671480-a48f-4c24-8798-9f7b9f916117/blob',
  },
]

export const experience = [
  {
    role: 'Senior Frontend Developer',
    company: 'Flatline Agency',
    period: '2023 Sep — Present',
    location: 'Amsterdam, Netherlands',
    stack: ['Shopify', 'Liquid', 'JavaScript', 'Storefront API', 'GraphQL', 'REST API', 'Vitest', 'GitHub', 'Agile'],
    summary: 'Building and maintaining Shopify storefronts for leading Dutch brands, including Oger, Natural High and Noord Code.',
    points: [
      'Develop new Shopify storefronts end-to-end and ship features across existing themes',
      'Translate design files into reusable, accessible UI components',
      'Optimize storefront performance and Core Web Vitals',
      'Integrate Shopify Storefront and GraphQL APIs',
      'Mentor junior developers and collaborate cross-functionally in agile teams',
    ],
  },
  {
    role: 'Senior Frontend Developer (Remote)',
    company: 'Boolean Labs',
    period: '2022 Mar — 2023 Jul',
    location: 'Colombo, Sri Lanka',
    stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Monorepo', 'Jest', 'React Testing Library', 'Jira', 'Agile'],
    summary: 'Led front-end development of MYT — a large-scale services portal for Mauritius Telecom.',
    points: [
      'Led front-end development across the CMS and customer-facing applications',
      'Translated Figma designs into responsive, reusable React components',
      'Built a dynamic form-generation system that accelerated feature delivery',
      'Implemented authentication flows and integrated REST APIs',
      'Mentored junior developers and drove delivery through Jira and Confluence',
    ],
  },
  {
    role: 'Frontend Developer (Remote)',
    company: 'Flatline Agency',
    period: '2021 Oct — 2023 Aug',
    location: 'Amsterdam, Netherlands',
    stack: ['Next.js', 'TailwindCSS', 'Ionic', 'Strapi', 'HTML', 'CSS', 'GitHub'],
    summary: 'Delivered web projects for a range of agency clients.',
    points: [
      'Built new web projects from scratch and maintained existing front-ends',
      'Translated wireframes into reusable UI components',
      'Integrated REST APIs within agile, cross-functional teams',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Intersoft International Solutions (PVT) Ltd.',
    period: 'Feb 2021 — Oct 2021',
    location: 'Jaffna, Sri Lanka',
    stack: ['ASP.NET', 'C#', 'JavaScript', 'jQuery', 'REST API', 'SQL Server'],
    summary: 'Maintained and enhanced an enterprise .NET application alongside a development team.',
    points: [
      'Implemented new features, bug fixes and front-end improvements',
      'Refactored code and integrated REST APIs',
      'Collaborated within a team of .NET developers',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Intersoft International Solutions (PVT) Ltd.',
    period: 'Feb 2020 — Jan 2021',
    location: 'Jaffna, Sri Lanka',
    stack: ['ASP.NET', 'C#', 'JavaScript', 'jQuery', 'Chart.js', 'SQL Server'],
    summary: 'Contributed to a logistics management system during an engineering internship.',
    points: [
      'Maintained and extended the logistics platform',
      'Built a reporting and analytics web app using Chart.js',
      'Supported QA, bug fixing and UI improvements',
    ],
  },
  {
    role: 'Web Developer (Freelance)',
    company: 'Appz Makers',
    period: '2018 — 2020',
    location: 'Colombo, Sri Lanka',
    stack: ['Laravel', 'PHP', 'JavaScript', 'MySQL', 'Bootstrap', 'Git'],
    summary: 'Built websites and web applications for small businesses.',
    points: [
      'Developed websites and web applications end-to-end',
      'Gathered requirements, planned and delivered projects',
      'Handled deployment to shared hosting',
    ],
  },
]
