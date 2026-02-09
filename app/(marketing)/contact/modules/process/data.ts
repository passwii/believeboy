import {
  MessageSquare,
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

// 合作流程步骤
export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "初步咨询",
    description: "了解您的产品、目标和需求，为您提供初步建议",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "需求诊断",
    description: "免费为您提供市场分析和运营诊断",
    icon: HelpCircle,
  },
  {
    step: "03",
    title: "方案定制",
    description: "根据诊断结果制定专属合作方案",
    icon: CheckCircle2,
  },
  {
    step: "04",
    title: "签约合作",
    description: "明确目标、KPI和服务内容，正式启动合作",
    icon: ArrowRight,
  },
];
