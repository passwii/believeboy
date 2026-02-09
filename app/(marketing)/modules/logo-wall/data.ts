import { LucideIcon } from "lucide-react";
import { ShoppingCart, Globe, Sparkles, Package, Target } from "lucide-react";

export interface Platform {
  name: string;
  icon: LucideIcon;
}

export const platforms: Platform[] = [
  { name: "Amazon", icon: ShoppingCart },
  { name: "Shopify", icon: Globe },
  { name: "TikTok Shop", icon: Sparkles },
  { name: "eBay", icon: Package },
  { name: "Walmart", icon: Target },
  { name: "独立站", icon: Globe },
];
