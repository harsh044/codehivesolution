import { ServiceItem, ProjectItem, ProcessStep, IndustryItem, FaqItem } from '../types';

export const COMPANY_INFO = {
  name: 'CodeHiveSolution',
  tagline: 'Build. Innovate. Grow.',
  headline: 'We Build Digital Solutions That Help Businesses Grow.',
  subheadline: 'From high-performance websites and mobile apps to custom software and cloud solutions, CodeHiveSolution transforms ideas into scalable digital products.',
  email: 'codehive.solutions@gmail.com',
  phone: '+91 9309937220',
  location: 'India',
  operatingHours: 'Mon - Fri: 9:00 AM - 7:00 PM IST',
  socials: {
    github: 'https://github.com/harsh044',
    linkedin: 'https://www.linkedin.com/in/harshad-patil4345/',
    instagram: 'https://www.instagram.com/codehivesolutions/',
    // twitter: 'https://twitter.com/codehivesolution',
  },
  stats: [
    { value: '3+ Years', label: 'Software Development Experience', desc: 'Crafting reliable and maintainable digital products' },
    { value: 'Multiple Projects', label: 'Web & Software Solutions', desc: 'Delivered across diverse industries and domains' },
    { value: 'Modern Stack', label: 'Latest Development Technologies', desc: 'React, Next.js, Python, Flutter, Cloud APIs' },
    { value: 'End-to-End', label: 'Development & Deployment', desc: 'From initial architecture to production launch & maintenance' },
  ],
  trustPillars: [
    { title: 'Custom Development', desc: 'Tailored specifically to your business workflows and goals' },
    { title: 'Scalable Solutions', desc: 'Engineered to handle increasing users, traffic, and feature complexity' },
    { title: 'Modern Technologies', desc: 'Clean, secure, and future-proof codebases using industry-standard tools' },
    { title: 'Business-Focused Approach', desc: 'Direct alignment between technical architecture and commercial value' },
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    shortDesc: 'Business websites, portfolio websites, landing pages, corporate websites, and custom web applications.',
    fullDesc: 'We architect and build lightning-fast, conversion-optimized websites and web portals designed to captivate visitors and reflect your brand authority. Every site is engineered with responsive layouts, semantic SEO, and modern styling.',
    technologies: ['React', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'Django', 'FastAPI', 'Tailwind CSS'],
    features: [
      'Responsive multi-device layouts',
      'Server-side rendering & dynamic routing',
      'Search engine optimization (SEO) architecture',
      'Interactive components and micro-animations',
      'Content management system (CMS) integration',
      'Fast loading speed & Core Web Vitals optimization'
    ],
    deliverables: ['Custom Web Source Code', 'Production Hosting Setup', 'Analytics & Meta Tag Configuration', 'Responsive Design Across Mobile/Desktop'],
    icon: 'Globe',
    ctaText: 'Explore Web Development'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDesc: 'Build modern Android and iOS applications with intuitive user experiences.',
    fullDesc: 'From native Android capabilities to high-fidelity cross-platform apps using Flutter and React Native, we engineer fluid mobile experiences that users love to engage with daily.',
    technologies: ['Flutter', 'React Native', 'Android', 'Dart', 'Kotlin', 'Firebase SDK', 'REST APIs'],
    features: [
      'Smooth 60fps gesture and touch interactions',
      'Offline data caching & local storage',
      'Push notification pipelines',
      'Hardware integration (GPS, Camera, Biometrics)',
      'Cross-platform codebase maintainability',
      'App Store & Google Play release readiness'
    ],
    deliverables: ['Android APK / iOS Bundles', 'Complete App Source Code', 'API Integration Layer', 'Submission & Release Guidance'],
    icon: 'Smartphone',
    ctaText: 'Explore Mobile Apps'
  },
  {
    id: 'custom-software-development',
    title: 'Custom Software Development',
    shortDesc: 'Custom software systems designed specifically for unique business requirements.',
    fullDesc: 'Off-the-shelf software rarely fits intricate operational workflows. We develop tailored software systems that automate manual tasks, eliminate spreadsheet chaos, and give leadership real-time visibility.',
    technologies: ['Python', 'Django', 'FastAPI', 'Node.js', 'PostgreSQL', 'React', 'Docker'],
    features: [
      'Business Management Software & ERP systems',
      'Custom Customer Relationship Management (CRM)',
      'Secure role-based access control (RBAC)',
      'Comprehensive administrative dashboards & portals',
      'Automated batch data processing',
      'Audit logging and enterprise data security'
    ],
    deliverables: ['Full-Stack Software Platform', 'Database Schema & Migrations', 'Role & Permission Controls', 'Administrator User Manual'],
    icon: 'Cpu',
    ctaText: 'Explore Custom Software'
  },
  {
    id: 'ecommerce-development',
    title: 'E-Commerce Development',
    shortDesc: 'Build scalable online stores with product management, shopping carts, payments, orders, and admin dashboards.',
    fullDesc: 'Engineered to turn traffic into paying customers. We build customized online stores with robust catalog navigation, frictionless checkout flows, secure payment gateways, and comprehensive order fulfillment backends.',
    technologies: ['React', 'Next.js', 'Node.js', 'Django', 'PostgreSQL', 'Stripe / Payment Gateways', 'Tailwind CSS'],
    features: [
      'Product catalog with filtering, search, and variants',
      'Persistent shopping cart & guest/user checkout',
      'Multi-currency payment gateway integrations',
      'Order fulfillment & inventory management system',
      'Customer account dashboards & order history',
      'Discount coupon & promotional code engine'
    ],
    deliverables: ['E-Commerce Storefront', 'Merchant Management Dashboard', 'Payment Gateway Integration', 'Inventory Tracking System'],
    icon: 'ShoppingCart',
    ctaText: 'Explore E-Commerce'
  },
  {
    id: 'api-backend-development',
    title: 'API & Backend Development',
    shortDesc: 'Build secure, scalable and high-performance REST APIs and backend systems.',
    fullDesc: 'The backbone of any scalable digital application. We construct resilient backend architectures, well-documented RESTful APIs, and optimized databases that power client applications without latency.',
    technologies: ['Python', 'Django', 'FastAPI', 'Flask', 'Node.js', 'PostgreSQL', 'MySQL', 'MongoDB'],
    features: [
      'RESTful & GraphQL API specification and design',
      'JWT and OAuth authentication pipelines',
      'Database schema normalization & index optimization',
      'Rate limiting, caching, and request validation',
      'Third-party webhook handlers & external integrations',
      'Automated API documentation (OpenAPI / Swagger)'
    ],
    deliverables: ['Production-ready REST APIs', 'OpenAPI Documentation', 'Automated Test Suites', 'Database Migrations'],
    icon: 'Database',
    ctaText: 'Explore Backend APIs'
  },
  {
    id: 'cloud-deployment',
    title: 'Cloud & Deployment',
    shortDesc: 'Deploy and manage applications using modern cloud infrastructure.',
    fullDesc: 'Ensure your applications are always accessible, secure, and fast. We configure production-grade cloud environments, automated deployment pipelines (CI/CD), containerization, and monitoring.',
    technologies: ['AWS', 'Firebase', 'Docker', 'Git', 'GitHub Actions', 'Nginx', 'Cloudflare', 'Linux'],
    features: [
      'Containerization with Docker for reproducible builds',
      'Automated CI/CD pipelines on GitHub Actions',
      'Cloud compute provisioning (AWS EC2, ECS, Cloud Run)',
      'SSL/TLS certificate installation and DNS configuration',
      'Database automated backups and redundancy plans',
      'Application health monitoring and error alerting'
    ],
    deliverables: ['Infrastructure as Code / Dockerfiles', 'Configured CI/CD Pipelines', 'Cloud Server Architecture', 'Deployment Guide'],
    icon: 'Cloud',
    ctaText: 'Explore Cloud Setup'
  },
  {
    id: 'ui-ux-development',
    title: 'UI/UX Development',
    shortDesc: 'Create clean, responsive and user-friendly interfaces that provide excellent user experiences.',
    fullDesc: 'Digital products should be as delightful to use as they are powerful under the hood. We craft user journeys, wireframes, and production-ready design systems that maximize retention and clarity.',
    technologies: ['Figma', 'React', 'Tailwind CSS', 'Framer Motion', 'Design Tokens', 'Accessibility (WCAG)'],
    features: [
      'User research and information architecture',
      'High-fidelity wireframes and interactive prototypes',
      'Component-based design systems and design tokens',
      'Mobile-first responsive interface design',
      'Accessibility (WCAG AA) contrast and keyboard focus',
      'Micro-interactions and subtle state feedback'
    ],
    deliverables: ['Design System Tokens', 'Interactive Prototype Specs', 'Reusable UI Component Library', 'Accessibility Audit'],
    icon: 'Layout',
    ctaText: 'Explore UI/UX Design'
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    shortDesc: 'Automate repetitive business processes and integrate different systems to save time and improve productivity.',
    fullDesc: 'Stop wasting valuable team hours on repetitive manual data entry. We design automated workflows, synchronizing data across CRMs, email servers, inventory databases, and spreadsheets.',
    technologies: ['Python', 'Webhooks', 'REST APIs', 'Task Queues (Celery/Redis)', 'Cron Workers', 'Third-Party Connectors'],
    features: [
      'Cross-platform data synchronization pipelines',
      'Automated invoice generation and payment notifications',
      'Customer onboarding workflow automation',
      'Scheduled reporting and batch analytics emails',
      'Error handling and fallback notifications',
      'Elimination of human data entry discrepancies'
    ],
    deliverables: ['Automated Workflow Scripts', 'API Webhook Listeners', 'Notification & Alert Rules', 'Process Architecture Diagram'],
    icon: 'Workflow',
    ctaText: 'Explore Automation'
  }
];

