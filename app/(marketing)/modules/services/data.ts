import { LucideIcon } from "lucide-react";
import { Search, Package, Palette, Cpu } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: Search,
    title: "市场调研与策略",
    description: "深入洞察目标市场的消费趋势、竞争格局与文化特性，为您量身定制高精准度的本地化营销与市场进入策略。",
    features: ["竞品分析", "市场定位", "进入策略"],
  },
  {
    icon: Package,
    title: "产品呈现与转化",
    description: "系统优化产品定位、视觉展示与详情呈现，通过A/B测试与用户体验设计，有效提升页面吸引力与购买转化率。",
    features: ["Listing优化", "视觉设计", "A/B测试"],
  },
  {
    icon: Palette,
    title: "品牌塑造与赋能",
    description: "协助梳理品牌核心价值，通过一致的视觉传达与故事化内容营销，在海外市场构建独特、可信的品牌形象。",
    features: ["品牌定位", "内容营销", "品牌资产"],
  },
  {
    icon: Cpu,
    title: "智能运营与革新",
    description: "应用人工智能与机器学习技术，自动化处理数据分析、广告投放与客户服务等环节，实现运营流程的智能化升级。",
    features: ["AI广告投放", "智能客服", "数据驱动"],
  },
];
