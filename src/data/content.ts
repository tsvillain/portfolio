export const personalInfo = {
  name: "Tekeshwar Singh",
  role: "Senior Software Engineer",
  headshot: "/headshot.webp",
  headline: "Senior Software Engineer — Web / Mobile / Backend / Cloud",
  location: "India",
  timezone: "IST (UTC+5:30)",
  email: "tekeshwarsingh2000@gmail.com",
  social: {
    github: "https://github.com/tsvillain",
    linkedin: "https://linkedin.com/in/tsvillain",
    twitter: "https://x.com/tsvillain",
  },
  about:
    "Senior Software Engineer with 5+ years building full-stack applications. Specialized in Web, mobile, and backends.",
};

export const skills = {
  languages: ["TypeScript", "JavaScript", "Dart", "SQL"],
  frontend: [
    "React",
    "Next.js",
    "Flutter",
    "Riverpod",
    "BLoC Pattern",
    "Responsive Design",
    "Offline Capabilities",
  ],
  backend: ["Node.js", "Express.js 5", "REST APIs", "Serverless Functions"],
  databases: [
    "PostgreSQL",
    "MongoDB",
    "Prisma ORM",
    "Mongoose",
    "SQLite",
    "BigQuery",
  ],
  cloud: [
    "AWS (Lambda, SQS FIFO, S3, ECS)",
    "Google Cloud Platform",
    "Firebase",
    "Docker",
    "PM2",
    "CI/CD",
  ],
  ai_ml: [
    "Gemini",
    "Vertex AI",
    "ElevenLabs",
    "Vector Embeddings",
    "Semantic Search",
    "AI Agents",
  ],
  payment_apis: [
    "Stripe API (v18.3.0)",
    "Stripe Connect",
    "Webhook Processing",
    "RevenueCat",
    "Apple Pay",
    "Google Pay",
  ],
  architecture: [
    "Event-driven Architecture",
    "Microservices",
    "Multi-tenant SaaS",
    "Serverless Architecture",
    "Clean Architecture",
  ],
  tools: [
    "Zod",
    "Winston",
    "Multer",
    "JWT",
    "JWKS-RSA",
    "Git",
    "GitHub Actions",
  ],
};

export const experiences = [
  {
    company: "xFarm Technologies",
    role: "Senior Software Engineer",
    location: "Italy (Remote)",
    period: "April 2026 – Present",
    url: "https://www.xfarm.ag/en",
    description:
      "Mobile team engineer at xFarm, a comprehensive farm management platform serving 600,000+ farms across 14M+ hectares. Building cross-platform Flutter apps for field management, machinery tracking, and sensor integration.",
    achievements: [],
    techStack: [
      "Flutter",
      "Dart",
      "MobX",
      "Explicit Architecture",
      "Melos",
      "Spotify Model",
    ],
  },
  {
    company: "Breakthrough",
    role: "Senior Software Engineer",
    location: "New York, NY (Remote)",
    period: "July 2023 – April 2026",
    url: "https://breakthroughapps.io/",
    description:
      "Owned the backend platform powering a white-label wellness app used by 130+ partner creators and 60+ web paywall deployments across Firebase, AWS, and GCP.",
    achievements: [
      "Built the AI media indexing and semantic search integration powering in-app content discovery — Firestore-triggered indexing pipeline, BigQuery deduplication, and a Gemini-reranked vector search endpoint serving the mobile apps in real time.",
      "Built a multi-tenant Stripe billing backend on AWS ECS (Express, TypeScript, Prisma, Postgres) with webhook processing offloaded to Lambda via SQS FIFO, supporting subscriptions, lifetime purchases, and gifting across multiple Stripe Connected Accounts.",
      "Shipped an AI Smart Search pipeline on EC2 — transcription via ElevenLabs, vector embeddings via Vertex AI, and per-partner system instructions generated through a multi-step Gemini pipeline.",
      "Built a Next.js Stripe Web Paywall serving 60+ partner brands from one codebase, integrating Stripe Elements, Apple Pay, Google Pay, and RevenueCat.",
      "Built internal tooling (Firebase automation CLI, bulk media uploader) that turned hours of manual partner-onboarding work into single commands.",
    ],
    techStack: [
      "Flutter",
      "Node.js",
      "Express.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "GCP",
      "AWS",
      "Firebase",
      "Stripe API",
      "Docker",
    ],
  },
  {
    company: "PixelApps",
    role: "Senior Flutter Developer",
    location: "Ahmedabad, IN (Hybrid)",
    period: "May 2021 – July 2023",
    url: "https://pixelapps.io/",
    description:
      "Led mobile development initiatives and established engineering best practices across frontend and backend systems.",
    achievements: [
      "Owned development of initial MVP and core API for WellTested.ai, a flagship product that pivoted the company towards a product-based business model",
      "Co-designed and implemented Clean Architecture standards using Flutter and Riverpod, resulting in 60% reduction in production bug reports",
      "Established rapid prototyping framework that accelerated development lifecycle by 75%, reducing time-to-market from 4 weeks to 1 week",
      "Mentored junior developers on best practices for mobile development, code quality, and state management",
    ],
    techStack: ["Flutter", "Riverpod", "Clean Architecture"],
  },
  {
    company: "Pingolearn",
    role: "Expert Flutter Developer (Part-Time Contract)",
    location: "Pune, IN (Remote)",
    period: "Feb 2022 – Aug 2022",
    url: "https://www.lingopanda.app/",
    description:
      "Developed core features for an AI-powered language application serving 700,000+ users.",
    achievements: [
      "Developed and launched core in-app subscription module, integrating RevenueCat for cross-platform payment processing",
      "Implemented primary grammar detection engine from the ground up, leveraging OpenAI’s LLM to provide real-time, accurate speech analysis and feedback",
    ],
    techStack: ["Flutter", "RevenueCat", "OpenAI API"],
  },
];

