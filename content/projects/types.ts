export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  year: string;
  stack: string[];
  featured: boolean;
  cover: string;
  coverAlt: string;
  problem: string;
  approach: string;
  architecture: string[];
  outcomes: string[];
  links?: ProjectLink[];
};
