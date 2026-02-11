import { 
  ClipboardCheck,
  Route,
  Rocket,
  type LucideIcon 
} from "lucide-react";

export interface CooperationIdea {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const cooperationIdeas: CooperationIdea[] = [
  {
    icon: ClipboardCheck,
    title: "阶段对齐",
    description: "在合作启动前统一商业目标、预算边界与里程碑，确保每一步都对应清晰回报。",
  },
  {
    icon: Route,
    title: "双周迭代",
    description: "以两周为节奏执行、复盘、优化，把问题暴露在最短周期内，减少试错成本。",
  },
  {
    icon: Rocket,
    title: "资产沉淀",
    description: "把有效策略沉淀为SOP与增长资产包，让团队离开项目后仍能持续放大成果。",
  },
];
