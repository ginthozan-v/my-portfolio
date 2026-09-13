// ─── Edit this file to make the portfolio yours ───────────────────────────

export const profile = {
  name: 'Ginthozan',
  fullName: 'Ginthozan Varnakulasingam',
  role: 'Shopify Full-Stack Expert',
  tagline: 'I build fast, pixel-perfect Shopify storefronts — Liquid and Headless — with custom apps, checkout extensions and ERP integrations that keep the whole stack in sync.',
  location: 'Amsterdam, NL',
  available: 'Available for freelance & full-time',
  email: 'ginthozan@gmail.com',
  resumeUrl: '#',
}

export const socials = [
  { label: 'GitHub', url: 'https://github.com/ginthozan-v' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ginthozan-v/' },
  // { label: 'Twitter', url: 'https://twitter.com' },
]

export const stats = [
  { value: '7+', label: 'Years building for the web' },
  { value: '25+', label: 'Shopify stores shipped' },
  { value: '10+', label: 'Checkout & UI extensions built' },
]

export const about = {
  statement:
    'I’m a Shopify full-stack expert who lives in the details between the pixels — the easing curve, the 16ms frame, the ERP sync running quietly underneath.',
  paragraphs: [
    'Seven years building for the web, the last three and a half specialized in Shopify. I take a pragmatic approach to the ecosystem: Liquid customization for straightforward requirements, Headless (Hydrogen/Next.js) for complex storefronts — whichever gets the job done well. I bridge design and engineering, turning Figma files into fluid, accessible interfaces with React, GSAP and a healthy respect for performance budgets.',
    'Beyond the storefront, I integrate Shopify with ERP systems (SAP, NetSuite, custom APIs) via Node.js and N8N, build custom checkout and UI extensions, and lead client relationships end-to-end — discovery, technical consulting, scope, and mentoring the team that ships it.',
  ],
  facts: [
    { k: 'based', v: '"Amsterdam, NL"' },
    { k: 'focus', v: '["Shopify", "Headless", "ERP Integration"]' },
    { k: 'experience', v: '"7+ years"' },
    { k: 'status', v: '"open to work"' },
  ],
  now: [
    { label: 'Now building', value: 'Headless Shopify storefronts' },
    { label: 'Learning', value: 'WebGL shaders & R3F' },
    { label: 'Off-screen', value: 'Video Games, Exploring Countries' },
  ],
  toolkit: [
    'Shopify / Liquid', 'Shopify / Headless', 'Shopify Apps', 'Shopify UI Extensions', 'Hydrogen',
    'React', 'Next.js', 'TypeScript', 'GSAP', 'Three.js / R3F',
    'Node.js', 'GraphQL', 'ERP Integration (SAP, NetSuite)', 'N8N', 'Remix', 'Polaris', 'TailwindCSS', 'Figma',
  ],
}

export const projects = [
  {
    id: '01',
    title: 'Connox',
    category: 'Magento → Shopify',
    year: '2023',
    description:
      'Replatformed from Magento to Shopify with a full frontend redesign and custom middleware support to keep existing systems in sync.',
    role: 'Frontend / Migration / Middleware',
    stack: 'Shopify · Liquid · Node middleware',
    color: '#c77dff',
  },
  {
    id: '02',
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
    id: '03',
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
    id: '04',
    title: 'Dstrezzed',
    category: 'Shopify · Horizon',
    year: '2024',
    description:
      'A complete brand storefront redesign, rebuilt from the ground up on Shopify Horizon with a refreshed, content-led shopping experience.',
    role: 'Frontend / Theme Development',
    stack: 'Shopify Horizon · Liquid · JS',
    color: '#5e9bff',
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
    role: 'Senior Shopify Developer',
    company: 'Flatline Agency',
    period: '2023 Sep — Present',
    location: 'Amsterdam, Netherlands',
    stack: ['Shopify', 'Liquid', 'Hydrogen', 'Storefront/Admin API', 'GraphQL', 'UI Extensions', 'Node.js', 'N8N', 'SAP', 'NetSuite', 'Agile'],
    summary: 'Own end-to-end client relationships and lead a development team building and integrating Shopify storefronts for leading Dutch brands, including Oger, Natural High and Noord Code.',
    points: [
      'Developed & manage 25+ production Shopify stores across Liquid and Headless approaches',
      'Built 10+ Shopify UI and Checkout Extensions',
      'Optimized performance: 35% load time reduction, Lighthouse 45% → 90%',
      'Integrated Shopify with ERP systems (SAP, NetSuite, custom APIs) using Node.js and N8N',
      'Lead discovery meetings, technical consulting and scope definition with clients',
      'Mentor and lead the development team: task assignment, code reviews, QA',
    ],
  },
  {
    role: 'Frontend Engineer, CMS Development (Remote)',
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
    role: 'Frontend Developer (Remote/Freelance)',
    company: 'Flatline Agency',
    period: '2021 Oct — 2023 Aug',
    location: 'Amsterdam, Netherlands',
    stack: ['React', 'Next.js', 'TailwindCSS', 'Thirdweb', 'Ionic', 'Strapi', 'GitHub'],
    summary: 'Built SaaS applications from scratch to production, including a Web3 NFT platform on Thirdweb.',
    points: [
      'Architected frontends and implemented features across the product lifecycle',
      'Translated Figma designs into reusable React components',
      'Notable project: Web3 NFT platform built with Thirdweb and blockchain integration',
      'Collaborated with backend developers, designers and project managers',
    ],
  },
  {
    role: 'Associate Software Engineer (Full-Stack)',
    company: 'Intersoft International Solutions (PVT) Ltd.',
    period: 'Aug 2020 — Oct 2021',
    location: 'Jaffna, Sri Lanka',
    stack: ['ASP.NET MVC', 'C#', 'JavaScript', 'jQuery', 'REST API', 'SQL Server'],
    summary: 'Built and maintained a hospital logistics SaaS application for UK hospitals.',
    points: [
      'Developed features, fixed bugs and optimized UI/UX',
      'Collaborated with a small development team on the production system',
    ],
  },
  {
    role: 'Software Engineer Intern (Full-Stack)',
    company: 'Intersoft International Solutions (PVT) Ltd.',
    period: 'Feb 2020 — Jul 2020',
    location: 'Jaffna, Sri Lanka',
    stack: ['ASP.NET', 'C#', 'JavaScript', 'jQuery', 'SQL Server'],
    summary: 'Trained and integrated into the company’s production systems.',
    points: [
      'Ramped up on the ASP.NET MVC codebase and internal workflows',
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
