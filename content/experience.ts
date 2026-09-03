export type ExperienceRole = {
  title: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const experience: ExperienceRole[] = [
  {
    title: "Independent Full-Stack Software Engineer",
    company: "Self-employed · Fiverr (Level 2 Seller)",
    period: "May 2020 – Present",
    bullets: [
      "Delivered 100+ client projects across SaaS, APIs, and mobile apps for US, UK, and EU clients via Fiverr.",
      "Built production REST APIs with Node.js, Express.js, PostgreSQL, MongoDB, and Prisma — JWT authentication, RBAC, and multi-step business workflows for client SaaS products.",
      "Standardized deployments with Docker across multiple client projects, eliminating recurring environment mismatch issues reported during handoffs.",
      "Implemented high-volume data exports with Node.js streams on Absolute Market Research, avoiding memory spikes during large report generation.",
      "Owned full delivery cycles independently: requirements, architecture, implementation, deployment, and post-launch support in async remote settings.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company: "Tortoiz Themes (part-time, concurrent)",
    period: "January 2021 – December 2021",
    bullets: [
      "Built commercial React templates for ThemeForest with reusable components and cross-browser compatibility.",
      "Improved render performance on low-end devices, supporting sustained sales and positive customer ratings.",
    ],
  },
];

export const education = {
  school: "SK National University",
  period: "2023 – Present (expected 2027)",
  degree: "Bachelor of Arts — Political Science",
} as const;

export const languages = [
  { name: "English", level: "Professional working proficiency" },
  { name: "Bangla", level: "Native" },
] as const;
