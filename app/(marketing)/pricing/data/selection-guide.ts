import { Building2, TrendingUp, Target, LucideIcon } from "lucide-react";

export interface SelectionGuideItem {
  stage: string;
  recommendation: string;
  icon: LucideIcon;
}

export const selectionGuide: SelectionGuideItem[] = [
  {
    stage: "刚起步，预算有限",
    recommendation: "Pro 方案 - 单平台版",
    icon: Building2,
  },
  {
    stage: "有一定基础，追求增长",
    recommendation: "Max 方案",
    icon: TrendingUp,
  },
  {
    stage: "成熟品牌，寻求战略伙伴",
    recommendation: "Ultra 方案",
    icon: Target,
  },
];
