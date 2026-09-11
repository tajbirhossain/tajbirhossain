import { jbhInternational } from "./jbh-international";
import { subscriptionTracker } from "./subscription-tracker";
import type { Project } from "./types";

/**
 * Registry of all portfolio projects.
 * To add a project: create a file in this folder, then append it here.
 */
export const projects: Project[] = [
  subscriptionTracker,
  jbhInternational,
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export type { Project, ProjectLink } from "./types";
