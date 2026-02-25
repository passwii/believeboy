import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionShellProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

interface SectionEyebrowProps {
  className?: string;
  children: ReactNode;
}

export function SectionShell({ id, className, children }: SectionShellProps) {
  return (
    <section id={id} className={cn("home-v2-section bg-[var(--home-v2-bg)]", className)}>
      <div className="home-v2-shell">{children}</div>
    </section>
  );
}

export function SectionEyebrow({ className, children }: SectionEyebrowProps) {
  return (
    <span className={cn("home-v2-eyebrow", className)}>
      <span className="home-v2-kicker-dot mr-2" aria-hidden="true" />
      {children}
    </span>
  );
}
