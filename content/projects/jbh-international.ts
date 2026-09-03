import type { Project } from "./types";

export const jbhInternational: Project = {
  slug: "jbh-international",
  title: "JBH International Limited",
  tagline:
    "B2B multi-vendor marketplace for garment products — live on Google Play.",
  role: "Mobile engineer — React Native app & performance",
  year: "2023",
  stack: ["React Native", "Expo", "Supabase"],
  featured: true,
  cover: "/projects/jbh-international.png",
  coverAlt:
    "Abstract blueprint visualization of a B2B garment marketplace mobile app",
  problem:
    "A B2B garment marketplace needed advanced search and filtering across product categories, plus smooth performance on low-end Android devices common among field users.",
  approach:
    "Shipped a React Native (Expo) client backed by Supabase, with careful list rendering and query patterns tuned for constrained devices. Focused on search/filter UX and sustained daily usage after Play Store launch.",
  architecture: [
    "React Native + Expo client for cross-platform mobile delivery",
    "Supabase-backed data and auth for marketplace operations",
    "Advanced search and filtering across garment product categories",
    "Performance work targeting low-end Android devices",
    "Google Play distribution with ongoing active daily users",
  ],
  outcomes: [
    "Published on Google Play Store with 1,303 downloads",
    "Active daily users after launch",
    "Proven ability to ship and optimize production mobile clients",
  ],
};