export const WHAT_WE_BUILD_DATA = [
  {
    title: 'Business Websites',
    description: 'Professional websites that establish your online presence.',
    idealFor: 'Corporates, agencies, consulting practices, and service brands',
    highlights: ['Branded visual identity', 'Fast loading times', 'Lead generation forms', 'Mobile responsive'],
    icon: 'Monitor'
  },
  {
    title: 'Mobile Applications',
    description: 'Feature-rich Android and iOS applications.',
    idealFor: 'On-demand services, consumer apps, field staff tools, and customer portals',
    highlights: ['Native performance', 'Push notifications', 'Location services', 'Offline storage'],
    icon: 'Smartphone'
  },
  {
    title: 'Web Applications',
    description: 'Scalable browser-based software platforms.',
    idealFor: 'SaaS platforms, collaborative tools, client portals, and web utilities',
    highlights: ['Dynamic single-page apps', 'Real-time updates', 'Secure authentication', 'Modular components'],
    icon: 'Layers'
  },
  {
    title: 'E-Commerce Platforms',
    description: 'Complete online shopping solutions.',
    idealFor: 'Direct-to-consumer brands, retail distributors, and marketplace platforms',
    highlights: ['Catalog & inventory', 'Multi-gateway checkout', 'Order administration', 'Discount management'],
    icon: 'ShoppingBag'
  },
  {
    title: 'Business Management Systems',
    description: 'Custom software to manage business operations.',
    idealFor: 'Internal operations, warehouse logistics, CRM/ERP workflows, and team task tracking',
    highlights: ['Custom dashboards', 'Permission tiers', 'Exportable reports', 'Operational visibility'],
    icon: 'Briefcase'
  },
  {
    title: 'API & Cloud Solutions',
    description: 'Secure backend systems and cloud infrastructure.',
    idealFor: 'High-traffic backends, mobile app APIs, database syncing, and multi-tenant architectures',
    highlights: ['High throughput', 'Automated deployments', 'Data redundancy', 'Robust security'],
    icon: 'Server'
  }
];

