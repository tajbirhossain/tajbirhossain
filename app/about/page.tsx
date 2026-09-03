import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GithubCard } from "@/components/ui/GithubCard";
import {
  earlierExperience,
  education,
  languages,
  primaryExperience,
} from "@/content/experience";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background on Tajbir Hossain — 5+ years independent full-stack engineering, self-taught backend fundamentals, and remote delivery for international clients.",
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
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/resume.pdf" external>
            Download Resume
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact
          </ButtonLink>
        </div>
      </header>

      <div className="mt-10 max-w-xl">
        <GithubCard />
      </div>

      <section className="mt-16 border-t border-border pt-14 md:mt-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          Experience
        </h2>
        <article className="mt-10 max-w-3xl">
          <h3 className="font-display text-xl font-semibold text-ink">
            {primaryExperience.title}
          </h3>
          <p className="mt-2 font-mono text-xs tracking-wide text-ink-faint">
            {primaryExperience.company} · {primaryExperience.period}
          </p>
          <ul className="mt-5 space-y-3">
            {primaryExperience.bullets.map((bullet) => (
              <li
                key={bullet}
                className="border-l-2 border-accent/35 pl-4 text-sm leading-relaxed text-ink-muted md:text-base"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </article>

        <div className="mt-12 max-w-3xl">
          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-ink-faint">
            Earlier Experience
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
            <span className="font-medium text-ink">
              {earlierExperience.title}
            </span>
            {" · "}
            {earlierExperience.company}
            {" · "}
            {earlierExperience.period}
            {" — "}
            {earlierExperience.summary}
          </p>
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
          <p className="mt-3 text-sm text-ink-muted">{education.note}</p>
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
