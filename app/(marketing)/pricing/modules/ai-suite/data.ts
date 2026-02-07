import { Zap, Sparkles, Building2 } from "lucide-react";

export interface AIPlan {
  name: string;
  icon: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  color: "blue" | "cyan" | "violet";
  featured?: boolean;
}

export const aiPlans: AIPlan[] = [
  {
    name: "AI-Suite 基础版",
    icon: "zap",
    price: "¥2,000.00",
    unit: "/月",
    description: "适合初创卖家，自动化基础运营工作",
    features: [
      "AI Listing文案生成 - 智能生成优质产品描述",
      "智能客服自动回复 - 7x24小时自动响应",
      "数据报表自动生成 - 每日/周/月运营报告",
      "基础数据分析 - 销售趋势与库存预警",
    ],
    color: "blue",
  },
  {
    name: "AI-Suite 专业版",
    icon: "sparkles",
    price: "¥5,000.00",
    unit: "/月",
    description: "适合成长型卖家，全方位AI赋能",
    features: [
      "包含基础版全部功能",
      "AI图像生成 - 200张/月高清产品图",
      "广告智能优化 - 自动调整出价与投放",
      "选品决策支持 - 数据驱动选品分析",
      "优先技术支持 - 专属客服通道",
    ],
    color: "cyan",
    featured: true,
  },
  {
    name: "AI-Suite 企业版",
    icon: "building",
    price: "定制报价",
    unit: "",
    description: "适合大型卖家，无限制AI能力",
    features: [
      "全部功能无限制使用",
      "私有模型部署 - 定制化AI模型",
      "API对接 - 与现有系统无缝集成",
      "专属技术支持 - 一对一服务保障",
      "定制化培训 - 团队使用指导",
    ],
    color: "violet",
  },
];

// Re-export icons for use in components
export { Zap, Sparkles, Building2 };
