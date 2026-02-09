import { 
  Globe, 
  ChartBar, 
  Package, 
  Sparkles, 
  Award, 
  Target, 
  Brain, 
  Cpu,
  type LucideIcon 
} from "lucide-react";

export interface CoreService {
  icon: LucideIcon;
  secondaryIcon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: string;
}

export const coreServices: CoreService[] = [
  {
    icon: Globe,
    secondaryIcon: ChartBar,
    title: "市场调研与策略制定",
    description: "深入洞察目标市场消费趋势、竞争格局与文化特性，基于数据与分析，为您量身定制高精准度的本地化营销与市场进入策略。",
    features: ["消费趋势洞察", "竞争格局分析", "本地化进入策略"],
    color: "blue",
  },
  {
    icon: Package,
    secondaryIcon: Sparkles,
    title: "产品呈现与转化提升",
    description: "系统优化产品定位、视觉展示与详情呈现，通过A/B测试与用户体验设计，有效提升页面吸引力与购买转化率。",
    features: ["Listing优化", "视觉升级", "A/B测试", "用户体验设计"],
    color: "indigo",
  },
  {
    icon: Award,
    secondaryIcon: Target,
    title: "品牌塑造与价值赋能",
    description: "协助梳理品牌核心价值，通过一致的视觉传达与故事化内容营销，在海外市场构建独特、可信的品牌形象，持续提升品牌资产。",
    features: ["品牌定位", "内容营销", "用户心智建设", "故事化内容营销"],
    color: "violet",
  },
  {
    icon: Brain,
    secondaryIcon: Cpu,
    title: "智能运营与效率革新",
    description: "应用人工智能与机器学习技术，自动化处理数据分析、广告投放与客户服务等环节，实现运营流程的智能化升级。",
    features: ["AI驱动广告投放", "智能库存管理", "客户服务自动化", "数据智能决策"],
    color: "cyan",
  },
];
