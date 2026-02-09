import {
  Target,
  Globe,
  Workflow,
  Brain,
  Handshake,
  Database,
  type LucideIcon,
} from "lucide-react";

export interface Advantage {
  title: string;
  description: string;
  icon: LucideIcon;
  color: {
    primary: string;
    secondary: string;
    gradient: string;
    light: string;
  };
  stats?: {
    value: string;
    label: string;
  };
  features?: string[];
  size: "small" | "medium" | "large";
}

export const coreAdvantages: Advantage[] = [
  {
    title: "定制化出海方案",
    description: "不止于提供方案，更在于实现精准适配。通过全面分析企业独特需求与市场差异点，为您构建个性化的跨境电商战略。",
    icon: Target,
    color: {
      primary: "#3b82f6",
      secondary: "#60a5fa",
      gradient: "from-blue-500 to-cyan-400",
      light: "bg-blue-50",
    },
    stats: { value: "98%", label: "客户满意度" },
    features: ["需求深度分析", "市场差异化定位", "定制化战略"],
    size: "large",
  },
  {
    title: "跨境全生态整合能力",
    description: "整合产品、营销、物流等出海关键环节，提供端到端的全链路支持。",
    icon: Globe,
    color: {
      primary: "#8b5cf6",
      secondary: "#a78bfa",
      gradient: "from-violet-500 to-purple-400",
      light: "bg-violet-50",
    },
    stats: { value: "50+", label: "覆盖国家/地区" },
    features: ["端到端支持", "全链路整合", "国际物流网络"],
    size: "medium",
  },
  {
    title: "SOP流程化运营体系",
    description: "通过建立标准化的流程规范，确保所有运营流程顺畅流转、公开透明且可追溯。",
    icon: Workflow,
    color: {
      primary: "#10b981",
      secondary: "#34d399",
      gradient: "from-emerald-500 to-teal-400",
      light: "bg-emerald-50",
    },
    stats: { value: "200+", label: "标准化流程" },
    features: ["SharePoint协同", "流程透明化", "全程可追溯"],
    size: "medium",
  },
  {
    title: "AI深度赋能运营",
    description: "以AI驱动运营全流程革新，系统性地提升各环节处理效率、降低人为误差与成本。",
    icon: Brain,
    color: {
      primary: "#f59e0b",
      secondary: "#fbbf24",
      gradient: "from-amber-500 to-orange-400",
      light: "bg-amber-50",
    },
    stats: { value: "3x", label: "效率提升" },
    features: ["全流程AI化", "智能化管理", "成本优化"],
    size: "large",
  },
  {
    title: "价值取向的长期合作",
    description: "秉持价值取向的合作哲学，致力于与客户建立长期、互信的深度伙伴关系。",
    icon: Handshake,
    color: {
      primary: "#ec4899",
      secondary: "#f472b6",
      gradient: "from-pink-500 to-rose-400",
      light: "bg-pink-50",
    },
    stats: { value: "5年+", label: "平均合作时长" },
    features: ["价值导向", "互信伙伴", "持续共赢"],
    size: "small",
  },
  {
    title: "数字化运营资产沉淀",
    description: "深度应用SharePoint与Notion等工具，赋能企业实现运营流程的全面数字化。",
    icon: Database,
    color: {
      primary: "#06b6d4",
      secondary: "#22d3ee",
      gradient: "from-cyan-500 to-sky-400",
      light: "bg-cyan-50",
    },
    stats: { value: "10万+", label: "知识条目" },
    features: ["SharePoint集成", "Notion赋能", "知识沉淀"],
    size: "small",
  },
];
