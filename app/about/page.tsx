import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { education, experience, languages } from "@/content/experience";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: site.summary,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <header className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          About
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Building reliable systems for real clients
        </h1>
        <p className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg">
          {site.summary}
        </p>
        <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
          {site.seeking}
        </p>
      </header>

      <section className="mt-16 border-t border-border pt-14 md:mt-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          Experience
        </h2>
        <div className="mt-10 space-y-14">
          {experience.map((role) => (
            <article key={`${role.title}-${role.period}`} className="max-w-3xl">
              <h3 className="font-display text-xl font-semibold text-ink">
                {role.title}
              </h3>
              <p className="mt-2 font-mono text-xs tracking-wide text-ink-faint">
                {role.company} · {role.period}
              </p>
              <ul className="mt-5 space-y-3">
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="border-l-2 border-accent/35 pl-4 text-sm leading-relaxed text-ink-muted md:text-base"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-12 border-t border-border pt-14 md:mt-20 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            Education
          </h2>
          <p className="mt-4 font-medium text-ink">{education.school}</p>
          <p className="mt-1 font-mono text-xs tracking-wide text-ink-faint">
            {education.period}
          </p>
          <p className="mt-2 text-ink-muted">{education.degree}</p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            Languages
          </h2>
          <ul className="mt-4 space-y-2">
            {languages.map((language) => (
              <li key={language.name} className="text-ink-muted">
                <span className="font-medium text-ink">{language.name}</span>
                {" — "}
                {language.level}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mt-16 flex flex-wrap gap-3 border-t border-border pt-12">
        <ButtonLink href="/contact">Contact</ButtonLink>
        <ButtonLink href="/work" variant="secondary">
          View work
        </ButtonLink>
      </div>
    </div>
  );
}
