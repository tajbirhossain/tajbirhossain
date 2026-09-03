import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  headerClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      {(eyebrow || title || description) && (
        <header className={cn("mb-10 max-w-2xl md:mb-14", headerClassName)}>
          {eyebrow ? (
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
              {description}
            </p>
          ) : null}
        </header>
      )}
      {children}
    </section>
  );
}
