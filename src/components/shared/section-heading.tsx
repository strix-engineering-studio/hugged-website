import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-neutral-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl leading-[0.98] tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
