import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start px-5 py-24 md:px-8 md:py-32">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-ink-muted">
        That route doesn’t exist. Head back to selected work or the home page.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/work" variant="secondary">
          Work
        </ButtonLink>
      </div>
    </div>
  );
}
