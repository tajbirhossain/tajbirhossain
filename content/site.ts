export const site = {
  name: "Tajbir Hossain",
  role: "Full-Stack Software Engineer",
  location: "Dhaka, Bangladesh",
  email: "mdtajbirhossain030@gmail.com",
  phone: "+8801961211915",
  github: "https://github.com/tajbirhossain",
  githubLabel: "github.com/tajbirhossain",
  summary:
    "Full-Stack Software Engineer with 5+ years building production systems for international clients. Primary strength in backend development: Node.js, Express.js, TypeScript, PostgreSQL, Prisma, REST API design, Redis, BullMQ, and Docker.",
  heroLine:
    "I design and ship production backends, APIs, and full-stack products with solid fundamentals.",
  seeking:
    "Seeking a remote full-stack or backend role at a product company.",
  nav: [
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
