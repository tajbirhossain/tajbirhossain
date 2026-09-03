import { site } from "@/content/site";

type GithubCardProps = {
  className?: string;
};

export function GithubCard({ className }: GithubCardProps) {
  return (
    <a
      href={site.github}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "group flex items-center justify-between gap-4 rounded-md border border-border bg-surface/50 px-5 py-4 transition-colors duration-200 hover:border-border-strong hover:bg-surface/80",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
          GitHub
        </p>
        <p className="mt-1 font-display text-lg font-semibold text-ink">
          {site.githubLabel}
        </p>
        <p className="mt-1 text-sm text-ink-muted">
          Code, experiments, and public work
        </p>
      </div>
      <span className="font-mono text-sm text-ink-faint transition-colors group-hover:text-accent">
        →
      </span>
    </a>
  );
}
