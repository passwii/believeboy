// Color utility functions for pricing module

export type ColorTheme = "blue" | "cyan" | "violet";

export interface ColorClasses {
  bg: string;
  text: string;
  check: string;
}

export const colorClasses: Record<ColorTheme, ColorClasses> = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    check: "text-blue-500",
  },
  cyan: {
    bg: "bg-cyan-100",
    text: "text-cyan-600",
    check: "text-cyan-500",
  },
  violet: {
    bg: "bg-violet-100",
    text: "text-violet-600",
    check: "text-violet-500",
  },
};

export function getColorClasses(color: ColorTheme): ColorClasses {
  return colorClasses[color];
}
