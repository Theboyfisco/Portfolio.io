export const personal = {
  name: { first: "ODIGILI", last: "IFEANYICHUKWU" },
  title: "Full-Stack Developer | Product Builder",
  location: "Port Harcourt / Asaba, Nigeria",
  email: "ifeanyodigili@gmail.com",
  phone: "+234 812 244 0348",
  github: "Theboyfisco",
  githubUrl: "https://github.com/Theboyfisco",
  linkedin: "https://www.linkedin.com/in/ifeanyi-odigili/",
  xUrl: "https://x.com/theboyfisco",
  status: "Open to Junior or Senior Roles",
  headline: "Full-stack developer building and launching production-grade web apps independently.",
  proofPoint: "Shipped 4 real-world products, handling end-to-end delivery from architecture to deployment.",
  tagline: "Engineering Production-Grade Systems.",
  subtag: "Next.js · Supabase · AI Integrations · Complex Data Pipelines.",
  calendly: "https://calendly.com/ifeanyodigili/30min",
};

export const about = `Full-stack developer and CS graduate (2:1, Benson Idahosa University) based in Nigeria who ships real products independently.\n\nI build end-to-end full-stack systems — from NaijaPriceCompare, a live price aggregator with custom data pipelines, to Academia Connect, an enterprise school management system.\n\nComfortable across the entire delivery chain: architecture, backend, UI, payments, DevOps, and production infrastructure. Currently seeking engineering roles where I can contribute to scalable, user-focused products.`;

export const metrics = [
  { label: "PROJECTS SHIPPED", value: "4", accent: "green" as const, span: 2 },
  { label: "STUDENTS TRAINED", value: "15+", accent: "amber" as const, span: 1 },
  { label: "RECORDS MANAGED", value: "500+", accent: "blue" as const, span: 1 },
  { label: "UPTIME", value: "100%", accent: "green" as const, span: 1 },
  { label: "GRADUATION", value: "2:1", accent: "muted" as const, span: 1 },
  { label: "YEARS BUILDING", value: "3+", accent: "amber" as const, span: 2 },
];

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  period: string;
  live: string;
  repo: string;
  stack: string[];
  problem: string;
  constraints: string;
  solution: string;
  role: string;
  impact: string;
  keyTradeoffs: string;
  improvements: string;
  screenshot: string;
  demoGif: string;
  hasRoleSwitcher?: boolean;
  roles?: { name: string; permissions: string[]; accent: string }[];
}

