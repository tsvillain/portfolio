export const personalInfo = {
  name: "Tekeshwar Singh",
  role: "Senior Full-Stack Engineer",
  headshot: "/headshot.webp",
  headline: "Senior Full-Stack Engineer — Web / Mobile / Backend / Cloud",
  location: "India",
  timezone: "IST (UTC+5:30)",
  email: "tekeshwarsingh2000@gmail.com",
  social: {
    github: "https://github.com/tsvillain",
    linkedin: "https://linkedin.com/in/tsvillain",
    twitter: "https://x.com/tsvillain",
  },
  about:
    "Senior Full-Stack Engineer with 5+ years of experience architecting and developing end-to-end applications across web, mobile, and backend platforms. Specialized in React/Next.js frontend development, Node.js backend systems, Flutter mobile apps, and serverless architectures on AWS and GCP. Proven track record of delivering high-impact full-stack solutions that drive business growth, including a 30% revenue increase through optimized payment systems and 75% reduction in time-to-market through automation.",
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
  databases: ["PostgreSQL", "MongoDB", "Prisma ORM", "Mongoose", "SQLite"],
  cloud: [
    "AWS (Lambda, SQS FIFO, S3)",
    "Google Cloud Platform",
    "Firebase",
    "Docker",
    "PM2",
    "CI/CD",
  ],
  payment_apis: [
    "Stripe API (v18.3.0)",
    "Stripe Connect",
    "Webhook Processing",
    "RevenueCat",
    "OpenAI API",
    "Pexels API",
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
    company: "Breakthrough",
    role: "Senior Software Engineer",
    location: "New York, NY (Remote)",
    period: "July 2023 – Present",
    url: "https://breakthroughapps.io/",
    description:
      "Leading development of high-impact, full-stack applications for mobile and web platforms, specializing in Flutter mobile development, Node.js backend systems, and serverless architectures on GCP and AWS.",
    achievements: [
      "Engineered a comprehensive subscription and gifting paywall system (Next.js frontend + Node.js backend), boosting revenue by 30% and tripling user conversion rates through strategic A/B testing",
      "Architected and developed a production-ready Stripe payment backend API for multi-tenant SaaS, handling subscriptions, one-time payments, coupons, analytics, and financial operations with Express.js 5, Prisma ORM, and PostgreSQL",
      "Implemented serverless webhook processing via AWS Lambda and SQS FIFO queues, ensuring reliable event handling with retry logic and idempotency",
      "Built comprehensive analytics system with MRR tracking, revenue analytics, churn analysis, and trial conversion metrics",
      "Architected serverless, event-driven system on GCP to synchronize payment, subscription, and user data across multiple third-party platforms in real-time",
      "Led the transition to an offline-first mobile architecture using Flutter and Riverpod, enabling full application functionality without internet connection",
      "Developed high-throughput bulk media uploader using Node.js and AWS S3, reducing partner data migration time from weeks to hours",
      "Created CLI tool to automate white-label product configuration, reducing new project setup time from 4 days to 2 hours (95% productivity increase)",
    ],
    techStack: ["Flutter", "Node.js", "GCP", "AWS", "Stripe API", "Docker"],
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
    title: "Stripe Payment Backend API",
    type: "Professional",
    description:
      "Production-ready multi-tenant SaaS payment backend with comprehensive frontend integration. Features subscription management, coupon system, payment processing, dispute management, real-time analytics, and MRR snapshots.",
    impact:
      "Processes real financial transactions, provides business intelligence, supports multiple connected accounts, production-ready deployment.",
    techStack: [
      "TypeScript",
      "Node.js",
      "Express.js 5",
      "Prisma ORM",
      "PostgreSQL",
      "Stripe API (v18.3.0)",
      "AWS Lambda",
      "AWS SQS FIFO",
      "Docker",
      "PM2",
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
