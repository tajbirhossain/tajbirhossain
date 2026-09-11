export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "REST APIs",
      "JWT Auth",
      "Zod validation",
      "Swagger/OpenAPI",
      "Prisma",
    ],
  },
  {
    label: "Databases",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Schema design",
      "Indexing",
      "Transactions",
      "Query optimization",
    ],
  },
  {
    label: "Caching, Queues & Reliability",
    items: [
      "Redis",
      "BullMQ",
      "Rate limiting",
      "Retry / exponential backoff",
      "Idempotency keys",
      "Row-level locking / transactions",
      "Concurrency / load testing (autocannon/k6)",
    ],
  },
  {
    label: "AI Integration",
    items: [
      "Gemini API for structured data extraction from unstructured text/image input",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    label: "DevOps & Tools",
    items: [
      "Docker",
      "Git",
      "GitHub Actions",
      "Linux",
      "Vercel",
      "Postman",
      "Supabase",
    ],
  },
];
