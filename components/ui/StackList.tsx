import { cn } from "@/lib/utils";

type StackListProps = {
  items: string[];
  className?: string;
};

export function StackList({ items, className }: StackListProps) {
  return (
    <ul className={cn("flex flex-wrap gap-x-3 gap-y-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="font-mono text-xs tracking-wide text-ink-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
