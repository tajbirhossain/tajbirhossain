import type { Project } from "./types";

export const subscriptionTracker: Project = {
  slug: "subscription-tracker",
  title: "Subscription Tracker",
  tagline:
    "End-to-end subscription platform: Express/TypeScript API, offline-first Android client, Redis reliability patterns, and Gemini receipt extraction.",
  role: "Full-stack engineer — API, Android client & reliability",
  year: "2025",
  stack: [
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "BullMQ",
    "Gemini API",
  ],
  featured: true,
  cover: "/projects/subscription-tracker.png",
  coverAlt:
    "Blueprint diagram of Subscription Tracker — API, Redis, BullMQ, Gemini extraction, and Android sync",
  problem:
    "People lose track of recurring charges across apps and currencies. Parsing subscription details from screenshots or pasted text is messy, sync must work offline, and create/update endpoints need to stay correct under concurrent duplicate requests.",
  approach:
    "Built an Express/TypeScript API on PostgreSQL (Supabase) with an offline-first Android client that syncs on reconnect. Used Redis for caching, idempotency, rate limiting, and BullMQ jobs. Replaced a planned SMS-parsing pipeline with Gemini-based image/text extraction — name, price, and currency with confidence scoring and manual-entry fallback.",
  architecture: [
    "PostgreSQL + Express/TypeScript API with JWT auth and Zod-validated request bodies",
    "Idempotency keys and transaction-based concurrency protection on subscription create/update",
    "BullMQ jobs for trial/renewal reminders, currency-rate refresh, and expired-session cleanup with retry and exponential backoff",
    "Redis-cached currency rates with TTL and cached-fallback when upstream APIs fail",
    "Gemini extraction service for screenshots/pasted text, with regex fallback for low-confidence reads",
    "Jest/Supertest coverage across auth, CRUD, concurrency 409s, Redis idempotency, extraction, and job dedupe — 55 tests",
  ],
  outcomes: [
    "Verified under concurrent load with a custom script simulating 50 simultaneous duplicate requests — duplicate subscriptions eliminated",
    "Background reminders and rate refresh keep running with retry/backoff on failure",
    "Currency conversions stay available during upstream outages via cached fallback",
    "Open source backend and Expo Android app on GitHub",
  ],
  links: [
    {
      label: "Backend (GitHub)",
      href: "https://github.com/tajbirhossain/microsubtrackerBackend",
    },
    {
      label: "Android app (GitHub)",
      href: "https://github.com/tajbirhossain/microsubtracker",
    },
  ],
};
