import type { Metadata } from "next";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Fundamentals } from "@/components/home/Fundamentals";
import { Hero } from "@/components/home/Hero";
import { HireCta } from "@/components/home/HireCta";

export const metadata: Metadata = {
  description:
    "Portfolio of Tajbir Hossain, a full-stack engineer focused on production backends, REST APIs, PostgreSQL, and remote delivery for product teams.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Fundamentals />
      <ExperiencePreview />
      <HireCta />
    </>
  );
}
