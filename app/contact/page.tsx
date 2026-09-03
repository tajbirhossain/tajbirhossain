import type { Metadata } from "next";
import { ContactActions } from "@/components/contact/ContactActions";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} — ${site.role}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <header className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          Contact
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Let’s talk about the role
        </h1>
        <p className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg">
          Recruiters and hiring managers — email is the fastest path. I’m
          especially interested in remote full-stack or backend roles at product
          companies.
        </p>
      </header>

      <div className="mt-12 max-w-xl rounded-md border border-border bg-surface/50 p-6 md:p-8">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
          Email
        </p>
        <p className="mt-2 font-display text-xl font-semibold text-ink md:text-2xl">
          {site.email}
        </p>
        <p className="mt-4 text-sm text-ink-muted">
          Based in {site.location}. Open to remote collaboration across time
          zones.
        </p>
        <div className="mt-8">
          <ContactActions />
        </div>
      </div>
    </div>
  );
}
