import { 
  Globe, 
  Zap, 
  TrendingUp, 
  Heart,
  type LucideIcon 
} from "lucide-react";

export interface CoreValue {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export const coreValues: CoreValue[] = [
  {
    icon: Globe,
    title: "全生态服务能力",
    description: "从市场调研到品牌建设，提供全链路覆盖的跨境电商解决方案，一站式满足您的出海需求。",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "AI深度赋能",
    description: "自研AI决策系统，将运营效率提升5倍，用数据智能驱动每一个商业决策。",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: TrendingUp,
    title: "结果导向合作",
    description: "关注销售额、利润率、品牌资产等可量化价值，以实际成果衡量合作成效。",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Heart,
    title: "长期主义理念",
    description: "帮助客户构建可持续的全球竞争力，追求深度互信的战略伙伴关系。",
    color: "from-indigo-500 to-violet-500",
  },
];
