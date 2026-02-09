import { 
  Eye,
  BarChart3,
  Lightbulb,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface AIPillarStat {
  value: string;
  label: string;
  sublabel: string;
}

export interface AIPillar {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  stats: AIPillarStat[];
  color: string;
  gradient: string;
}

export const aiPillars: AIPillar[] = [
  {
    id: "visual",
    icon: Eye,
    title: "视觉内容智能",
    subtitle: "让创意不再受限",
    description: "基于Stable Diffusion和MidJourney的AI图像生成能力，实现产品场景图快速生成、智能抠图、A/B测试素材批量产出，大幅降低视觉内容制作成本。",
    capabilities: [
      "Stable Diffusion/MidJourney场景图生成",
      "智能抠图与背景替换",
      "多平台尺寸自动适配",
      "A/B测试素材批量生成",
    ],
    stats: [
      { value: "3天", label: "→ 30分钟", sublabel: "制作时间缩短" },
      { value: "85%", label: "成本降低", sublabel: "视觉素材成本" },
      { value: "1200+", label: "月均生成", sublabel: "营销图片数量" },
    ],
    color: "cyan",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: "data",
    icon: BarChart3,
    title: "运营数据智能",
    subtitle: "让数据产生价值",
    description: "多源数据自动采集与实时分析，提供销售趋势洞察、异常预警、竞品价格监控和库存需求预测，将数据转化为可执行的商业洞察。",
    capabilities: [
      "多源数据自动采集与清洗",
      "实时销售趋势分析",
      "竞品价格监控与预警",
      "库存需求智能预测",
    ],
    stats: [
      { value: "8小时", label: "→ 10分钟", sublabel: "报告生成时间" },
      { value: "10x", label: "响应提升", sublabel: "价格调整速度" },
      { value: "92%", label: "准确率", sublabel: "库存周转预测" },
    ],
    color: "indigo",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    id: "decision",
    icon: Lightbulb,
    title: "商业决策智能",
    subtitle: "让决策更加精准",
    description: "DSK智能决策系统基于多维度数据构建选品评分模型，实现广告自动优化、动态定价和ROI预测，用数据驱动每一个商业决策。",
    capabilities: [
      "DSK智能选品评分模型",
      "广告自动优化与预算分配",
      "动态定价引擎",
      "ROI预测与风险评估",
    ],
    stats: [
      { value: "30%", label: "→ 65%", sublabel: "选品成功率" },
      { value: "35%", label: "平均降低", sublabel: "ACOS优化" },
      { value: "5-8%", label: "毛利率提升", sublabel: "定价优化收益" },
    ],
    color: "violet",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: "collaboration",
    icon: Users,
    title: "协同管理智能",
    subtitle: "让协作更加高效",
    description: "智能任务分配、项目风险预警、会议纪要自动生成和知识库智能检索，提升团队协作效率，沉淀企业知识资产。",
    capabilities: [
      "智能任务分配与调度",
      "项目风险自动预警",
      "会议纪要自动生成",
      "知识库智能检索",
    ],
    stats: [
      { value: "95%", label: "准时率", sublabel: "项目交付" },
      { value: "5x", label: "效率提升", sublabel: "知识检索" },
      { value: "50%", label: "周期缩短", sublabel: "新人上手" },
    ],
    color: "emerald",
    gradient: "from-emerald-500 to-teal-500",
  },
];
