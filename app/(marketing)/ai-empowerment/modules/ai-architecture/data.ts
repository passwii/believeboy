import { 
  Brain,
  Image,
  Bot,
  type LucideIcon,
} from "lucide-react";

export interface AIModel {
  category: string;
  icon: LucideIcon;
  items: string[];
  description: string;
}

export interface DataAsset {
  label: string;
  value: string;
  unit: string;
  description: string;
}

export interface AIArchitecture {
  models: AIModel[];
  dataAssets: DataAsset[];
}

export const aiArchitecture: AIArchitecture = {
  models: [
    {
      category: "大语言模型",
      icon: Brain,
      items: ["Qwen3-Next", "DeepSeek-V3.2", "Gemini3", "Grok"],
      description: "智能文案、客服对话、决策分析",
    },
    {
      category: "图像生成模型",
      icon: Image,
      items: ["Stable Diffusion", "MidJourney API"],
      description: "产品图、营销素材、A+页面设计",
    },
    {
      category: "专项服务模型",
      icon: Bot,
      items: ["6+ 文本与邮件专用模型"],
      description: "Listing优化、客服回复、邮件营销",
    },
  ],
  dataAssets: [
    { label: "营销图片库", value: "1200+", unit: "张", description: "视觉素材生成与参考" },
    { label: "运营数据", value: "263", unit: "GB", description: "趋势分析、决策支持" },
    { label: "文案模板", value: "500+", unit: "套", description: "Listing、邮件、广告文案" },
    { label: "客服对话", value: "10万+", unit: "条", description: "智能客服训练优化" },
  ],
};
