"use client";

import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: {
    text: string;
    icon?: LucideIcon;
  };
  variant?: "default" | "dark";
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  variant = "default",
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isDark = variant === "dark";
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {badge && (
        <Badge
          variant="secondary"
          className={`mb-4 px-4 py-1.5 text-sm ${
            isDark
              ? "bg-white/10 text-cyan-400 border-0"
              : "bg-blue-100 text-blue-700 hover:bg-blue-100"
          }`}
        >
          {badge.icon && <badge.icon className="w-4 h-4 mr-1" />}
          {badge.text}
        </Badge>
      )}

      <h2
        className={`text-3xl md:text-4xl font: bold mb-4 ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p className={`text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
