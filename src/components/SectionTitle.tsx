import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  glowColor?: "cyan" | "violet";
  className?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  glowColor = "cyan",
  className,
}: SectionTitleProps) => {
  return (
    <div className={cn("text-center mb-16", className)}>
      <h2
        className={cn(
          "font-display text-4xl md:text-5xl font-bold tracking-wider mb-4",
          glowColor === "cyan" && "text-primary text-glow-cyan",
          glowColor === "violet" && "text-secondary text-glow-violet"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-6 mx-auto h-1 w-32 rounded-full",
          glowColor === "cyan" && "bg-primary shadow-glow-cyan",
          glowColor === "violet" && "bg-secondary shadow-glow-violet"
        )}
      />
    </div>
  );
};

export default SectionTitle;
