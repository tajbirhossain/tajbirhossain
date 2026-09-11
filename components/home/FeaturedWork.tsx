import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { StackList } from "@/components/ui/StackList";
import { getFeaturedProjects } from "@/content/projects";

export function FeaturedWork() {
  const projects = getFeaturedProjects();

  return (
    <Section
      eyebrow="Selected work"
      title="Systems that hold up in production"
      description="Case studies focused on reliable APIs, concurrency-safe writes, background jobs, and shipping real products."
      className="mx-auto max-w-6xl px-5 md:px-8"
    >
      <ul className="flex flex-col gap-10 md:gap-14">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/work/${project.slug}`}
              className="project-row group grid gap-6 border-t border-border pt-8 md:grid-cols-[1.1fr_0.9fr] md:gap-10"
            >
              <div className="order-2 md:order-1">
                <p className="font-mono text-xs tracking-wide text-ink-faint">
                  {project.year} · {project.role}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  <span className="relative inline-block">
                    {project.title}
                    <span className="project-title-underline absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-accent transition-transform duration-300" />
                  </span>
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
                  {project.tagline}
                </p>
                <StackList items={project.stack} className="mt-5" />
              </div>
              <div className="order-1 overflow-hidden rounded-md border border-border bg-mist-deep md:order-2">
                <Image
                  src={project.cover}
                  alt={project.coverAlt}
                  width={960}
                  height={640}
                  className="project-cover h-full w-full object-cover transition-transform duration-500"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <Link
          href="/work"
          className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          Browse all work →
        </Link>
      </div>
    </Section>
  );
}
