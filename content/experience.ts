export type ExperienceRole = {
  title: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
};

export type EarlierRole = {
  title: string;
  company: string;
  period: string;
  summary: string;
};

export const primaryExperience: ExperienceRole = {
  title: "Independent Full-Stack Software Engineer",
  company: "Self-employed · Fiverr (Level 2 Seller)",
  period: "May 2020 – Present",
  bullets: [
    "Delivered 100+ client projects across SaaS, APIs, and mobile apps for US, UK, and EU clients via Fiverr.",
    // TODO: insert # of production APIs / SaaS products shipped here
    "Built production REST APIs with Node.js, Express.js, PostgreSQL, MongoDB, and Prisma — JWT authentication, RBAC, and multi-step business workflows for client SaaS products.",
    // TODO: insert project count / % reduction in environment mismatch issues here
    "Standardized deployments with Docker across multiple client projects, eliminating recurring environment mismatch issues reported during handoffs.",
    // TODO: insert record count / export size / memory improvement here
    "Implemented high-volume data exports with Node.js streams on Absolute Market Research, avoiding memory spikes during large report generation.",
    // TODO: insert concurrent client count / avg delivery cycle length here
    "Owned full delivery cycles independently: requirements, architecture, implementation, deployment, and post-launch support in async remote settings.",
  ],
};

export const earlierExperience: EarlierRole = {
  title: "Frontend Web Developer",
  company: "Tortoiz Themes (part-time, concurrent)",
  period: "January 2021 – December 2021",
  summary:
    "Commercial React templates for ThemeForest — reusable components and cross-browser compatibility.",
};

export const education = {
  school: "SK National University",
  period: "2023 – Present (expected 2027)",
  degree: "Bachelor of Arts — Political Science",
  note: "Engineering skills are self-taught and independent of formal coursework.",
} as const;

export const languages = [
  { name: "English", level: "Professional working proficiency" },
  { name: "Bangla", level: "Native" },
] as const;
