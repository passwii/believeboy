import { Building2, TrendingUp, Target } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface PricingPlan {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  priceRange: string;
  priceUnit: string;
  description: string;
  features: string[];
  extraInfo: string;
  color: "blue" | "cyan" | "violet";
  featured: boolean;
  badge?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "pro",
    icon: "building",
    title: "Pro 方案",
    subtitle: "专业起步计划",
    priceRange: "¥4,000 - ¥6,000",
    priceUnit: "/月",
    description: "适合月销售额0-5W美金的中小卖家，刚起步或处于运营瓶颈期",
    features: [
      "亚马逊 + 沃尔玛双平台运营",
      "店铺诊断与6-12月运营路线图",
      "每月筛选2-4款潜力产品",
      "PPC广告全托管（SP、SB、SD）",
      "FBA/WFS库存实时预警与补货计划",
      "每周数据周报 + 每月复盘教学",
      "1对1专属运营经理，工作日9:00-21:00支持",
    ],
    extraInfo: "单平台¥4,000/月 · 双平台¥6,000/月 · 最低6个月",
    color: "blue",
    featured: false,
  },
  {
    id: "max",
    icon: "trending",
    title: "Max 方案",
    subtitle: "新手企业全托管起步计划",
    priceRange: "¥88,000 - ¥128,000",
    priceUnit: "/年",
    description: "适合首次涉足跨境电商的企业，无亚马逊、沃尔玛平台运营经验，无内部专业运营团队",
    features: [
      "亚马逊北美站 + 沃尔玛美国站双平台全包",
      "全流程入驻代办及品牌备案指导",
      "每月4-6个潜力产品筛选及Listing全优化",
      "双平台广告全托管（目标ACoS≤30%）",
      "FBA/WFS库存预警及补货计划",
      "每周数据周报 + 每月深度复盘会",
      "1对1专属运营经理，工作日9:00-21:00支持",
    ],
    extraInfo: "标准价¥128,000/年 · 经济价¥88,000/年 · 最低12个月 · 业绩提成阶梯7%-13%",
    color: "cyan",
    featured: true,
    badge: "推荐",
  },
  {
    id: "ultra",
    icon: "target",
    title: "Ultra 方案",
    subtitle: "老卖家增长托管计划",
    priceRange: "¥10,000 - ¥15,000",
    priceUnit: "/月",
    description: "适合已有稳定跨境运营基础的老卖家，月销3-15万+美金，面临业绩瓶颈或团队离职断层问题",
    features: [
      "亚马逊 + 沃尔玛双平台深度全托管",
      "深度诊断与12-24个月长期增长战略",
      "每月8-15个潜力爆款挖掘与系列化布局",
      "广告全域操盘（目标ACoS≤22%）+ 品牌内容营销",
      "FBA多仓布局优化，规避2026涨费及超龄罚款",
      "24小时专业客服外包 + 差评拦截（目标评分≥4.6）",
      "AI数据仪表盘 + 季度运营workshop知识转移",
      "离职应急专项：48小时内无缝接管运营",
    ],
    extraInfo: "主推价¥12,800/月 · 最低12个月 · 压2付1模式 · 业绩提成阶梯3.5%-5%",
    color: "violet",
    featured: false,
  },
];
