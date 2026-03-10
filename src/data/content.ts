export const personal = {
  name: { first: "ODIGILI", last: "IFEANYICHUKWU" },
  title: "Full-Stack Developer",
  location: "Port Harcourt / Asaba, Nigeria",
  email: "ifeanyodigili@gmail.com",
  phone: "+234 812 244 0348",
  github: "Theboyfisco",
  githubUrl: "https://github.com/Theboyfisco",
  linkedin: "https://www.linkedin.com/in/ifeanyi-odigili/",
  status: "Open to Junior or Senior Roles",
  headline: "Full-stack developer building production-grade web apps with Next.js + Supabase.",
  proofPoint: "Shipped 3 full-stack products, managed 500+ records, and trained 15+ students.",
  tagline: "Engineering Production-Grade Systems.",
  subtag: "Next.js · Supabase · PostgreSQL · API Integration.",
  calendly: "https://calendly.com/ifeanyodigili/30min",
};

export const about = `Computer Science graduate from Benson Idahosa University (2:1) based between Port Harcourt and Asaba, Nigeria.\n\nI build full-stack systems that solve real problems — from market analysis dashboards to administrative platforms managing 500+ student records.\n\nCurrently seeking senior engineering roles where I can contribute to scalable, user-focused products.`;

export const metrics = [
  { label: "PROJECTS SHIPPED", value: "3", accent: "green" as const, span: 2 },
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
    id: "nexus",
    name: "NEXUS",
    subtitle: "Crypto Analytics Platform",
    period: "2024–Present",
    live: "https://build-brings-smiles.vercel.app",
    repo: "https://github.com/Theboyfisco/NextTerm",
    stack: ["Next.js", "JavaScript", "Tailwind CSS", "REST APIs", "API Integration"],
    problem: "Crypto data is fragmented and hard to interpret without financial expertise.",
    constraints: "Needed real-time updates with free-tier APIs and a clean interface for non-trader users.",
    solution: "A data-driven dashboard that aggregates live market data and surfaces trend signals in plain language.",
    role: "Solo developer — architecture, design, API integration, deployment.",
    impact: "Live on Vercel with active user sessions and repeat visits from early testers.",
    keyTradeoffs: "Chose REST polling over websocket streams for reliability and easier monitoring on free infrastructure.",
    improvements: "Add personalized alerts, chart annotations, and server-side caching for faster first paint.",
    screenshot: "/projects/nexus-screenshot.png",
    demoGif: "/projects/nexus-demo.png",
  },
  {
    id: "school-mgmt",
    name: "SCHOOL MANAGEMENT SYSTEM",
    subtitle: "Multi-Role Administrative Platform",
    period: "2024",
    live: "https://school-management-system-green-six.vercel.app",
    repo: "https://github.com/Theboyfisco/School-Management-System",
    stack: ["Next.js", "Tailwind CSS", "JavaScript", "Supabase", "PostgreSQL"],
    problem: "Manual school administration is slow, error-prone, and doesn't scale.",
    constraints: "Single-developer timeline and strict role-based access across Admin, Teacher, Student, and Parent users.",
    solution: "A full-stack platform with role-based access control managing 500+ student records.",
    role: "Full-stack developer — database schema design, auth system, all four role dashboards.",
    impact: "Reduced admin overhead by centralizing records and role workflows in one deployable platform.",
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
    id: "fisco-gadgets",
    name: "FISCO GADGETS",
    subtitle: "E-Commerce Platform",
    period: "2023",
    live: "https://fisco-gadgets.vercel.app",
    repo: "https://github.com/Theboyfisco/Fisco-Gadgets",
    stack: ["Next.js", "Supabase", "Tailwind CSS"],
    problem: "Needed to prove end-to-end e-commerce delivery beyond static frontend demos.",
    constraints: "Built as a solo prototype with limited time while balancing school deliverables.",
    solution: "Product catalogue, cart logic, and Supabase backend built as a standalone prototype.",
    role: "Solo developer.",
    impact: "Delivered a working purchase journey from product listing to cart state persistence.",
    keyTradeoffs: "Focused on core commerce flows first and intentionally skipped payment integration complexity.",
    improvements: "Add checkout/payment gateway, order history, and stronger product search/filtering.",
    screenshot: "/projects/fisco-screenshot.png",
    demoGif: "/projects/fisco-demo.png",
  },
];

export const experienceHighlights = [
  "Shipped 3 production-grade full-stack applications with public demos and source code.",
  "Designed and managed a 500+ record school data model with role-based access control.",
  "Mentored 15+ students in web fundamentals during internship training sessions.",
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
      "Frontend implementation on real-world software projects",
      "Trained 15+ students in HTML, CSS, and JavaScript",
      "IT support: workstation setup, networking, hardware diagnostics",
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
  frontend: ["Next.js", "React", "JavaScript ES6+", "Tailwind CSS", "HTML5", "CSS3"],
  backend: ["Supabase", "PostgreSQL", "REST APIs", "Database Schema Design", "CRUD"],
  devops: ["Git", "GitHub", "Vercel", "VS Code"],
  methods: ["Agile", "Product Iteration", "Rapid Prototyping"],
};

export const terminalCommands: Record<string, string> = {
  help: `Available commands: skills, projects, contact, education, experience, whoami, clear`,
  whoami: `Odigili Ifeanyichukwu — Full-Stack Developer
Location: Port Harcourt / Asaba, Nigeria
Status: Open to junior or senior roles`,
  skills: `{
  "frontend": ["Next.js", "React", "JavaScript ES6+", "Tailwind CSS", "HTML5", "CSS3"],
  "backend":  ["Supabase", "PostgreSQL", "REST APIs", "Database Schema Design", "CRUD"],
  "devops":   ["Git", "GitHub", "Vercel", "VS Code"],
  "methods":  ["Agile", "Product Iteration", "Rapid Prototyping"]
}`,
  projects: `[1] Nexus — Crypto Analytics Platform → build-brings-smiles.vercel.app
[2] School Management System         → school-management-system-green-six.vercel.app
[3] Fisco Gadgets                    → fisco-gadgets.vercel.app`,
  education: `B.Sc. Computer Science
Benson Idahosa University, Benin City
2021–2025 · Second Class Upper (2:1)`,
  experience: `Technical Intern (SIWES)
Coriftech Hub · Asaba, Nigeria
Jan 2024 – Jun 2024`,
  contact: `Email:    ifeanyodigili@gmail.com
Phone:    +234 812 244 0348
GitHub:   github.com/Theboyfisco
LinkedIn: linkedin.com/in/ifeanyi-odigili`,
};
