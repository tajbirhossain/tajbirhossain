import { ButtonLink } from "@/components/ui/ButtonLink";
import { GithubCard } from "@/components/ui/GithubCard";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center px-5 py-20 md:px-8 md:py-28">
        <p className="reveal font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {site.location} · Remote-ready
        </p>
        <h1 className="reveal reveal-delay-1 mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
          {site.name}
        </h1>
        <p className="reveal reveal-delay-1 mt-4 font-display text-xl font-medium text-ink md:text-2xl">
          {site.role}
        </p>
        <p className="reveal reveal-delay-2 mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
          {site.heroLine}
        </p>
        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/work">View selected work</ButtonLink>
          <ButtonLink href="/resume.pdf" variant="secondary" external>
            Download Resume
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghost">
            Contact
          </ButtonLink>
        </div>
        <div className="reveal reveal-delay-3 mt-10 max-w-md">
          <GithubCard />
        </div>
      </div>
    </section>
  );
}