export const WHY_CHOOSE_US_DATA = [
  {
    title: 'Custom Solutions',
    description: 'We do not force generic templates. Every solution is custom-engineered around your exact operational needs and strategic objectives.',
    icon: 'Settings'
  },
  {
    title: 'Modern Technology',
    description: 'We build with modern, battle-tested technologies that ensure speed, longevity, high performance, and an active developer ecosystem.',
    icon: 'Sparkles'
  },
  {
    title: 'Scalable Architecture',
    description: 'Our software architectures are designed from day one to scale gracefully as your user base, transactions, and features expand.',
    icon: 'TrendingUp'
  },
  {
    title: 'Responsive Design',
    description: 'Pixel-perfect responsiveness across mobile phones, tablets, laptops, and ultra-wide desktop monitors without layout breakage.',
    icon: 'Maximize'
  },
  {
    title: 'Clean & Maintainable Code',
    description: 'Strict coding conventions, type safety, modular structures, and comprehensive documentation make future enhancements smooth.',
    icon: 'Code'
  },
  {
    title: 'Long-Term Support',
    description: 'We partner with you beyond launch day. From routine updates and security patches to infrastructure monitoring and feature additions.',
    icon: 'ShieldCheck'
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the business, requirements and goals.',
    activities: [
      'Comprehensive requirement gathering',
      'Stakeholder alignment & user persona definition',
      'Scope definition and project roadmap establishment'
    ],
    deliverables: 'Project Discovery Document & Feature Matrix'
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Define features, technology stack and project architecture.',
    activities: [
      'Selection of optimal frontend, backend & database technologies',
      'Database entity relationship design & API contract planning',
      'Sprint milestone allocation & timeline estimation'
    ],
    deliverables: 'Technical Architecture Specification & Sprint Plan'
  },
  {
    number: '03',
    title: 'Design',
    description: 'Create the UI/UX and user experience.',
    activities: [
      'Information architecture & structural wireframes',
      'High-fidelity interactive UI screens and design tokens',
      'User journey validation and client feedback iterations'
    ],
    deliverables: 'Approved UI/UX Prototype & Component Design System'
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Build the frontend, backend, APIs and database.',
    activities: [
      'Modular frontend component implementation',
      'Secure backend API endpoints and business logic',
      'Database migrations, indexing, and third-party integrations'
    ],
    deliverables: 'Functional Codebase & Staging Environment Deployment'
  },
  {
    number: '05',
    title: 'Test',
    description: 'Test performance, security, responsiveness and functionality.',
    activities: [
      'Cross-browser and multi-device responsiveness testing',
      'API endpoint stress testing, latency checks & edge-case audits',
      'Security review (input sanitization, auth validation)'
    ],
    deliverables: 'Quality Assurance Sign-Off & Performance Report'
  },
  {
    number: '06',
    title: 'Launch',
    description: 'Deploy the application and provide ongoing support.',
    activities: [
      'Cloud environment provisioning, SSL configuration & domain mapping',
      'Production deployment and database cutover',
      'Knowledge transfer, documentation handover & ongoing technical support'
    ],
    deliverables: 'Live Production System & Operational Handover Guide'
  }
];

