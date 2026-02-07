import { Building2, TrendingUp, Target, LucideIcon } from "lucide-react";

export interface SelectionGuideItem {
  stage: string;
  recommendation: string;
  icon: LucideIcon;
  price: string;
  priceNote: string;
  targetAudience: string;
  monthlySales: string;
  coreFeatures: string[];
  highlightedFeature: string;
  platform: string;
  minCommitment: string;
}

export const selectionGuide: SelectionGuideItem[] = [
  {
    // Pro 方案（起步阶段）
    stage: "刚起步，预算有限",
    recommendation: "Pro 方案",
    icon: Building2,
    price: "¥4,000/月起",
    priceNote: "单平台价格",
    targetAudience: "中小卖家，刚起步或处于运营瓶颈期",
    monthlySales: "月销 0-5W 美金",
    coreFeatures: [
      "店铺诊断 & 运营规划",
      "每月 2-4 款潜力选品",
      "PPC 广告全托管",
      "FBA 库存预警管理",
      "专属运营经理对接",
    ],
    highlightedFeature: "压2付1模式，续约享9折",
    platform: "单平台/双平台可选",
    minCommitment: "最低 6 个月",
  },
  {
    // Max 方案（增长阶段）
    stage: "有一定基础，追求增长",
    recommendation: "Max 方案",
    icon: TrendingUp,
    price: "¥88,000/年起",
    priceNote: "经济版价格",
    targetAudience: "首次涉足跨境电商的企业，无运营经验",
    monthlySales: "月销 0-10W 美金",
    coreFeatures: [
      "双平台全流程代办",
      "品牌备案 & 商标注册",
      "每月 4-6 个潜力产品",
      "A+ 页面 & Listing 优化",
      "广告全托管 目标 ACoS≤30%",
      "1对1 运营经理 24h 响应",
    ],
    highlightedFeature: "12项全托管服务，零基础起步",
    platform: "双平台（亚马逊+沃尔玛）",
    minCommitment: "12 个月",
  },
  {
    // Ultra 方案（成熟阶段）
    stage: "成熟品牌，寻求战略伙伴",
    recommendation: "Ultra 方案",
    icon: Target,
    price: "¥12,800/月起",
    priceNote: "主推价",
    targetAudience: "已有稳定运营基础的老卖家，面临业绩瓶颈",
    monthlySales: "月销 3-15W+ 美金",
    coreFeatures: [
      "深度诊断 & 战略规划",
      "每月 8-15 个爆款选品",
      "PPC+DSP 全域广告",
      "多仓布局 & 自动补货",
      "品牌 & 内容营销",
      "48h 离职应急接管",
    ],
    highlightedFeature: "规模翻倍目标，1小时响应",
    platform: "双平台全包",
    minCommitment: "12 个月",
  },
];
