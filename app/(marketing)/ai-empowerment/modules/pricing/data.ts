export interface AIPricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export const aiPricingPlans: AIPricingPlan[] = [
  {
    name: "AI-Suite 基础版",
    price: "2,000",
    period: "/月",
    description: "适合刚起步的跨境卖家",
    features: [
      "AI Listing优化（50个/月）",
      "基础数据报表",
      "智能客服响应",
      "标准文案模板库",
      "邮件支持",
    ],
    cta: "开始试用",
    popular: false,
  },
  {
    name: "AI-Suite 专业版",
    price: "5,000",
    period: "/月",
    description: "适合成长型跨境企业",
    features: [
      "AI Listing优化（无限量）",
      "AI广告自动优化",
      "高级数据分析看板",
      "智能选品评分系统",
      "多语言客服支持",
      "专属客户成功经理",
      "API接口访问",
    ],
    cta: "立即订阅",
    popular: true,
  },
  {
    name: "AI-Suite 企业版",
    price: "定制",
    period: "报价",
    description: "适合大型跨境企业",
    features: [
      "专业版全部功能",
      "私有化模型部署",
      "定制化AI能力开发",
      "专属技术团队支持",
      "SLA服务保障",
      "优先功能更新",
      "企业培训服务",
    ],
    cta: "联系咨询",
    popular: false,
  },
];