export const TECHNOLOGIES_DATA = {
  frontend: [
    { name: 'React', desc: 'Component-driven interactive web applications', level: 'Primary' },
    { name: 'Next.js', desc: 'Server-side rendering, static generation & SEO', level: 'Primary' },
    { name: 'HTML5', desc: 'Semantic, accessible, standards-compliant markup', level: 'Core' },
    { name: 'CSS3', desc: 'Modern animations, grid layouts & flexbox', level: 'Core' },
    { name: 'JavaScript', desc: 'Modern ESNext syntax & async workflows', level: 'Core' },
    { name: 'Tailwind CSS', desc: 'Utility-first rapid, scalable UI styling', level: 'Primary' },
  ],
  backend: [
    { name: 'Python', desc: 'High-level, readable, enterprise-grade language', level: 'Primary' },
    { name: 'Django', desc: 'Batteries-included secure web framework', level: 'Primary' },
    { name: 'Django REST Framework', desc: 'Robust RESTful API design & serialization', level: 'Primary' },
    { name: 'FastAPI', desc: 'Ultra-fast asynchronous Python APIs with type validation', level: 'Primary' },
    { name: 'Flask', desc: 'Lightweight micro-framework for microservices', level: 'Specialized' },
    { name: 'Node.js', desc: 'Event-driven, high-concurrency runtime', level: 'Primary' },
  ],
  database: [
    { name: 'PostgreSQL', desc: 'Enterprise relational database with ACID compliance', level: 'Primary' },
    { name: 'MySQL', desc: 'Reliable, widely deployed relational database', level: 'Core' },
    { name: 'MongoDB', desc: 'Flexible document-based NoSQL storage', level: 'Specialized' },
    { name: 'Supabase', desc: 'Modern PostgreSQL backend with real-time sync', level: 'Modern' },
  ],
  cloud: [
    { name: 'AWS', desc: 'Scalable cloud infrastructure (EC2, S3, RDS, CloudFront)', level: 'Primary' },
    { name: 'Firebase', desc: 'Rapid auth, real-time database & hosting', level: 'Primary' },
    { name: 'Docker', desc: 'Containerization for consistent deployment environments', level: 'Core' },
    { name: 'Git', desc: 'Distributed version control and branching discipline', level: 'Core' },
    { name: 'GitHub', desc: 'Code collaboration, review workflows & CI/CD Actions', level: 'Core' },
  ]
};