export const projects = [
  {
    title: "AI Media Indexing & Semantic Search",
    type: "Professional",
    description:
      "Firestore-triggered indexing pipeline, BigQuery deduplication, and Gemini-reranked vector search endpoint powering in-app content discovery for 130+ partner creators.",
    impact: "Real-time content discovery across mobile apps.",
    techStack: [
      "Firebase",
      "BigQuery",
      "Gemini",
      "Vector Embeddings",
      "Semantic Search",
      "Serverless Functions",
    ],
    link: null,
  },
  {
    title: "AI Smart Search Pipeline",
    type: "Professional",
    description:
      "EC2-based pipeline with ElevenLabs transcription, Vertex AI vector embeddings, and per-partner system instructions generated through multi-step Gemini pipeline.",
    impact: "AI-powered semantic search across partner content.",
    techStack: [
      "EC2",
      "ElevenLabs",
      "Vertex AI",
      "Gemini",
      "Node.js",
      "TypeScript",
    ],
    link: null,
  },
  {
    title: "Multi-Tenant Stripe Billing Backend",
    type: "Professional",
    description:
      "AWS ECS-hosted billing backend with webhook processing via SQS FIFO. Supports subscriptions, lifetime purchases, and gifting across multiple Stripe Connected Accounts.",
    impact: "Processes payments for 60+ web paywall deployments.",
    techStack: [
      "AWS ECS",
      "Express.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "AWS SQS FIFO",
      "Stripe Connect",
    ],
    link: null,
  },
  {
    title: "Stripe Web Paywall",
    type: "Professional",
    description:
      "Next.js Stripe Web Paywall serving 60+ partner brands from one codebase with Stripe Elements, Apple Pay, Google Pay, and RevenueCat integration.",
    impact: "Single codebase serving 60+ partner brands.",
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Stripe Elements",
      "Apple Pay",
      "Google Pay",
      "RevenueCat",
    ],
    link: null,
  },
  {
    title: "Subscription & Gifting Paywall System",
    type: "Professional",
    description:
      "Full-stack subscription and gifting paywall system with Next.js frontend and Node.js backend. Features strategic A/B testing, cross-platform compatibility, and optimized user experience.",
    impact: "Increased revenue by 30%, tripled user conversion rates.",
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "Stripe API",
    ],
    link: null,
  },
  {
    title: "Serverless Data Synchronization System",
    type: "Professional",
    description:
      "Full-stack serverless, event-driven system on GCP to synchronize payment, subscription, and user data across multiple third-party platforms in real-time.",
    impact:
      "Ensured data consistency across all integrated services, improved system reliability.",
    techStack: [
      "Google Cloud Platform",
      "Serverless Functions",
      "Event-driven Architecture",
      "Node.js",
      "Real-time Sync",
    ],
    link: null,
  },
  {
    title: "Offline-First Mobile Architecture",
    type: "Professional",
    description:
      "Led transition to offline-first mobile architecture with Flutter frontend and backend synchronization.",
    impact:
      "Enhanced user experience in low-connectivity environments, full offline functionality.",
    techStack: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Local Storage",
      "Offline Capabilities",
      "Backend APIs",
    ],
    link: null,
  },
  {
    title: "Bulk Media Uploader System",
    type: "Professional",
    description:
      "High-throughput bulk media uploader with web interface and backend processing.",
    impact:
      "Reduced partner data migration time from weeks to hours, improved enterprise client onboarding.",
    techStack: [
      "Node.js",
      "AWS S3",
      "Express.js",
      "Batch Processing",
      "High-throughput Systems",
    ],
    link: null,
  },
  {
    title: "CLI Tool for White-Label Configuration",
    type: "Professional",
    description:
      "Command-line interface tool for automated white-label product configuration.",
    impact:
      "Reduced setup time from 4 days to 2 hours, 95% productivity increase.",
    techStack: [
      "Node.js",
      "CLI Development",
      "Automation",
      "Configuration Management",
    ],
    link: null,
  },
  {
    title: "pglens",
    type: "Personal",
    description:
      "A simple, powerful PostgreSQL database viewer. Manage connections, explore data, and visualize schemas with ease. Runs as a cross-platform daemon with JSON formatting, multiple tabs, and Spotlight navigation.",
    impact: "Open-source CLI tool for PostgreSQL management",
    techStack: ["TypeScript", "Node.js", "PostgreSQL", "CLI"],
    link: "https://www.pglens.org/",
  },
  {
    title: "Wallbay - Wallpaper App",
    type: "Personal",
    description:
      "Flutter-based wallpaper application with 114+ stars on GitHub, available on Google Play Store. Features wallpaper browsing, download & set, offline access, and modern UI/UX.",
    impact: "114+ GitHub stars.",
    techStack: [
      "Flutter",
      "Dart",
      "BLoC Pattern",
      "Pexels API",
      "Local Storage",
    ],
    link: "https://github.com/tsvillain/Wallbay",
  },
  {
    title: "MinifyURL - URL Shortener API",
    type: "Personal",
    description:
      "Fast backend service for URL shortening with custom hashing algorithm using farmhash. Features URL shortening, expiration dates, visit tracking, and creator-based organization.",
    impact: null,
    techStack: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "REST API",
    ],
    link: "https://github.com/tsvillain/minifyurl",
  },
];

