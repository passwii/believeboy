import type { Icon } from "@phosphor-icons/react";
import {
  ShoppingCartSimple,
  GlobeHemisphereWest,
  Sparkle,
  Package,
  Target,
} from "@phosphor-icons/react/dist/ssr";

export interface Platform {
  name: string;
  icon: Icon;
}

export const platforms: Platform[] = [
  { name: "亚马逊", icon: ShoppingCartSimple },
  { name: "Shopify", icon: GlobeHemisphereWest },
  { name: "TikTok Shop", icon: Sparkle },
  { name: "eBay", icon: Package },
  { name: "沃尔玛", icon: Target },
  { name: "独立站", icon: GlobeHemisphereWest },
];