export const projects: Project[] = [
  {
    id: "naijapricecompare",
    name: "NAIJAPRICECOMPARE",
    subtitle: "Smartphone Price Aggregator",
    period: "2025–Present",
    live: "https://price-ashy.vercel.app",
    repo: "https://github.com/Theboyfisco/naijaprice",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "pgvector", "Gemini API", "Playwright", "BullMQ", "Redis Cloud", "Paystack", "Vercel"],
    problem: "Nigerian smartphone buyers struggle to find the best prices across fragmented marketplaces like Jumia, Konga, and Jiji.",
    constraints: "Need to handle massive data volume (2,000+ listings), bypass bot detection, and match noisy titles accurately without burning expensive AI quotas.",
    solution: "A live cross-marketplace price comparison platform with a custom scraping pipeline, vector embeddings for semantic matching, and a robust job queue.",
    role: "Solo builder — idea, architecture, data pipeline, UI, payments, and admin tooling.",
    impact: "Scraped and normalized 2,000+ listings, mapped to a clean 259-product catalog using hybrid lexical and vector semantic similarity.",
    keyTradeoffs: "Split deployment between Vercel (web) and an external persistent worker to bypass serverless execution lifecycle limits during heavy scraping jobs.",
    improvements: "Implement real-time price drop notifications via email and expand category coverage beyond smartphones.",
    screenshot: "/projects/naijacompare-screenshot.png",
    demoGif: "/projects/naijacompare-demo.png",
  },
  {
    id: "nexus",
    name: "NEXUS TERMINAL",
    subtitle: "AI Crypto Intelligence Platform",
    period: "2024–Present",
    live: "https://build-brings-smiles.vercel.app",
    repo: "https://github.com/Theboyfisco/NextTerm",
    stack: ["React 18", "TypeScript", "Vite", "TanStack Query", "Tailwind CSS", "shadcn/ui", "Supabase", "Gemini API", "Wagmi v3", "Viem"],
    problem: "Crypto data is fragmented and hard to interpret without financial expertise.",
    constraints: "Needed real-time updates with free-tier APIs and a clean interface for non-trader users.",
    solution: "A professional-grade crypto terminal with live tickers, Web3 wallet tracking, and an integrated AI Copilot for market analysis.",
    role: "Solo developer — architecture, design, AI integration, deployment.",
    impact: "Bridged CEX portfolio data with live on-chain monitoring (BTC/ETH) in a single interface.",
    keyTradeoffs: "Used TanStack Query stale-while-revalidate to cache responses and solve free-tier CoinGecko rate limits (30 req/min).",
    improvements: "Add personalized alerts, chart annotations, and expand on-chain wallet tracking networks.",
    screenshot: "/projects/nexus-screenshot.png",
    demoGif: "/projects/nexus-demo.png",
  },
  {
    id: "academia-connect",
    name: "ACADEMIA CONNECT",
    subtitle: "Enterprise School Management System",
    period: "2024–2025",
    live: "https://school-management-system-green-six.vercel.app",
    repo: "https://github.com/Theboyfisco/School-Management-System",
    stack: ["Next.js 16", "TypeScript", "Prisma ORM", "Supabase", "PostgreSQL", "Tailwind CSS", "Cloudinary"],
    problem: "Manual school administration is slow, error-prone, and doesn't scale.",
    constraints: "Single-developer timeline and strict role-based access across Admin, Teacher, Student, and Parent users.",
    solution: "A multi-role school platform with a conflict-aware lesson scheduler and full exam/assignment pipelines.",
    role: "Solo developer — database schema design, auth system, all four role dashboards.",
    impact: "Centralized 500+ student records with robust RBAC, financial invoicing, and live sync via Supabase Realtime.",
    keyTradeoffs: "Prioritized robust CRUD and authorization over advanced analytics to keep delivery focused and stable.",
    improvements: "Add attendance analytics, parent notifications, and test coverage for auth edge cases.",
    screenshot: "/projects/school-screenshot.png",
    demoGif: "/projects/school-demo.png",
    hasRoleSwitcher: true,
    roles: [
      { name: "ADMIN", permissions: ["Read all records", "Create users", "Update records", "Delete records", "Manage roles"], accent: "amber" },
      { name: "TEACHER", permissions: ["Read own class data", "Update grades", "View student profiles", "Create assignments"], accent: "blue" },
      { name: "STUDENT", permissions: ["Read own profile", "View grades", "View assignments", "Read-only access"], accent: "green" },
      { name: "PARENT", permissions: ["Read child profile", "View child grades", "Contact teachers", "Read-only access"], accent: "amber" },
    ],
  },
  {
    id: "noxtech",
    name: "NOXTECH",
    subtitle: "Premium Nigerian Gadget Storefront",
    period: "2025",
    live: "https://fisco-gadgets.vercel.app",
    repo: "https://github.com/Theboyfisco/Fisco-Gadgets",
    stack: ["Next.js 16", "React 19", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS v4", "Paystack", "Playwright"],
    problem: "Needed a performant e-commerce solution handling complex inventory and payment webhooks reliably.",
    constraints: "Required handling of delayed webhook deliveries without causing race conditions or overselling limited stock.",
    solution: "A full e-commerce storefront featuring inventory reservation, a dynamic promo engine, and an idempotent webhook pipeline.",
    role: "Solo developer.",
    impact: "Built a backend-to-backend Paystack webhook pipeline with idempotent order status updates preventing race conditions.",
    keyTradeoffs: "Used a single Prisma enum-typed table for all customer lists (cart, wishlist) instead of separate tables to simplify schema.",
    improvements: "Add more payment gateways and advanced search filtering.",
    screenshot: "/projects/fisco-screenshot.png",
    demoGif: "/projects/fisco-demo.png",
  },
];

