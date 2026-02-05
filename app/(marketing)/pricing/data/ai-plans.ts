import { Zap } from "lucide-react";

export interface AIPlan {
  name: string;
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
    price: "¥2,000",
    unit: "/月",
    description: "适合初创卖家，自动化基础运营工作",
    features: [
      "AI Listing文案生成",
      "智能客服自动回复",
      "数据报表自动生成",
    ],
    color: "blue",
  },
  {
    name: "AI-Suite 专业版",
    price: "¥5,000",
    unit: "/月",
    description: "适合成长型卖家，全方位AI赋能",
    features: [
      "包含基础版全部功能",
      "AI图像生成（200张/月）",
      "广告智能优化",
      "选品决策支持",
    ],
    color: "cyan",
    featured: true,
  },
  {
    name: "AI-Suite 企业版",
    price: "定制报价",
    unit: "",
    description: "适合大型卖家，无限制AI能力",
    features: [
      "全部功能无限制",
      "私有模型部署",
      "API对接",
      "专属技术支持",
    ],
    color: "violet",
  },
];

// Re-export Zap icon for use in components
export { Zap };