export const education = [
  {
    degree: "B.E. in Computer Science",
    school: "Parul University, Gujarat, IN",
    period: "2019 – 2022",
    details: "Recipient of SOIC Hackathon 2020 project grant",
  },
  {
    degree: "High School Diploma in Computer Science",
    school: "Gujarat Technical University, Gujarat, IN",
    period: "2016 – 2019",
    details: "1st Runner-up in Prakalp Festival for final year project",
  },
];

export const testimonials = [
  {
    text: "Tekeshwar is one of the smartest engineers I have worked with who is passionate about building, always up for new challenges and doesn't refrain from extending a hand to help others. He has been an invaluable part of our team for more than 2 years and has managed projects across Flutter, NodeJS, Web3, AI and more. He is an executor who gets things done and can be trusted when the stakes are high.",
    author: "Samyak Jain",
    role: "Founder & CEO - PixelApps",
    type: "Professional",
  },
  {
    text: "Tekeshwar amazed me by his skills in flutter and firebase. He is the most curious person in the team and always comes with the best solution for the problem. He indulges in brainstorming and apart from given task he always has his bag of new features filled. Being a team player he worked well within the team. I would love to have him onboarding my team.",
    author: "Piety Innovation Labs Pvt Ltd",
    role: "Founder",
    type: "Professional",
  },
  {
    text: "I had the pleasure of working with Tekeshwar on a project that required the development of a mobile application using Flutter. Tekeshwar was an absolute pleasure to work with. He was knowledgeable, professional, and always willing to go the extra mile to ensure the project was completed on time and to the highest standard. Tekeshwar is an incredibly talented Flutter developer. He has a deep understanding of the technology and is able to quickly develop high-quality applications.",
    author: "Mohit Menghani",
    role: "Co-Founder - Lingopanda (formerly PingoLearn)",
    type: "Client",
  },
  {
    text: "Tekeshwar is an excellent resource and a master at App Development, has been a real gem. He makes sure all the deadlines meet and that also with the highest standards. He is a hardworking and dedicated person who will complete your project in a given time frame.",
    author: "Sabil Bakhar",
    role: "Founder - Knight Bite",
    type: "Client",
  },
];
