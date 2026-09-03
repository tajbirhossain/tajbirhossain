import Image from "next/image";
import type { Project } from "@/content/projects";
import { StackList } from "@/components/ui/StackList";
import { ButtonLink } from "@/components/ui/ButtonLink";

type CaseStudyProps = {
  project: Project;
};

export function CaseStudy({ project }: CaseStudyProps) {
  return (
    <article>
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Case study
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {project.tagline}
          </p>
          <p className="mt-4 font-mono text-xs tracking-wide text-ink-faint">
            {project.year} · {project.role}
          </p>
          <StackList items={project.stack} className="mt-6" />
          {project.links?.length ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <ButtonLink
                  key={link.href}
                  href={link.href}
                  variant="secondary"
                  external
                >
                  {link.label}
                </ButtonLink>
              ))}
            </div>
          ) : null}
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        <div className="overflow-hidden rounded-md border border-border bg-mist-deep">
          <Image
            src={project.cover}
            alt={project.coverAlt}
            width={1440}
            height={900}
            priority
            className="aspect-[16/10] w-full object-cover"
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-16 px-5 py-10 md:grid-cols-[0.9fr_1.1fr] md:gap-20 md:px-8 md:py-16">
        <div className="space-y-12">
          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Problem
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
              {project.problem}
            </p>
          </section>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Approach
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
              {project.approach}
            </p>
          </section>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Architecture
            </h2>
            <ul className="mt-4 space-y-3">
              {project.architecture.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-accent/35 pl-4 text-sm leading-relaxed text-ink md:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Outcomes
            </h2>
            <ul className="mt-4 space-y-3">
              {project.outcomes.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-ink/15 pl-4 text-sm leading-relaxed text-ink-muted md:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
