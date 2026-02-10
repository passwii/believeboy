import {
  Search,
  Target,
  Zap,
  BarChart3,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export interface ServiceProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  icon: LucideIcon;
  color: string;
  gradient: string;
}

export const serviceProcess: ServiceProcessStep[] = [
  {
    step: "01",
    title: "需求诊断",
    subtitle: "深度洞察",
    description: "深入了解您的业务现状、目标市场与核心诉求，全面分析现有运营数据与挑战。",
    details: [
      "业务现状全面梳理",
      "目标市场精准定位",
      "竞争对手深度分析",
      "运营数据诊断评估",
    ],
    icon: Search,
    color: "#3b82f6",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    step: "02",
    title: "策略制定",
    subtitle: "精准规划",
    description: "基于诊断结果，制定个性化的市场进入策略与运营方案，明确目标与执行路径。",
    details: [
      "定制化策略方案",
      "清晰的阶段目标设定",
      "资源配置优化建议",
      "风险评估与预案制定",
    ],
    icon: Target,
    color: "#8b5cf6",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    step: "03",
    title: "执行落地",
    subtitle: "高效实施",
    description: "专业团队按计划执行各项运营工作，确保每个环节高质量完成，实时同步进度。",
    details: [
      "专业团队全程执行",
      "严格的质量把控",
      "实时进度同步更新",
      "灵活应对突发情况",
    ],
    icon: Zap,
    color: "#06b6d4",
    gradient: "from-cyan-500 to-teal-600",
  },
  {
    step: "04",
    title: "数据优化",
    subtitle: "持续迭代",
    description: "持续监控关键数据指标，通过数据分析发现问题并进行针对性优化调整。",
    details: [
      "全维度数据监测",
      "智能分析发现问题",
      "快速响应优化调整",
      "A/B测试验证效果",
    ],
    icon: BarChart3,
    color: "#10b981",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    step: "05",
    title: "持续增长",
    subtitle: "长效价值",
    description: "建立长期增长机制，不断优化运营策略，助力业务持续稳定增长。",
    details: [
      "长期增长机制搭建",
      "策略持续迭代优化",
      "市场机会持续挖掘",
      "陪伴式成长支持",
    ],
    icon: TrendingUp,
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-600",
  },
];