export const PROJECTS_DATA: ProjectItem[] = []

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'startups',
    name: 'Startups',
    description: 'Rapid MVP development, product-market fit validation, and scalable software architectures built for growth.',
    icon: 'Rocket',
    exampleSolutions: ['MVP Web Apps', 'SaaS Backends', 'Mobile Prototypes']
  },
  {
    id: 'small-businesses',
    name: 'Small Businesses',
    description: 'Professional websites and customer-facing tools that build credibility and automate day-to-day operations.',
    icon: 'Store',
    exampleSolutions: ['Corporate Sites', 'Booking Systems', 'Client Portals']
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    description: 'Custom storefronts, product catalogs, shopping cart flows, and multi-gateway payment processing backends.',
    icon: 'ShoppingBag',
    exampleSolutions: ['Online Stores', 'Checkout Portals', 'Inventory Panels']
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Learning platforms, course catalogs, student portals, and automated assessment submission systems.',
    icon: 'GraduationCap',
    exampleSolutions: ['Learning Portals', 'Quiz Systems', 'Enrollment Portals']
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Secure appointment booking, clinic websites, patient enquiry workflows, and HIPAA-compliant data design.',
    icon: 'Activity',
    exampleSolutions: ['Clinic Websites', 'Telehealth Schedulers', 'Patient Forms']
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'High-security financial calculators, customer dashboards, transaction tracking, and automated reporting.',
    icon: 'CreditCard',
    exampleSolutions: ['Accounting Tools', 'Billing Dashboards', 'Payment Integrations']
  },
  {
    id: 'local-businesses',
    name: 'Local Businesses',
    description: 'High-visibility local search optimized websites, service menus, map directions, and customer lead forms.',
    icon: 'MapPin',
    exampleSolutions: ['Local Lead Sites', 'Service Booking', 'Review Aggregators']
  },
  {
    id: 'service-businesses',
    name: 'Service Businesses',
    description: 'Job dispatching, field service scheduling, quotation calculators, and automated client notifications.',
    icon: 'Wrench',
    exampleSolutions: ['Field Work Apps', 'Quote Estimators', 'Status Trackers']
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    description: 'Law firms, accounting practices, and consultancies needing secure document portals and brand authority.',
    icon: 'Briefcase',
    exampleSolutions: ['Client Document Portals', 'Consultant Profiles', 'Inquiry Routing']
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'How much does a website cost?',
    answer: 'Pricing depends on the design complexity, required functionality, integrations (e.g. payment gateways, custom databases), and total scope. We provide clear, transparent quotes with milestone-based pricing after understanding your project requirements.'
  },
  {
    question: 'How long does development take?',
    answer: 'Project duration depends on scope and complexity. A standard business website typically takes 2 to 4 weeks, while custom web applications or mobile apps usually require 10 to 15 weeks from initial discovery through deployment.'
  },
  {
    question: 'Can you build custom software for my business?',
    answer: 'Yes. CodeHiveSolution specializes in building custom web applications, APIs, administrative dashboards, ERP modules, and business management systems tailored strictly to your operational workflows.'
  },
  {
    question: 'Do you provide deployment?',
    answer: 'Yes. Deployment, cloud hosting configuration (AWS, Firebase, Docker, DigitalOcean), domain mapping, SSL certificate installation, and production monitoring can all be included as part of your project delivery.'
  },
  {
    question: 'Can you maintain an existing application?',
    answer: 'Yes. We frequently take on existing codebases to refactor legacy code, upgrade dependencies, fix bugs, optimize slow queries, add modern features, and modernize deployment pipelines.'
  },
  {
    question: 'Who owns the intellectual property and code?',
    answer: 'You own 100% of the custom source code, assets, and database architecture once the project is delivered and settled. We hand over the complete repository with documentation.'
  },
  {
    question: 'How do we get started?',
    answer: 'Simply submit a project inquiry or request a free quote through our contact form. We will review your goals, schedule an introductory discovery conversation, and prepare a detailed proposal and technical roadmap.'
  }
];
