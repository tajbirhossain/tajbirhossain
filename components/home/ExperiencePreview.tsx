import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { experience } from "@/content/experience";

export function ExperiencePreview() {
  const [primary] = experience;

  return (
    <Section
      eyebrow="Experience"
      title="Independent delivery at product pace"
      description="Five-plus years shipping for international clients — owning architecture through post-launch support."
      className="mx-auto max-w-6xl border-t border-border px-5 md:px-8"
    >
      <article className="max-w-3xl">
        <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
          {primary.title}
        </h3>
        <p className="mt-2 font-mono text-xs tracking-wide text-ink-faint">
          {primary.company} · {primary.period}
        </p>
        <ul className="mt-6 space-y-3">
          {primary.bullets.slice(0, 3).map((bullet) => (
            <li
              key={bullet}
              className="border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-ink-muted md:text-base"
            >
              {bullet}
            </li>
          ))}
        </ul>
        <Link
          href="/about"
          className="mt-8 inline-block text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          Full background →
        </Link>
      </article>
    </Section>
  );
}
