import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/content/site";

export function HireCta() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          Next
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          {site.seeking}
        </h2>
        <p className="mt-4 max-w-xl text-base text-ink-muted">
          Open to remote full-stack or backend roles where solid API design,
          data modeling, and operational discipline matter.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact">Get in touch</ButtonLink>
          <ButtonLink href={site.github} variant="secondary" external>
            GitHub
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
