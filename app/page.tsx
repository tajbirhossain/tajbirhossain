import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Fundamentals } from "@/components/home/Fundamentals";
import { Hero } from "@/components/home/Hero";
import { HireCta } from "@/components/home/HireCta";

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
