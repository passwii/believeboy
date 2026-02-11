import { 
  Bot,
  ChartNoAxesCombined,
  Compass,
  Handshake,
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
    icon: Compass,
    title: "战略先于执行",
    description: "所有投放、选品、内容动作都从品牌阶段目标反推，避免无效增长。",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: Bot,
    title: "AI嵌入日常运营",
    description: "把AI用在关键词、创意、定价和复盘中，让团队把时间留给关键判断。",
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: ChartNoAxesCombined,
    title: "指标透明到日",
    description: "建立统一增长看板，持续追踪流量质量、转化效率、利润结构和复购。",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Handshake,
    title: "共担结果的伙伴关系",
    description: "不做外包思维的短期协作，而是与品牌共建可持续、可复制的出海体系。",
    color: "from-indigo-500 to-sky-600",
  },
];
