export const site = {
  name: "Tajbir Hossain",
  role: "Full-Stack Software Engineer (Backend-Focused)",
  location: "Dhaka, Bangladesh",
  email: "mdtajbirhossain030@gmail.com",
  phone: "+8801961211915",
  github: "https://github.com/tajbirhossain",
  githubLabel: "github.com/tajbirhossain",
  summary:
    "Full-Stack Software Engineer with 5+ years building production systems for international clients as an independent consultant. Primary strength in backend development: Node.js, Express.js, TypeScript, PostgreSQL, Redis, BullMQ, and Docker, with hands-on work on concurrency-safe write paths, idempotency, and load-tested API reliability.",
  heroLine:
    "I design and ship production backends, APIs, and full-stack products — with concurrency-safe writes, idempotency, and reliable job pipelines.",
  seeking:
    "Seeking a remote full-stack or backend role at a product company.",
  nav: [
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
