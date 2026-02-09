import { 
  Search, 
  Target, 
  Zap, 
  BarChart3, 
  TrendingUp,
  type LucideIcon 
} from "lucide-react";

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const serviceProcess: ServiceProcessStep[] = [
  {
    step: "01",
    title: "需求诊断",
    description: "深入了解您的业务现状、目标市场与核心诉求，全面分析现有运营数据与挑战。",
    icon: Search,
  },
  {
    step: "02",
    title: "策略制定",
    description: "基于诊断结果，制定个性化的市场进入策略与运营方案，明确目标与执行路径。",
    icon: Target,
  },
  {
    step: "03",
    title: "执行落地",
    description: "专业团队按计划执行各项运营工作，确保每个环节高质量完成，实时同步进度。",
    icon: Zap,
  },
  {
    step: "04",
    title: "数据优化",
    description: "持续监控关键数据指标，通过数据分析发现问题并进行针对性优化调整。",
    icon: BarChart3,
  },
  {
    step: "05",
    title: "持续增长",
    description: "建立长期增长机制，不断优化运营策略，助力业务持续稳定增长。",
    icon: TrendingUp,
  },
];
