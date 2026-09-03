import type { Metadata } from "next";
import { ProjectList } from "@/components/work/ProjectList";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work by Tajbir Hossain: multi-tenant SaaS backends, research platforms with stream exports, and a Play Store React Native marketplace.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <header className="mb-6 max-w-2xl md:mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          Work
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Projects with production constraints
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
          Deep dives into systems where isolation, APIs, data pipelines, and
          shipping quality mattered — not just demos.
        </p>
      </header>
      <ProjectList projects={projects} />
    </div>
  );
}
