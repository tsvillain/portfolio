export const personalInfo = {
  name: "Tekeshwar Singh",
  role: "Senior Software Engineer",
  headshot: "/headshot.webp",
  tagline: "senior software engineer · india · UTC+5:30",
  location: "India",
  timezone: "IST (UTC+5:30)",
  email: "tekeshwarsingh2000@gmail.com",
  social: {
    github: "https://github.com/tsvillain",
    linkedin: "https://www.linkedin.com/in/tsvillain/",
    twitter: "https://x.com/tsvillain",
    medium: "https://tsvillain.medium.com/",
    newsletter: "https://www.firsttoken.dev/",
  },
};

export const experiences = [
  {
    company: "xFarm Technologies",
    role: "Senior Software Engineer",
    period: "2026 – now",
    url: "https://www.xfarm.ag/en",
    description:
      "Mobile team on a farm management platform serving 600,000+ farms across 14M+ hectares. Cross-platform Flutter apps for field management, machinery tracking, and sensor integration.",
    achievements: [],
  },
  {
    company: "Breakthrough",
    role: "Senior Software Engineer",
    period: "2023 – 2026",
    url: "https://breakthroughapps.io/",
    description:
      "Owned the backend platform behind a white-label wellness app: 130+ partner creators, 60+ web paywall deployments across Firebase, AWS, and GCP.",
    achievements: [
      "AI semantic search: Firestore-triggered indexing, BigQuery dedup, Gemini-reranked vector search serving the apps in real time.",
      "Multi-tenant Stripe billing backend on AWS ECS with webhooks offloaded to Lambda via SQS FIFO; subscriptions, lifetime purchases, and gifting across Connected Accounts.",
      "Next.js Stripe web paywall serving 60+ partner brands from one codebase (Stripe Elements, Apple Pay, Google Pay, RevenueCat).",
    ],
  },
  {
    company: "PixelApps",
    role: "Senior Flutter Developer",
    period: "2021 – 2023",
    url: "https://pixelapps.io/",
    description:
      "Led mobile development and set engineering standards across frontend and backend.",
    achievements: [
      "Built the MVP and core API for WellTested.ai, the product that pivoted the company to a product business.",
      "Co-designed Clean Architecture standards (Flutter + Riverpod) that cut production bug reports by 60%.",
    ],
  },
  {
    company: "Pingolearn",
    role: "Expert Flutter Developer (contract)",
    period: "2022",
    url: "https://www.lingopanda.app/",
    description:
      "AI language-learning app with 700,000+ users. Shipped the in-app subscription module (RevenueCat) and built the grammar detection engine on OpenAI's LLM for real-time speech feedback.",
    achievements: [],
  },
];

export const projects = [
  {
    title: "pglens",
    description:
      "A simple, powerful PostgreSQL viewer: cross-platform daemon with schema visualization, multiple tabs, and Spotlight-style navigation.",
    link: "https://www.pglens.org/",
  },
  {
    title: "Wallbay",
    description:
      "Flutter wallpaper app with 114+ stars on GitHub and a Play Store release.",
    link: "https://github.com/tsvillain/Wallbay",
  },
  {
    title: "MinifyURL",
    description:
      "URL shortener API with custom farmhash-based hashing, expiration, and visit tracking.",
    link: "https://github.com/tsvillain/minifyurl",
  },
];

export const education =
  "B.E. Computer Science, Parul University, 2019 – 2022";

export const testimonials = [
  {
    text: "One of the smartest engineers I have worked with, an executor who gets things done and can be trusted when the stakes are high.",
    author: "Samyak Jain",
    role: "Founder & CEO, PixelApps",
  },
  {
    text: "An incredibly talented Flutter developer with a deep understanding of the technology, professional, and always willing to go the extra mile.",
    author: "Mohit Menghani",
    role: "Co-Founder, Lingopanda (formerly PingoLearn)",
  },
];
