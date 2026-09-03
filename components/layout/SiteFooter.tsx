import Link from "next/link";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-base font-semibold text-ink">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            {site.role} · {site.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-ink-muted">
          <Link href="/work" className="transition-colors hover:text-accent">
            Work
          </Link>
          <Link href="/about" className="transition-colors hover:text-accent">
            About
          </Link>
          <Link href="/contact" className="transition-colors hover:text-accent">
            Contact
          </Link>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