export const experienceHighlights = [
  "Built and launched NaijaPriceCompare with custom scraping pipelines and semantic search.",
  "Shipped 4 production-grade full-stack applications covering enterprise admin, Web3, and e-commerce.",
  "Designed and managed a 500+ record school data model with role-based access control.",
];

export const testimonial = {
  quote:
    "Ifeanyi consistently translates real operational problems into stable software quickly. His ownership and communication stand out.",
  author: "Supervisor, Coriftech Hub",
};

export const experience = [
  {
    title: "TECHNICAL INTERN (SIWES)",
    org: "Coriftech Hub",
    location: "Asaba, Nigeria",
    period: "Jan 2024 – Jun 2024",
    bullets: [
      "Frontend implementation and technical documentation on real-world software client projects",
      "Trained 15+ students in HTML, CSS, and JavaScript fundamentals",
      "IT support: workstation setup, networking, and hardware diagnostics",
    ],
  },
];

export const education = [
  {
    degree: "B.SC. COMPUTER SCIENCE",
    school: "Benson Idahosa University",
    location: "Benin City",
    period: "2021–2025",
    grade: "Second Class Upper Division (2:1)",
    core: "Algorithms, Databases, Software Engineering",
  },
];

export const skills = {
  "Languages & Frameworks": ["TypeScript", "JavaScript (ES6+)", "React 18/19", "Next.js 15/16", "Vite", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
  "Backend & Database": ["Supabase", "PostgreSQL", "Prisma ORM", "pgvector", "BullMQ", "Redis", "Edge Functions", "Zod"],
  "Data & Automation": ["Playwright", "ScraperAPI", "Pipeline Design", "Semantic Search", "Vector Embeddings"],
  "AI Integration": ["Google Gemini API", "TanStack Query v5", "pgvector similarity"],
  "Web3": ["Wagmi v3", "Viem", "Web3Modal", "On-chain Tracking"],
  "Payments & Auth": ["Paystack", "OAuth 2.0", "Supabase Auth", "JWT"],
  "DevOps & Tooling": ["Git", "GitHub Actions", "Vercel", "Redis Cloud", "Cloudinary"],
};

export const terminalCommands: Record<string, string> = {
  help: `Available commands: skills, projects, contact, education, experience, whoami, clear`,
  whoami: `Odigili Ifeanyichukwu — Full-Stack Developer | Product Builder
Location: Port Harcourt / Asaba, Nigeria
Status: Open to junior or senior roles`,
  skills: `{
  "Languages & Frameworks": ["TypeScript", "Next.js", "React", "Tailwind CSS", "Framer Motion"],
  "Backend & Database": ["Supabase", "PostgreSQL", "Prisma ORM", "pgvector", "BullMQ", "Redis"],
  "Data & AI": ["Playwright", "Gemini API", "Semantic Search", "ScraperAPI"],
  "Web3 & Payments": ["Wagmi v3", "Viem", "Paystack", "OAuth 2.0"],
  "DevOps": ["Git", "Vercel", "GitHub Actions", "Redis Cloud"]
}`,
  projects: `[1] NaijaPriceCompare — Smartphone Price Aggregator
[2] Nexus Terminal — AI Crypto Intelligence Platform
[3] Academia Connect — Enterprise School Management System
[4] NOXTECH — Premium Nigerian Gadget Storefront`,
  education: `B.Sc. Computer Science
Benson Idahosa University, Benin City
2021–2025 · Second Class Upper (2:1)`,
  experience: `Technical Intern (SIWES)
Coriftech Hub · Asaba, Nigeria
Jan 2024 – Jun 2024`,
  contact: `Email:    ifeanyodigili@gmail.com
Phone:    +234 812 244 0348
GitHub:   github.com/Theboyfisco
X:        x.com/theboyfisco
LinkedIn: linkedin.com/in/ifeanyi-odigili`,
};
