import type { Project } from "./types";

export const absoluteMarketResearch: Project = {
  slug: "absolute-market-research",
  title: "Absolute Market Research",
  tagline:
    "Full-stack research platform with CMS, RBAC, PDF reports, and stream-based exports.",
  role: "Full-stack engineer — schema, API, and product delivery",
  year: "2023",
  stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
  featured: true,
  cover: "/projects/absolute-market-research.png",
  coverAlt:
    "Abstract blueprint visualization of a market research analytics platform",
  problem:
    "Research teams needed a platform for workflows, role-based access, CMS content, and large report generation — without crashing under heavy export loads or collapsing permissions into a single admin role.",
  approach:
    "Built the full stack: MongoDB schema for research workflows, Express REST APIs with JWT + RBAC, a React front end for operators, automated PDF report generation, and Node.js streams for high-volume data exports that avoid memory spikes.",
  architecture: [
    "MongoDB schema designed around research workflows and multi-role access",
    "JWT authentication with RBAC for distinct operator and admin responsibilities",
    "CMS layer for managing research content without redeploys",
    "Automated PDF report generation for client-facing deliverables",
    "Stream-based export pipeline to keep large datasets out of process memory",
  ],
  outcomes: [
    "Stable large-report generation without memory spikes during exports",
    "Clear API and schema ownership for multi-role research operations",
    "End-to-end delivery from data model through operator UI",
  ],
};
