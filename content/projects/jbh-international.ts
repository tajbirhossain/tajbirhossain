import type { Project } from "./types";

export const jbhInternational: Project = {
  slug: "jbh-international",
  title: "JBH International Limited",
  tagline:
    "B2B multi-vendor marketplace for garment products — live on Google Play with concurrency-safe inventory.",
  role: "Mobile engineer — React Native app & inventory correctness",
  year: "2023",
  stack: ["React Native", "Expo", "Supabase"],
  featured: true,
  cover: "/projects/jbh-international.png",
  coverAlt:
    "Abstract blueprint visualization of a B2B garment marketplace mobile app",
  problem:
    "A B2B garment marketplace needed advanced search and filtering across product categories, smooth performance on low-end Android devices, and correct stock counts when many buyers hit checkout at once.",
  approach:
    "Shipped a React Native (Expo) client backed by Supabase. Tuned list rendering and queries for constrained devices. Fixed a concurrency/race-condition bug in the stock-update flow that caused negative inventory and overselling during high-traffic checkout — resolved with database transactions and pessimistic row-level locking (FOR UPDATE).",
  architecture: [
    "React Native + Expo client for cross-platform mobile delivery",
    "Supabase-backed data and auth for marketplace operations",
    "Advanced search and filtering across garment product categories",
    "Pessimistic row-level locking (FOR UPDATE) inside transactions for stock updates",
    "Performance work targeting low-end Android devices",
    "Google Play distribution with ongoing active daily users",
  ],
  outcomes: [
    "Verified with 20 concurrent purchases against a 1-unit product — 0 units oversold",
    "Published on Google Play Store with 2,050+ downloads and active daily users",
    "Proven ability to ship production mobile clients and fix concurrency bugs under load",
  ],
  links: [
    {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.jbh.internationallimited",
    },
  ],
};
