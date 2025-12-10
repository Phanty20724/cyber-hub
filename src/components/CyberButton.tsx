import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CyberButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const CyberButton = ({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  disabled = false,
  type = "button",
}: CyberButtonProps) => {
  const baseStyles =
    "relative font-display uppercase tracking-wider transition-all duration-300 overflow-hidden group";

  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:shadow-glow-cyan",
    secondary: "bg-secondary text-secondary-foreground hover:shadow-glow-violet",
    outline:
      "bg-transparent border-2 border-primary text-primary hover:bg-primary/10 hover:shadow-glow-cyan",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        "rounded-lg",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {/* Glitch effect on hover */}
      <span className="relative z-10 group-hover:animate-glitch">{children}</span>

      {/* Animated background */}
      <span
        className={cn(
          "absolute inset-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0",
          variant === "primary" && "bg-primary/30",
          variant === "secondary" && "bg-secondary/30",
          variant === "outline" && "bg-primary/20"
        )}
      />
    </button>
  );
};

export default CyberButton;
