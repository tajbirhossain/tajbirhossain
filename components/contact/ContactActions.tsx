"use client";

import { useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/content/site";

export function ContactActions() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
      <ButtonLink href={`mailto:${site.email}`}>Email me</ButtonLink>
      <button
        type="button"
        onClick={copyEmail}
        className="inline-flex items-center justify-center rounded-md border border-border-strong bg-transparent px-5 py-2.5 text-sm font-medium tracking-wide text-ink transition-colors duration-200 hover:border-ink/30 hover:bg-surface/60"
      >
        {copied ? "Copied" : "Copy email"}
      </button>
      <ButtonLink href={site.github} variant="ghost" external>
        GitHub →
      </ButtonLink>
    </div>
  );
}
