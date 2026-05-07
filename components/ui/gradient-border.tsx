"use client";

import { cn } from "@/lib/utils";

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}

export function GradientBorder({
  children,
  className,
  containerClassName,
  animate = true,
}: GradientBorderProps) {
  return (
    <div className={cn("relative rounded-2xl p-px", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-40",
          animate && "animate-gradient-border"
        )}
        style={{
          background:
            "conic-gradient(from var(--gradient-angle, 0deg), transparent 40%, rgba(120,80,255,0.5) 50%, rgba(56,189,248,0.5) 55%, transparent 60%)",
        }}
      />
      <div
        className={cn(
          "relative rounded-2xl bg-[oklch(0.08_0.01_260)]",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
