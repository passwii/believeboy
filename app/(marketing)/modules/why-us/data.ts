import { LucideIcon } from "lucide-react";
import { Globe, Sparkles, Target, Heart } from "lucide-react";

export interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export const advantages: Advantage[] = [
  {
    icon: Globe,
    title: "全生态服务能力",
    description: "从市场调研、产品定位、Listing优化到广告投放、物流管理、品牌建设，覆盖出海全链路。",
    color: "blue",
  },
  {
    icon: Sparkles,
    title: "AI深度赋能",
    description: "自研AI决策系统，将前沿人工智能融入运营各环节，让数据驱动每一个决策，效率提升5倍。",
    color: "cyan",
  },
  {
    icon: Target,
    title: "结果导向合作",
    description: "拒绝'按时间收费'的作坊模式，我们关注销售额增长、利润率提升、品牌资产积累。",
    color: "indigo",
  },
  {
    icon: Heart,
    title: "长期主义理念",
    description: "不止追求短期爆单，更致力于帮助客户构建可持续的全球竞争力。",
    color: "violet",
  },
];
