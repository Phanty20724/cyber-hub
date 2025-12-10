import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover3D?: boolean;
  glowColor?: "cyan" | "violet";
  onClick?: () => void;
}

const GlassCard = ({
  children,
  className,
  hover3D = true,
  glowColor = "cyan",
  onClick,
}: GlassCardProps) => {
  return (
    <div className={cn("perspective-1000", onClick && "cursor-pointer")} onClick={onClick}>
      <div
        className={cn(
          "glass rounded-xl p-6 transition-all duration-500",
          hover3D && "card-3d hover:shadow-glow-cyan",
          glowColor === "violet" && hover3D && "hover:shadow-glow-violet hover:border-secondary/40",
          glowColor === "cyan" && hover3D && "hover:border-primary/40",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
