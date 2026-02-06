import { Building2, TrendingUp, Target, LucideIcon } from "lucide-react";

export type IconName = 'building' | 'trending' | 'target';

export const iconMap: Record<IconName, LucideIcon> = {
  building: Building2,
  trending: TrendingUp,
  target: Target,
};

export function getIconByName(name: IconName): LucideIcon {
  return iconMap[name] || Building2;
}
