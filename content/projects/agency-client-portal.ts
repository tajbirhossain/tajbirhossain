import type { Project } from "./types";

export const agencyClientPortal: Project = {
  slug: "agency-client-portal",
  title: "Agency Client Portal",
  tagline:
    "Multi-tenant SaaS for agencies to manage client projects, approvals, and deliverables.",
  role: "Backend engineer — primary architecture & API ownership",
  year: "2024",
  stack: [
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Redis",
    "BullMQ",
    "Docker",
  ],
  featured: true,
  cover: "/projects/agency-client-portal.png",
  coverAlt:
    "Abstract blueprint visualization of a multi-tenant agency client portal",
  problem:
    "Agencies needed a single system where multiple tenants could manage client work without data leakage — with approvals, deliverables, and auditability baked in. Ad-hoc spreadsheets and shared folders failed at scale.",
  approach:
    "Designed a tenant-aware backend from day one: Postgres row-level isolation, granular RBAC, JWT auth, and async job pipelines for exports and notifications. Documented every endpoint with Swagger/OpenAPI and shipped a Dockerized deployment path so environments stayed reproducible.",
  architecture: [
    "Row-level multi-tenant isolation in PostgreSQL with Prisma as the typed data layer",
    "Granular RBAC for agency roles spanning projects, approvals, and deliverables",
    "Audit logging for sensitive actions to support accountability and debugging",
    "BullMQ + Redis for async exports and notification jobs outside the request path",
    "Dockerized runtime with OpenAPI/Swagger coverage across the API surface",
  ],
  outcomes: [
    "Primary backend showcase: production-ready multi-tenant SaaS patterns end to end",
    "Clear separation between request-time APIs and background work via queues",
    "Handoff-friendly docs and containers that reduce environment mismatch risk",
  ],
};
