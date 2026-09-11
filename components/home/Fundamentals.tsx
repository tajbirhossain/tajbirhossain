import { Section } from "@/components/ui/Section";
import { skills } from "@/content/skills";

export function Fundamentals() {
  return (
    <Section
      eyebrow="Fundamentals"
      title="Backend-strong. Full-stack capable."
      description="The stack I use to design schemas, ship APIs, keep writes concurrency-safe, queue background work, and deliver the interfaces that sit on top."
      className="mx-auto max-w-6xl border-t border-border px-5 md:px-8"
    >
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.label}>
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              {group.label}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-ink md:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
