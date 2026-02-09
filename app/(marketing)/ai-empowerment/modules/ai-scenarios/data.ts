import { 
  FileText,
  Target,
  MessageSquare,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

export interface AIScenario {
  icon: LucideIcon;
  title: string;
  description: string;
  steps: string[];
  highlight: string;
}

export const aiScenarios: AIScenario[] = [
  {
    icon: FileText,
    title: "智能Listing优化",
    description: "AI自动生成多版本标题、五点描述和A+页面文案，支持一键翻译多语言版本，关键词覆盖率提升40%，自然流量增长65%。",
    steps: ["输入产品参数", "生成3版标题方案", "自动输出五点描述", "HTML格式A+文案", "一键多语言翻译"],
    highlight: "关键词覆盖率 +40%",
  },
  {
    icon: Target,
    title: "AI广告投放",
    description: "自动识别高转化关键词、实时监测ACOS并自动暂停低效广告、竞品ASIN自动定位，ACOS从45%降至22%，节省广告费用30%。",
    steps: ["关键词智能识别", "ACOS实时监测", "自动预算分配", "竞品ASIN定位", "效果持续优化"],
    highlight: "ACOS降低 35%",
  },
  {
    icon: MessageSquare,
    title: "智能客服",
    description: "24/7自动回复常见问题，复杂问题智能分类并分配给对应客服，多语言实时翻译支持，客户满意度提升22%。",
    steps: ["7×24自动回复", "问题智能分类", "情感风险识别", "多语言翻译", "自动升级处理"],
    highlight: "响应时间 5分钟",
  },
  {
    icon: LayoutDashboard,
    title: "数据决策看板",
    description: "整合多平台数据，实时展示销售趋势、库存状态、广告表现等核心指标，异常自动预警，让决策有据可依。",
    steps: ["多平台数据整合", "实时指标展示", "异常自动预警", "趋势智能分析", "决策建议生成"],
    highlight: "报告生成 10分钟",
  },
];
