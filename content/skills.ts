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
      "Query optimization",
    ],
  },
  {
    label: "Caching & Queues",
    items: ["Redis", "BullMQ"],
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
      "Firebase",
      "Supabase",
    ],
  },
];
