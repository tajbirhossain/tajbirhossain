import Link from "next/link";
import Image from "next/image";
import { StackList } from "@/components/ui/StackList";
import type { Project } from "@/content/projects";

type ProjectListProps = {
  projects: Project[];
};

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <ul className="flex flex-col">
      {projects.map((project) => (
        <li key={project.slug}>
          <Link
            href={`/work/${project.slug}`}
            className="project-row group grid gap-6 border-t border-border py-10 md:grid-cols-[1fr_280px] md:items-center md:gap-12"
          >
            <div>
              <p className="font-mono text-xs tracking-wide text-ink-faint">
                {project.year}
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                <span className="relative inline-block">
                  {project.title}
                  <span className="project-title-underline absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-accent transition-transform duration-300" />
                </span>
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
                {project.tagline}
              </p>
              <StackList items={project.stack} className="mt-4" />
            </div>
            <div className="overflow-hidden rounded-md border border-border bg-mist-deep">
              <Image
                src={project.cover}
                alt={project.coverAlt}
                width={560}
                height={360}
                className="project-cover aspect-[16/10] w-full object-cover transition-transform duration-500"
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
